<template>
  <header id="main-header" class="sticky z-20 top-0">
    <Announcement />
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-1 dark:bg-gray-800">
      <div
        class="flex flex-wrap md:justify-between justify-center items-center"
      >
        <div class="flex justify-start items-center">
          <!-- <button id="toggleSidebar" @click="sidebar = !sidebar"
            class="p-2 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button> -->

          <NuxtLink :to="localepath('/')" class="flex me-4">
            <NuxtImg
              class="md:h-20 md:w-20 h-16 w-16 dark:hidden"
              :src="headerConfig.logo"
              alt="Trader4 logo"
            />
            <NuxtImg
              class="md:h-20 md:w-20 h-16 w-16 hidden dark:block"
              :src="headerConfig.darkLogo"
              alt="Trader4 logo"
            />
            <!-- <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              Trader4
            </span> -->
          </NuxtLink>
          <form
            action="#"
            method="GET"
            class="hidden md:block lg:pl-2"
            v-show="!headerConfig.hideSearchBar"
          >
            <label for="topbar-search" class="sr-only">Search</label>
            <div class="relative mt-1 lg:w-96">
              <div
                class="flex absolute inset-y-0 left-0 rtl:right-2 items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400 rtl:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                v-model="search"
                type="text"
                name="search"
                id="topbar-search"
                class="bg-gray-50 border border-gray-300 rtl:px-9 text-gray-900 sm:text-sm rounded outline-none focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search (Ctrl+K)"
                ref="searchInput"
              />
            </div>
          </form>
        </div>

        <div class="flex items-center lg:order-2">
          <NuxtLink
            v-for="(extraLinkItem, extraLinkIndex) in extraLinks"
            :key="extraLinkIndex"
            :to="localepath(extraLinkItem.link as string)"
            class="mx-2 hover:text-blue-700 text-gray-600 hidden md:block dark:text-gray-300"
            active-class="!text-blue-700 dark:!text-blue-500"
          >
            {{ extraLinkItem.title }}
          </NuxtLink>

          <CompanyMegaMenu v-if="headerConfig.megaMenu" />

          <LocaleTheme />

          <template v-if="userData">
            <!-- Notification -->
            <NotificationsDropDown />

            <!-- Applications -->
            <ApplicationsDropDown />

            <!-- User Menu -->
            <UserInfoDropDown />
          </template>
          <!-- Login Button -->
          <NuxtLink
            v-if="!userData"
            to="/auth/sign"
            class="sm:px-4 sm:border border-blue-600 mx-2"
            :class="headerConfig.loginButton.loginButtonClass"
            v-show="!headerConfig.loginButton.hideLoginButton"
          >
            <Icon
              :name="headerConfig.loginButton.loginButtonIconName"
              size="23px"
              class="me-2"
            />
            <span class="hidden sm:flex">{{
              headerConfig.loginButton.title
            }}</span>
          </NuxtLink>
        </div>

        <!-- MobileHeader Component  -->
        <MobileHeader />
      </div>
    </nav>
    <SubNavLinks v-if="userData" />
  </header>
</template>
<script setup lang="ts">
import { search } from "../composables/state";

const headerConfig = useAppConfig().config?.header;

const localepath = useLocalePath();
const userData = ref<User | unknown>();
const searchInput = ref();

let userStorage = useCookie("user").value;
userData.value = userStorage ?? undefined;

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

// Links beside dark mode button
const extraLinks = headerConfig.menu;
</script>
