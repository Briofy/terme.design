<template>
  <div>
    <form
      action="#"
      :id="drawerId"
      class="fixed top-0 left-0 z-40 w-full h-screen max-w-3xl p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
      tabindex="-1"
      :aria-labelledby="`${drawerId}-label`"
      aria-hidden="true">
      <label for="topbar-search" class="sr-only">Search</label>
      <div class="relative mt-1">
        <div
          class="flex absolute inset-y-0 left-0 rtl:right-2 items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400 rtl:rotate-90"
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
          class="bg-gray-50 border w-1/2 h-9 mb-10 border-gray-300 rtl:px-9 text-gray-900 sm:text-sm rounded outline-none focus:ring-primary-500 focus:border-primary-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search"
          ref="searchInput" />
      </div>
      <h5
        :id="drawerId"
        class="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
        Help Center - {{ items.text }}
      </h5>

      <button
        type="button"
        :data-drawer-dismiss="drawerId"
        :aria-controls="drawerId"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        delectus nam sunt labore, expedita rerum reiciendis voluptates illo et
        iure iusto ea tempora consequatur amet cupiditate molestias? Assumenda
        deserunt ipsa perferendis consectetur dolores quisquam, tempore, atque
        repudiandae ipsum a, explicabo odit. Corporis asperiores unde aliquam
        perferendis dignissimos iste ipsa! Tempore, excepturi enim placeat
        accusamus nisi porro optio nihil quibusdam velit consequatur corporis
        possimus maiores ducimus. Impedit asperiores fugit consequatur, omnis
        illo voluptas voluptatem voluptatibus! Veritatis, et nulla nesciunt
        tenetur blanditiis molestiae aut iusto nam excepturi quo dignissimos
        animi suscipit error distinctio quis magnam esse, provident sapiente ut
        libero! Ad, ab.
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  drawerId: string;
  items: any;
}>();
</script>
