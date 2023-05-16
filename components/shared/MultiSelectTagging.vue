<template>
  <div class="relative">
    <section class="custom-multi-select">
      <SharedOnClickOutside
        :clickOutside="() => (showOptions = false)"
      >
      <div class="flex flex-wrap flex-col rounded border dark:border-gray-700">
        <div>
          <div
            v-for="tag in selectedTags"
            :key="tag[props.fieldName.key]"
            class="inline-flex items-center px-1 py-1 m-1 bg-gray-200 rounded dark:bg-gray-500 dark:text-gray-100"
          >
            <span class="text-xs font-semibold me-2">{{
              tag[props.fieldName.label]
            }}</span>
            <button
              @click="removeTag(tag)"
              class="-mt-1 t-3 w-4 h-6 pe-3 relative"
            >
              <Icon
                size="13"
                class="dark:hover:bg-gray-700 hover:bg-gray-300 rounded absolute top-2"
                name="mdi:close"
              />
            </button>
          </div>
        </div>
        <div class="relative">
          <input
            v-model="inputValue"
            @keyup.enter="addTag()"
            @keydown.escape="inputValue = ''"
            class="custom-input"
            placeholder="Add tag..."
            @click="showOptions = !showOptions"
          />
        </div>
        <Icon
          @click="showOptions = !showOptions"
          :class="showOptions ? 'rotate-180' : 'rotate-0'"
          class="absolute dark:text-white text-gray-900 text-lg right-2 top-3"
          name="mdi:chevron-down"
        />
      </div>
  
        <ul v-if="showOptions" class="list-items">
          <li
            v-for="option in filterResult"
            :key="option[props.fieldName.key]"
            @click="selectOption(option)"
            class="item"
          >
            {{ option[props.fieldName.label] }}
          </li>
        </ul>
        <ul class="list-items" v-if="showOptions && !filterResult.length">
          <li class="item text-center">No item found</li>
        </ul>
      </SharedOnClickOutside>
    </section>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  options: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  fieldName: {
    type: Object,
    required: false,
    default: () => {
      return {
        label: "name",
        key: "value",
      };
    },
  },
  modelValue: {
    type: Array,
  },
});

// emits
const emit = defineEmits(["update:modelValue"]);

// data
const selectedTags = ref<string[]>([]);
const inputValue = ref<string>("");
const showOptions = ref<boolean>(false);

//deep clone the options with ref
const options = reactive<Array<any>>([]);

// watch props options
watch(
  () => props.options,
  (newValue) => {
    options.splice(0, options.length, ...newValue);
  },
  { immediate: true }
);

function addTag() {
  if (inputValue.value && !selectedTags.value.includes(inputValue.value)) {
    selectedTags.value.push(inputValue.value);
    inputValue.value = "";
  }
}

function removeTag(tag: string) {
  // selectedTags.value = selectedTags.value.filter((t) => t !== tag);
  selectedTags.value.splice(selectedTags.value.indexOf(tag), 1);

  // add removed tag to options push to same index
  options.splice(props.options.indexOf(tag), 0, tag);
}

function selectOption(option: string) {
  selectedTags.value.push(option);
  showOptions.value = false;

  //remove selected option from options
  options.splice(options.indexOf(option), 1);
}

function filterOptions(query: string) {
  return options.filter((option) =>
    option[props.fieldName.label].toLowerCase().includes(query.toLowerCase())
  );
}

// computed
const filterResult = computed(() => {
  return filterOptions(inputValue.value).filter(
    (option) => !selectedTags.value.includes(option[props.fieldName.key])
  );
});

watch(selectedTags.value, (newValue, oldValue) => {
  emit("update:modelValue", newValue);
});

watch(
  () => inputValue.value,
  (newValue) => {
    if (newValue) {
      showOptions.value = true;
    } else {
      showOptions.value = false;
    }
  }
);
</script>
<style scoped>
.custom-multi-select {
  @apply bg-white  text-gray-900 text-sm rounded  outline-none  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
.custom-input {
  @apply w-full p-2 outline-none  block rounded  text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
.list-items {
  @apply absolute w-full max-h-40 mb-5 rounded overflow-y-auto z-10 py-1 dark:bg-gray-700 bg-white shadow-lg;
}
.list-items .item {
  @apply px-3 py-1 text-sm text-gray-700 hover:text-white dark:text-white cursor-pointer hover:bg-blue-500;
}
</style>
