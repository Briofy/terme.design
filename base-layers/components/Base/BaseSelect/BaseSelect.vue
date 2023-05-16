<template>
  <div
    class="w-full relative"
    tabindex="1"
    @focus="isOpen = !isOpen"
    @blur="isOpen = false"
    ref="selectParent"
  >
    <input
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
      type="text"
      disabled
      v-model="selectedItems"
    />

    <div
      v-if="isOpen"
      class="bg-slate-300 mt-3 transition-all space-y-3 rounded absolute p-3 w-full"
    >
      <span
        class="w-full block border cursor-pointer p-2"
        v-for="(item, index) in props.items"
        @click="onItemClick(item)"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const selectParent = ref();
const selectedItems = ref("");
const props = defineProps<{
  items: string[];
}>();

const onItemClick = (item: string) => {
  selectedItems.value += item + " ";
  selectParent.value.blur();
};
</script>
