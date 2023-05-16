<template>
  <div class="px-4 lg:px-6">
    <!-- Headers -->
    <div
      id="table-header"
      class="hidden md:grid grid-cols-4 gap-x-16 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white sticky"
    >
      <div
        v-for="(headerItem, headerIndex) in headers"
        :key="`header-${headerIndex}`"
      >
        {{ headerItem.text }}
      </div>
    </div>
    <!-- Headers -->
    <div id="detailed-pricing" class="overflow-x-auto mt-8 w-full">
      <div class="overflow-hidden lg:min-w-fit min-w-max">
        <!-- Headers -->
        <div
          class="md:hidden grid grid-cols-4 gap-x-16 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          <div
            v-for="(headerItem, headerIndex) in headers"
            :key="`header-${headerIndex}`"
          >
            {{ headerItem.text }}
          </div>
        </div>
        <!-- Headers -->

        <!-- Items -->
        <div
          v-for="(tableItem, tableIndex) in items"
          :key="tableIndex"
          class="grid grid-cols-4 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-200 rounded dark:hover:bg-slate-700"
        >
          <div
            v-for="(item, idx) in Object.values(tableItem as object)"
            :key="idx"
          >
            <!-- if Has ICON -->
            <Icon
              v-if="item.icon"
              :name="item.icon"
              :class="`text-${item.color} text-2xl`"
            />
            <!-- if Has ICON -->

            <!-- if Has sub texts array like ["Ticket", "Email (24 Hours)"] -->
            <span
              v-else-if="Array.isArray(item)"
              class="text-gray-500 dark:text-gray-400"
            >
              <span
                v-for="(subItem, subIndex) in Object.values(item as object)"
                :key="`sub-${subIndex}`"
              >
                {{
                  subItem +
                  (subIndex === Object.values(item as object).length - 1
                    ? ""
                    : ", ")
                }}
              </span>
            </span>
            <!-- if Has sub texts array like ["Ticket", "Email (24 Hours)"] -->

            <!-- if has tooltips or Drawer -->
            <span v-else-if="item.tooltipText" class="dark:text-gray-400">
              <!-- Side Drawer Component -->
              <GlobalSideDrawer
                v-if="item.hasDrawer && item.hasDrawer === true"
                :drawer-id="`drawer-${item.text}`"
                :items="item"
              />
              <!-- Side Drawer Component -->

              <!-- Tooltip Icon and Text -->
              <div>
                <span
                  class="flex items-center cursor-pointer"
                  :data-drawer-target="
                    item.hasDrawer ? `drawer-${item.text}` : undefined
                  "
                  :data-drawer-show="
                    item.hasDrawer ? `drawer-${item.text}` : undefined
                  "
                  :aria-controls="
                    item.hasDrawer ? `drawer-${item.text}` : undefined
                  "
                >
                  {{ item.text }}
                  <Icon
                    :data-tooltip-target="`tooltip-${item.text}`"
                    type="button"
                    name="mdi:help-circle"
                    class="outline-none ml-1"
                  />
                </span>
              </div>

              <div
                :id="`tooltip-${item.text}`"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                {{ item.tooltipText }}
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <!-- Tooltip Icon and Text -->
            </span>
            <!-- if has tooltips -->

            <!-- Simple Text -->
            <span v-else class="dark:text-gray-400"> {{ item }} </span>
            <!-- Simple Text -->
          </div>
        </div>

        <!-- Buy Now Buttons -->
        <div
          v-if="hasButtons"
          class="grid grid-cols-4 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700"
        >
          <div class="text-gray-500 dark:text-gray-400"></div>
          <div>
            <a
              href="#"
              class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
              >Buy now</a
            >
          </div>
          <div>
            <a
              href="#"
              class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
              >Buy now</a
            >
          </div>
          <div>
            <a
              href="#"
              class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
              >Buy now</a
            >
          </div>
        </div>
        <!-- Buy Now Buttons -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  headers: ITableHeader[];
  items: any;
  hasButtons?: boolean;
}>();

onMounted(() => {
  // Main Header Component
  const mainHeaderHeight = document.getElementById("main-header")?.clientHeight;

  // All Table Headers Array
  const tableHeaders = document.querySelectorAll("#table-header");

  tableHeaders.forEach((header: any) => {
    // Style top of header Height
    header.style.top = `${mainHeaderHeight}px`;
  });
});
</script>
