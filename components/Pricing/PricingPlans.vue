<template>
  <div
    class="p-4 mb-4 w-fit text-sm text-green-800 rounded bg-green-100 dark:bg-gray-800 dark:text-green-400"
    role="alert"
  >
    Annually you have up to 16% off, which is 2 months
    <b>free </b>😍
  </div>

  <div class="flex items-center mb-10">
    <span class="text-base font-medium text-gray-900 dark:text-white me-3">
      Monthly
    </span>
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        v-model="activeBtn"
        type="checkbox"
        class="sr-only peer outline-none"
      />
      <div
        class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
    </label>

    <span class="text-base font-medium text-gray-900 dark:text-white m-4">
      Annually
    </span>

    <div class="-mt-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 49"
        width="50"
        height="49"
      >
        <path
          fill="currentColor"
          d="M36.99 11.6a.7.7 0 0 1 .6-.84.8.8 0 0 1 .9.63l-1.5.2Zm1.5-.21a19.55 19.55 0 0 1-7.51 19.77c-5.57 4.2-13.23 5.5-19.64 1.8l.72-1.26c5.72 3.3 12.7 2.22 17.94-1.72a18.17 18.17 0 0 0 6.99-18.39l1.5-.2Z"
        ></path>
        <path
          fill="currentColor"
          d="m10.02 36.23 4.22-7.3-6.44 1.15 2.22 6.15Z"
        ></path>
      </svg>
    </div>
  </div>
  <div
    class="mb-4 lg:mb-8 space-y-8 lg:grid lg:grid-cols-3 md:gap-12 xl:gap-16 lg:space-y-0"
  >
    <div
      v-for="(pricingCardItem, pricingCardIndex) in pricingItems"
      :key="pricingCardIndex"
      class="flex flex-col max-w-lg text-gray-900 dark:text-gray-400"
    >
      <h3 class="font-semibold text-gray-500 uppercase dark:text-gray-400">
        {{ pricingCardItem.type }}
      </h3>
      <!-- Price and currency -->
      <div class="flex items-baseline my-4">
        <span
          class="mr-2 text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          {{
            pricingCardItem.currency +
            (activeBtn === true
              ? pricingCardItem.price * 10
              : pricingCardItem.price)
          }}
        </span>
        <span class="text-gray-500 dark:text-gray-400"
          >/{{ activeBtn === true ? "Annually" : "Monthly" }}</span
        >
      </div>
      <!-- Price and currency -->

      <!-- If it was anually show badges -->
      <div
        v-show="activeBtn"
        class="p-4 mb-4 w-fit text-green-800 rounded bg-green-100 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        {{ pricingCardItem.badge }}

        <Icon
          :data-tooltip-target="`tooltip-${pricingCardItem.type}`"
          type="button"
          name="mdi:alert-circle-outline"
          size="1.2rem"
          class="outline-none"
        />

        <div
          :id="`tooltip-${pricingCardItem.type}`"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          {{ pricingCardItem.tooltip }}
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <!-- If it was anually show badges -->

      <p class="font-light text-gray-500 sm:text-lg dark:text-gray-300">
        {{ pricingCardItem.subtitle }}
      </p>
      <ul role="list" class="my-8 space-y-4 text-left">
        <li
          v-for="(featureItem, featureIndex) in pricingCardItem.features"
          :key="featureIndex"
          class="flex items-center space-x-3"
        >
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{{ featureItem }}</span>
        </li>
      </ul>
      <NuxtLink
        :to="pricingCardItem.link"
        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
      >
        Get started
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pricingItems: PricingCard[];
}>();

const activeBtn = ref(true);
</script>

<style scoped></style>
