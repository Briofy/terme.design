<template>
  <nav
    class="bg-white border-gray-200 px-4 lg:px-6 py-1 dark:bg-gray-800 shadow-md md:block hidden">
    <div class="py-3 px-4 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 text-sm font-medium">
          <li
            v-for="(subNavItem, subNavIndex) in subNavLinks"
            :key="subNavIndex"
            class="me-8">
            <NuxtLink
              :to="localepath(subNavItem.link)"
              class="hover:text-blue-700 text-gray-600 dark:text-gray-300"
              aria-current="page"
              active-class="!text-blue-700 dark:!text-blue-500">
              {{ subNavItem.title }}
            </NuxtLink>
          </li>
        </ul>
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          data-dropdown-placement="bottom"
          class="text-gray-500 md:hidden dark:hover:bg-gray-600 dark:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1.5">
          <svg
            class="w-5 h-5 text-gray-700 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button>
        <div
          id="dropdown"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault">
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Marketplace</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Resources</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Forum</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Support</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localepath = useLocalePath();

// Sub Nav Links
const subNavLinks = ref([
  { title: "Finance", link: "/my/finance" },
  { title: "Products", link: "/my/products" },
  { title: "Trading Accounts", link: "/my/finance/transactions" },
]);
</script>
