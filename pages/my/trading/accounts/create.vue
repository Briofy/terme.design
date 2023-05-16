<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new trading account
      </h2>
      <section class="">
        <TradingAccountForm @submit="submitFrom" />
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
const { createTradingAccount } = useTradingStore();

const submitFrom = async (data: any) => {
  console.log(data);
  const res = await createTradingAccount(data as TradingAcoounts);
  console.log(res);
};
</script>

<style scoped></style>
