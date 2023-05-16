<template>
  <section class="text-center dark:text-white">
    <h1 class="lg:text-8xl text-4xl font-extrabold">
      Make your website <br />
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        wonderful
      </span>
    </h1>

    <p class="md:text-xl my-10">
      Our landing page template works on all devices, so you only have to set it
      up once, and get beautiful results forever.
    </p>

    <div class="space-x-2 mb-10">
      <button
        class="bg-blue-600 px-4 py-2 rounded text-white dark:text-gray-300 dark:bg-blue-500"
      >
        Start free trial
      </button>
      <button
        class="bg-black px-4 py-2 rounded text-white dark:text-gray-300 dark:bg-gray-600"
      >
        Learn more
      </button>
    </div>

    <div class="border rounded max-w-xl mx-auto p-5">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quam magni
      harum, totam perspiciatis earum quidem autem saepe? Nesciunt voluptatem a
      quas, error magnam impedit repudiandae commodi suscipit incidunt amet!
    </div>
  </section>

  <section class="py-20 dark:text-white">
    <div class="text-center space-y-5">
      <p class="lg:text-4xl text-2xl font-bold">How Simple works</p>

      <p class="text-xl">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        <br />
        dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
      </p>
    </div>
  </section>

  <section class="max-w-5xl mx-auto dark:text-white">
    <div class="grid grid-cols-12">
      <div class="col-span-6">
        <p class="font-bold lg:text-3xl text-xl mb-3">
          Powerful suite of tools
        </p>
        <p class="text-xl font-thin">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa.
        </p>
      </div>
      <div class="col-span-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
        culpa. Veritatis optio dolore qui rem, officia numquam tempora? Ut
        pariatur animi inventore. Excepturi aspernatur cupiditate esse maiores
        ullam exercitationem eius!
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const serviceCards = ref([
  {
    title: "title here",
    subtitle: "subtitle here",
  },
]);
</script>
