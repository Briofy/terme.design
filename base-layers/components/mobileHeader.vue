<template>
  <button
    type="button"
    data-collapse-toggle="search-bar"
    aria-expanded="false"
    class="sm:flex md:hidden hidden me-1 mx-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clip-rule="evenodd"></path>
    </svg>
    <span class="sr-only">Search</span>
  </button>

  <button
    data-collapse-toggle="navbar-search"
    type="button"
    class="inline-flex items-center ms-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    aria-controls="navbar-search"
    aria-expanded="false">
    <span class="sr-only">Open menu</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"></path>
    </svg>
  </button>
  <div
    class="items-center row hidden w-full md:flex md:w-auto pb-3 md:order-1"
    id="search-bar">
    <div class="relative mt-3 md:hidden">
      <div
        class="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-5 h-5 text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"></path>
        </svg>
      </div>
      <input
        type="text"
        id="search-navbar"
        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..." />
    </div>
  </div>

  <div
    class="items-center row hidden w-full md:flex md:w-auto md:order-1"
    id="navbar-search">
    <div class="relative mt-3 sm:hidden">
      <div
        class="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-5 h-5 text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"></path>
        </svg>
      </div>
      <input
        type="text"
        id="search-navbar"
        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..." />
    </div>
    <ul
      id="accordion-color"
      data-accordion="collapse"
      class="flex md:hidden flex-col p-4 md:p-0 mt-4 font-medium border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li
        v-for="(extraLinkItem, extraLinkIndex) in mobileLinks"
        :key="extraLinkIndex"
        class="block py-2 relative pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
        <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a> -->
        <NuxtLink
          v-if="!extraLinkItem.subMenu"
          :key="extraLinkIndex"
          :to="localepath(extraLinkItem.link as string)"
          class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
          active-class="!text-blue-700 dark:!text-blue-500">
          {{ extraLinkItem.title }}
        </NuxtLink>
        <CompanyMegaMenu />

        <ul v-if="extraLinkItem.subMenu">
          <div
            id="accordion-color"
            data-accordion="collapse"
            data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
            <h2 id="accordion-color-heading-2 flex">
              <NuxtLink
                :key="extraLinkIndex"
                data-accordion-target="#accordion-color-body-2"
                aria-expanded="false"
                aria-controls="accordion-color-body-2"
                class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300 cursor-pointer"
                active-class="!text-blue-700 dark:!text-blue-500">
                {{ extraLinkItem.title }}
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0 inline"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </NuxtLink>
            </h2>
            <div
              id="accordion-color-body-2"
              class="hidden"
              aria-labelledby="accordion-color-heading-2">
              <div class="p-5 border-b-0 border-gray-200 dark:border-gray-700">
                <li
                  class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  v-for="item in extraLinkItem.subMenu">
                  <NuxtLink
                    :key="extraLinkIndex"
                    :to="localepath(item.link as string)"
                    class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
                    active-class="!text-blue-700 dark:!text-blue-500">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </ul>
  </div>

  <div
    id="accordion-color"
    data-accordion="collapse"
    data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
    <div
      class="items-center row hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-search">
      <ul
        class="flex md:hidden flex-col p-4 md:p-0 mt-4 font-medium border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li
          v-for="(extraLinkItem, extraLinkIndex) in mobileLinks"
          class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
          <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a> -->

          <NuxtLink
            :key="extraLinkIndex"
            :to="localepath(extraLinkItem.link as string)"
            class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
            active-class="!text-blue-700 dark:!text-blue-500">
            {{ extraLinkItem.title }}
          </NuxtLink>
          <CompanyMegaMenu />

          <ul v-if="extraLinkItem.subMenu">
            <div
              id="accordion-color"
              data-accordion="collapse"
              data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
              <h2
                id="accordion-color-heading-2"
                class="hover:text-blue-700 text-gray-600 dark:!text-gray-300">
                {{ extraLinkItem.title }}
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:focus:!text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-color-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-color-body-2">
                  <span></span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-2"
                class="hidden"
                aria-labelledby="accordion-color-heading-2">
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <li
                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    v-for="item in extraLinkItem.subMenu">
                    <NuxtLink
                      :key="extraLinkIndex"
                      :to="localepath(item.link as string)"
                      class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
                      active-class="!text-blue-700 dark:!text-blue-500">
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchInput = ref();
const userData = ref<User | unknown>();
const localepath = useLocalePath();

// Sub Nav Links
const subNavLinks = ref<Menu[]>([
  { title: "Finance", link: "/my/finance" },
  { title: "Products", link: "/my/products" },
  { title: "Trading Accounts", link: "/my/finance/transactions" },
]);

// Links beside dark mode button
const extraLinks = ref<Menu[]>([
  { title: "Pricing", link: "/pricing" },
  { title: "Help", link: "/help" },
  {
    title: "company",
    link: "#",
    subMenu: [
      { title: "Animation", link: "/" },
      { title: "Branding", link: "/" },
      { title: "Branding", link: "/" },
      { title: "Illustration", link: "/" },
      { title: "Mobile", link: "/" },
      { title: "Print", link: "/" },
      { title: "Product Design", link: "/" },
      { title: "Web Design", link: "/" },
    ],
  },
]);

const mobileLinks = ref([...extraLinks.value]);

let userStorage = useCookie("user").value;
userData.value = userStorage ?? undefined;

if (userData.value) {
  mobileLinks.value = [...subNavLinks.value];
}

// color mode
onBeforeMount(() => {
  // Ctrl K press to focus search input
  document.addEventListener("keydown", (event: any) => {
    if (
      event.ctrlKey &&
      (event.keyCode == 83 || event.keyCode == 11 || event.keyCode == 75)
    ) {
      searchInput.value.focus();
      event.preventDefault();
    }
  });
});
</script>
