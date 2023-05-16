<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { initFlowbite } from "flowbite";
import useBootstrap from "./core/useBootstrap";

useBootstrap();
const route = useRoute();
watch(
  () => route.path,
  () => {
    initFlowbite();
  }
);
</script>
