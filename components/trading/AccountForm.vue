<template>
  <!-- Block start -->
  <section class="py-8 bg-white dark:bg-gray-900 lg:py-0">
    <div class="lg:flex">
      <div class="flex items-center mx-auto px-4 md:px-8 xl:px-0">
        <div class="w-full">
          <div
            class="flex items-center justify-center mb-8 space-x-4 lg:hidden"
          >
            <a href="#" class="flex items-center text-2xl font-semibold">
              <img
                class="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              />
              <span class="text-gray-900 dark:text-white">Flowbite</span>
            </a>
          </div>
          <ol
            class="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base"
          >
            <li
              v-for="(step, index) in steps"
              :key="index"
              :class="{
                'text-gray-900 dark:text-white': step.active,
                'text-gray-500 dark:text-gray-400': !step.active,
                'after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700':
                  steps.length - 1 !== index,
              }"
              class="flex items-center"
            >
              <div
                class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
              >
                <div class="mr-2 sm:mb-2 sm:mx-auto">{{ index + 1 }}</div>
                {{ step.title }}
              </div>
            </li>
          </ol>
          <section>
            <!-- Block end -->
            <VForm
              id="trading_account_create"
              class="form"
              @submit="nextStep"
              :validation-schema="currentSchema"
              keep-values
              v-slot="{ handleSubmit, values }"
            >
              <template v-if="index === 0">
                <div class="flex md:flex-row flex-col gap-4 my-3">
                  <div class="basis-full">
                    <label for="broker_id" class="custom-input-label"
                      >Broker
                    </label>
                    <VField
                      as="select"
                      name="broker_id"
                      class="custom-input"
                      v-model="model.broker_id"
                    >
                      <option
                        :value="item.uuid"
                        v-for="(item, index) in brokers"
                        :key="index"
                      >
                        {{ item.name }}
                      </option>
                    </VField>
                    <div class="text-red-500 text-sm p-1">
                      <div class="fv-help-block">
                        <VErrorMessage name="broker_id" />
                      </div>
                    </div>
                  </div>
                  <div class="md:basis-1/3 basis-full">
                    <label for="platform_id" class="custom-input-label"
                      >Platform ID</label
                    >
                    <VField
                      as="select"
                      name="platform_id"
                      class="custom-input"
                      v-model="model.platform_id"
                    >
                      <option
                        :value="item.uuid"
                        v-for="(item, index) in brokers"
                        :key="index"
                      >
                        {{ item.name }}
                      </option>
                    </VField>
                    <div class="text-red-500 text-sm p-1">
                      <div class="fv-help-block">
                        <VErrorMessage name="platform_id" />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="index === 1">
                <div class="basis-full">
                  <label for="server_id" class="custom-input-label"
                    >Server ID</label
                  >
                  <VField
                    as="select"
                    name="server_id"
                    class="custom-input"
                    v-model="model.server_id"
                  >
                    <option
                      :value="item.uuid"
                      v-for="(item, index) in brokers"
                      :key="index"
                    >
                      {{ item.name }}
                    </option>
                  </VField>
                  <div class="text-red-500 text-sm p-1">
                    <div class="fv-help-block">
                      <VErrorMessage name="server_id" />
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="index === 2">
                <div class="flex flex-row gap-4 my-3">
                  <div class="basis-1/2">
                    <label for="secret" class="custom-input-label"
                      >Secret</label
                    >
                    <VField
                      type="text"
                      name="secret"
                      class="custom-input"
                      v-model="model.secret"
                    />
                    <div class="text-red-500 text-sm p-1">
                      <VErrorMessage name="secret" />
                    </div>
                  </div>
                  <div class="basis-1/2">
                    <label for="read_only_secret" class="custom-input-label"
                      >Read Only Secret</label
                    >
                    <VField
                      type="text"
                      name="read_only_secret"
                      class="custom-input"
                      v-model="model.read_only_secret"
                    />
                    <div class="text-red-500 text-sm p-1">
                      <VErrorMessage name="read_only_secret" />
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="index === 3">
                <div class="gap-4 my-3">
                  <label for="identity" class="custom-input-label"
                    >Identity</label
                  >
                  <VField
                    type="text"
                    name="identity"
                    class="custom-input"
                    v-model="model.identity"
                  />
                  <div class="text-red-500 text-sm p-1">
                    <VErrorMessage name="identity" />
                  </div>
                </div>
              </template>
              <div class="my-4">
                <button
                  v-if="index !== 0"
                  @click="prevStep()"
                  type="button"
                  class="px-10 py-2.5 sm:py-2 text-sm font-medium text-center text-white rounded bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  prev
                </button>
                <button
                  v-if="index !== 3"
                  type="submit"
                  class="float-right px-10 py-2.5 sm:py-2 text-sm font-medium text-center text-white rounded bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Next
                </button>

                <button 
                v-if="index === 3"
                 type="submit"
                  class="float-right px-10 py-2.5 sm:py-2 text-sm font-medium text-center text-white rounded bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Finish</button>
              </div>

              <pre>{{ values }}</pre>
            </VForm>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import * as Yup from "yup";

// create 4 steps forms data
const steps = reactive([
  {
    title: "Markets",
    icon: "iconsminds-air-balloon-1",
    active: true,
  },
  {
    title: "Server",
    icon: "iconsminds-air-balloon-1",
    active: false,
  },
  {
    title: "Secret",
    icon: "iconsminds-air-balloon-1",
    active: false,
  },
  {
    title: "Identify",
    icon: "iconsminds-air-balloon-1",
    active: false,
  },
]);

const index = ref<number>(0);

function nextStep(values: any) {
  if (index.value === 3) {
    console.log("Done: ", JSON.stringify(values, null, 2));
    return;
  }

  steps[index.value].active = false;
  steps[index.value + 1].active = true;
  index.value++;
}
function prevStep() {
  // console.log("prevStep", index.value);
  steps[index.value].active = false;

  steps[index.value - 1].active = true;
  index.value--;
}

// Validations Account Details
const emit = defineEmits({
  // submit with type
  submit: (value: TradingAcoounts) => true,
});
const {
  fetchMarkets,
  markets,
  fetchBrokers,
  brokers,
  fetchPlatforms,
  platforms,
} = useMarketStore();

const model = reactive<TradingAcoounts>({
  broker_id: "",
  platform_id: "",
  server_id: "",
  identity: "",
  secret: "",
  read_only_secret: "",
} as TradingAcoounts);
// Validations Account Details
const schemas = [
  Yup.object().shape({
    broker_id: Yup.string().required().label("Broker ID"),
    platform_id: Yup.string().required().label("Platform ID"),
  }),
  Yup.object().shape({ server_id: Yup.string().required().label("Server") }),
  Yup.object().shape(
    {
      secret: Yup.string()
        .label("Secret")
        .when("read_only_secret", {
          is: (val: any) => !val,
          then: () =>
            Yup.string().required("Secret Or Read Only Secret Required!"),
        }),
      read_only_secret: Yup.string()
        .label("Read Only Secret")
        .when("secret", {
          is: (val: any) => !val,
          then: () =>
            Yup.string().required("Secret Or Read Only Secret Required!"),
        }),
    },
    ["secret", "read_only_secret"] as any
  ),
  Yup.object().shape({ identity: Yup.string().required().label("Identity") }),
];
const currentSchema = computed(() => {
  return schemas[index.value];
});

onMounted(() => {
  nextTick(() => {
    fetchMarkets();
    fetchBrokers();
    fetchPlatforms();
  });
});

const onSubmit = () => {
  console.log(JSON.stringify(model, null, 2));
  // emit to parent
  emit("submit", model as TradingAcoounts);
};
</script>

<style scoped>
.custom-input-label {
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
.custom-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
</style>
