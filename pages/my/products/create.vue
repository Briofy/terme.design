<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new event
      </h2>
      <VForm
        id="products_create"
        class="form"
        novalidate
        @submit="submitForm()"
        :validation-schema="form">
        <div class="grid grid-cols-3 gap-4">
          <div class="mb-4 space-y-4 lg:col-span-2 col-span-full">
            <div class="flex flex-row gap-4">
              <div class="md:basis-1/2">
                <label for="title" class="custom-input-label">Title</label>
                <VField
                  type="text"
                  name="title"
                  class="custom-input"
                  v-model="model.title" />
                <div class="text-red-500 text-sm p-1">
                  <VErrorMessage name="title" />
                </div>
              </div>
              <div class="md:basis-1/2">
                <label for="title" class="custom-input-label">Type</label>
                <VField
                  as="select"
                  name="type"
                  class="custom-input"
                  v-model="model.type">
                  <option
                    :value="item.value"
                    v-for="(item, index) in types"
                    :key="index">
                    {{ item.name }}
                  </option>
                </VField>
                <div class="text-red-500 text-sm p-1">
                  <div class="fv-help-block">
                    <VErrorMessage name="type" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label for="slogan" class="custom-input-label">Slogan</label>
              <VField
                type="text"
                name="slogan"
                class="custom-input"
                v-model="model.slogan" />
              <div class="text-red-500 text-sm p-1">
                <VErrorMessage name="slogan" />
              </div>
            </div>
            <div>
              <label for="description" class="custom-input-label"
                >Introduction</label
              >
              <VField
                type="text"
                name="introduction"
                class="custom-input"
                v-model="model.introduction" />
              <div class="text-red-500 text-sm p-1">
                <VErrorMessage name="introduction" />
              </div>
            </div>
            <div>
              <label for="description" class="custom-input-label"
                >Description</label
              >
              <VField
                type="text"
                name="description"
                class="custom-input"
                v-model="model.description" />
              <div class="text-red-500 text-sm p-1">
                <VErrorMessage name="description" />
              </div>
            </div>

            <div class="md:flex flex-row gap-4 w-full">
              <div class="row md:w-1/2">
                <label class="custom-input-label mt-3"> Logo</label>
                <div class="basis-1/2 items-center justify-center">
                  <label
                    class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div
                      v-show="!logoFile"
                      class="flex flex-col items-center justify-center pt-5 pb-6">
                      <Icon
                        class="w-10 h-10 mb-3 text-gray-400 me-2"
                        name="mdi:cloud-upload-outline"
                        size="23px" />

                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 5 MB)
                      </p>
                    </div>

                    <div v-show="logoFile" class="flex">
                      <p class="flex text-md text-gray-500 dark:text-gray-400">
                        {{ logoFile }}
                      </p>
                      <Icon
                        @click="removeLogo"
                        class="w-5 h-5 mx-1 my-1 dark:hover:bg-gray-500 hover:bg-gray-200 rounded-sm text-gray-500 dark:text-gray-100 me-2"
                        name="mdi:close" />
                    </div>

                    <Field
                      id="logoPicker"
                      name="logoImg"
                      type="file"
                      class="hidden"
                      @change="onFileChangeLogo($event)" />
                  </label>
                  <div class="text-red-500 text-sm p-1">
                    <VErrorMessage name="logoImg" />
                  </div>
                </div>
              </div>
              <div class="row md:w-1/2">
                <label class="custom-input-label mt-3"> Cover</label>
                <div class="basis-1/2 items-center justify-center">
                  <label
                    class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div
                      v-show="!coverFile"
                      class="flex flex-col items-center justify-center pt-5 pb-6">
                      <Icon
                        class="w-10 h-10 mb-3 text-gray-400 me-2"
                        name="mdi:cloud-upload-outline"
                        size="23px" />
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 5 MB)
                      </p>
                    </div>
                    <!-- <p class="text-gray-800" id="coverImage">
                    <Icon
                      class="w-10 h-10 mb-3 text-gray-400 me-2"
                      name="mdi:cloud-upload-outline"
                      size="23px" />
                  </p> -->
                    <div v-show="coverFile" class="flex">
                      <p class="flex text-md text-gray-500 dark:text-gray-400">
                        {{ coverFile }}
                      </p>
                      <Icon
                        @click="removeCover"
                        class="w-5 h-5 mx-1 my-1 dark:hover:bg-gray-500 hover:bg-gray-200 rounded-sm text-gray-500 dark:text-gray-100 me-2"
                        name="mdi:close" />
                    </div>
                    <Field
                      id="coverPicker"
                      name="coverImg"
                      type="file"
                      class="hidden"
                      @change="onFileChangeCover($event)" />
                  </label>
                  <div class="text-red-500 text-sm p-1">
                    <ErrorMessage name="coverImg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4"></div>
          </div>
          <div class="mb-4 space-y-4 lg:col-span-1 col-span-full">
            <div>
              <label for="categories" class="custom-input-label">
                Category</label
              >
              <SharedMultiSelectTagging
                v-model="model.categories"
                :options="categories"
                :field-name="{
                  label: 'title',
                  key: 'uuid',
                }" />
            </div>
            <div>
              <label for="platforms" class="custom-input-label">
                Platform</label
              >
              <SharedMultiSelectTagging
                v-model="model.platforms"
                :options="platforms"
                :field-name="{
                  label: 'title',
                  key: 'uuid',
                }" />
            </div>

            <div>
              <label for="markets" class="custom-input-label"> Market</label>
              <SharedMultiSelectTagging
                v-model="model.markets"
                :options="markets"
                :field-name="{
                  label: 'name',
                  key: 'uuid',
                }" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="text-white justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Add new event
        </button>
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";

interface FilesType {
  name: string;
  size: number;
  type: string;
  file: File;
}
const FILE_SIZE = 5242880; // 5MB in bytes
const SUPPORTED_FORMATS = [
  "image/svg",
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/gif",
];

const {
  fetchCategories,
  categories,
  fetchMarkets,
  markets,
  fetchPlatforms,
  platforms,
} = useMarketStore();

const types = ref<Types[]>([
  {
    name: "BOT",
    value: 13000,
  },
  {
    name: "INDICATOR",
    value: 13001,
  },
  {
    name: "SYSTEM",
    value: 13002,
  },
  {
    name: "SCRIPT",
    value: 13003,
  },
  {
    name: "TEMPLATE",
    value: 13004,
  },
  {
    name: "ALGORITHM",
    value: 13005,
  },
  {
    name: "ARTIFICIAL_INTELLIGENCE",
    value: 13006,
  },
  {
    name: "PORTFOLIO",
    value: 13007,
  },
  {
    name: "AI_LIVE",
    value: 13008,
  },
  {
    name: "FUNDED_ACCOUNT",
    value: 13009,
  },
  {
    name: "TRADING_SIGNAL",
    value: 13010,
  },
  {
    name: "TRADING_STRATEGY",
    value: 13011,
  },
  {
    name: "COURSE",
    value: 13012,
  },
]);
const model = ref<Product>({} as Product);
// Validations Account Details
const form = Yup.object().shape({
  title: Yup.string().required().max(128).label("Title"),
  slogan: Yup.string().required().max(256).label("Slogan"),
  logo: Yup.mixed().nonNullable().label("Logo"),
  cover: Yup.mixed().nonNullable().label("Cover"),
  type: Yup.number().required().label("Type"),
  introduction: Yup.string().required().max(512).label("Introduction"),
  description: Yup.string().required().max(1024).label("Description"),
  categories: Yup.array().of(Yup.string()).required().label("Categories"),
  tags: Yup.array().of(Yup.string()).required().label("Tags"),
  platforms: Yup.string().required().label("Platforms"),
  markets: Yup.string().required().label("Markets"),

  logoImg: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "Only documents up to 5MB are permitted.",
      (files) => files && files.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (files) => files && SUPPORTED_FORMATS.includes(files.type)
    ),

  coverImg: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "Only documents up to 5MB are permitted.",
      (files) => files && files.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (files) => files && SUPPORTED_FORMATS.includes(files.type)
    ),
});

const coverFile = ref();

const logoFile = ref();

onMounted(() => {
  nextTick(() => {
    fetchCategories();
    fetchMarkets();
    fetchPlatforms();
  });
});

const onFileChangeLogo = (e: any) => {
  var files = e.target.files || e.dataTransfer.files;
  console.log(e.target.files || e.dataTransfer.files);
  if (!files.length) return;
  model.value.logo = files[0];
  logoFile.value = files[0].name;
};

const removeLogo = () => {
  logoFile.value = "";
  model.value.logo = null;
};

const onFileChangeCover = (e: any) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  model.value.cover = files[0];
  coverFile.value = files[0].name;
};

const removeCover = () => {
  coverFile.value = "";
  model.value.cover = null;
};

const submitForm = async () => {
  console.log("submitForm", model.value);
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
