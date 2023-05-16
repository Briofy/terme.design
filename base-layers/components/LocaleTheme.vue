<template>
  <div
    class="rounded justify-center flex dark:bg-gray-800 z-20 border-gray-200 dark:border-gray-700"
  >
    <div v-show="!headerConfig.hideThemeSelector">
      <button
        v-show="colorMode.preference === 'light'"
        id="theme-toggle"
        @click="colorMode.preference = 'dark'"
        type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded text-sm p-2.5"
      >
        <Icon size="1.25rem" name="mdi:weather-night" />
      </button>
      <button
        id="theme-toggle"
        @click="colorMode.preference = 'light'"
        v-show="colorMode.preference === 'dark'"
        type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded text-sm p-2.5"
      >
        <Icon
          size="1.25rem"
          name="mdi:weather-sunny"
          @click="colorMode.preference = 'light'"
        />
      </button>
    </div>
    <div
      id="tooltip-settings"
      role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 transition-opacity duration-300 tooltip"
    >
      Settings page
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button
      v-show="!headerConfig.hideLanguageSelector"
      type="button"
      id="language-dropdown-toggle"
      data-dropdown-toggle="language-dropdown"
      class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <img
        class="h-5 w-5 rounded mt-0.5"
        :src="activeLocale?.flagSrc"
        :alt="activeLocale?.text"
      />
    </button>
    <!-- Dropdown -->
    <div
      class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      id="language-dropdown"
      v-show="headerConfig.languageList.length > 1"
    >
      <ul class="py-1" role="none">
        <li v-for="(localeItem, localeIndex) in localeItems" :key="localeIndex">
          <NuxtLink
            :to="switchLocalePath(localeItem.lang)"
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
            role="menuitem"
            @click="switchActiveLocale(localeIndex)"
          >
            <div class="inline-flex items-center">
              <img
                class="h-3.5 w-3.5 rounded me-2"
                :src="localeItem.flagSrc"
                :alt="localeItem.text"
              />
              {{ localeItem.text }}
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from "flowbite";

// i18n
const switchLocalePath = useSwitchLocalePath();
const colorMode = useColorMode();

const headerConfig = useAppConfig().config?.header;

// Locale List
const localeItems = ref(headerConfig.languageList);

const activeLocale = ref(
  localeItems.value.find((x) => x.lang === useI18n().locale.value) ??
    localeItems.value[0]
);

// Active local Handler
const localeDropDownKey = ref(0);
const switchActiveLocale = (index: number) => {
  activeLocale.value = localeItems.value[index];
  localeDropDownKey.value++;

  /*
   * $targetEl: required
   * $triggerEl: required
   * options: optional
   */
  // set the dropdown menu element
  const $targetEl = document.getElementById("language-dropdown");
  // set the element that trigger the dropdown menu on click
  const $triggerEl = document.getElementById("language-dropdown-toggle");
  const dropdown = new Dropdown($targetEl, $triggerEl);
  // hide the dropdown menu
  dropdown.hide();
};

onMounted(() => {
  /* default nuxt color mode is system */
  const color = localStorage.getItem("nuxt-color-mode");
  /* for first time render color select because default color is system */
  if (color === "system" || !color) {
    colorMode.preference = "light";
  }
});
</script>

<style scoped></style>
