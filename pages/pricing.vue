<template>
  <section class="bg-white dark:bg-gray-900 rounded">
    <div class="py-8 px-4 mx-auto lg:p-10">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Designed for Serious Financial Netizens like You
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Here at Trader4 we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <PricingPlans :pricingItems="pricingItems" />
    </div>

    <div
      class="flex items-center p-4 bg-white border justify-center border-gray-100 top-6 dark:bg-gray-700 dark:border-gray-600"
    >
      <div
        class="flex flex-col items-center mb-3 mr-4 md:items-center md:flex-row md:mb-0"
      >
        <div class="border-gray-200 border-e me-2">
          <div class="flex items-center mr-2">
            <img
              width="70"
              class="block dark:hidden"
              src="/img/logo-plain.svg"
              alt="Trader4 Logo"
            />
            <img
              width="70"
              class="hidden dark:block"
              src="/img/logo-plain-dark.svg"
              alt="Trader4 Logo"
            />
            Enterprise
          </div>
        </div>
        <p
          class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
        >
          Are you looking for an enterprise services? We are here, We will be
          happy to hear your needs.
        </p>
      </div>
      <div class="flex items-end flex-shrink-0">
        <a
          href="#"
          class="px-5 py-2 mr-2 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Contact Us
        </a>
      </div>
    </div>

    <!-- Tables Comes Here -->
    <PricingTableList />
  </section>
</template>

<script setup lang="ts">
const pricingItems = ref<PricingCard[]>([
  {
    type: "Pro",
    price: 99,
    currency: "$",
    period: "month",
    link: "/",
    subtitle:
      "Best option for personal use and for your next generation of trading.",
    features: [
      "Supply Demand, Algo Portfolio, and Bridge",
      "Risk Management of Financial Engineering",
      "No setup, monthly, or hidden fees",
    ],
    badge: `You save $198.00 a year`,
    tooltip:
      "Compared to paying monthly. The full monthly price is $99. The monthly price within the yearly subscription is $82.5.",
  },
  {
    type: "ADVANCE",
    price: 999,
    currency: "$",
    period: "month",
    link: "/",
    subtitle:
      "Best option for advance users, AI lovers, to start as Algo Trader.",
    features: [
      "Support from Trading Framework",
      "Data & Support Priority",
      "Rich Feature Access to Algo Trading",
      "Cloud StrategyQuant X Servers",
      "Money Management & Trading Plan",
      "AI Assitant & AI Coaching",
    ],
    badge: `You save $1998.00 a year`,
    tooltip:
      "Compared to paying monthly. The full monthly price is $999. The monthly price within the yearly subscription is $832.5.",
  },
  {
    type: "CORPORATE",
    price: 3999,
    currency: "$",
    period: "month",
    link: "/",
    subtitle:
      "Best option for companies to get trading as a service and/or infrastructure.",
    features: [
      "Trend Friend, Tchimoku, and Dashboard X",
      "Cash Flows and Portfolio Management",
      "ML Processing & FaaS",
      ">0.9 Fitness Guarantee in Algo Trading",
      "Full Report + AI Recommendations",
      "Up to 100 Algorithms/Basket",
      "Under One Hour Support",
      "Custom Cluster for Services",
      "1,000,000 Daily APIs Credit",
      "Auto Live Stream and Social Integrations",
      "Custom Cloud Images",
    ],
    badge: `You save $7998.00 a year`,
    tooltip:
      "Compared to paying monthly. The full monthly price is $3990. The monthly price within the yearly subscription is $3332.5.",
  },
]);
</script>
