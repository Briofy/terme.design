<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="grid gap-16 lg:grid-cols-3">
                <div class="hidden lg:block">
                    <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Points of Contact</h3>
                    <h4 class="mb-1 font-medium text-gray-900 dark:text-white">U.S. Trader4</h4>
                    <address class="text-sm font-normal text-gray-500 non-italic">
                        One World Trade Center, 85th Floor
                        <br>New York, NY 10007
                    </address>
                    <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Information</h4>
                    <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a href="mailto:info@trader4.net">info@trader4.net</a></p>
                    <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Support</h4>
                    <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a href="mailto:support@trader4.net">support@trader4.net</a></p>
                    <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Sales</h4>
                    <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a href="mailto:sales@trader4.net">sales@trader4.net</a></p>
                    <h3 class="mt-5 mb-4 text-lg font-semibold text-gray-900 dark:text-white">Our offices around the world</h3>
                    <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">United Kingdom</h4>
                    <address class="text-sm font-normal text-gray-500 non-italic">
                        Level 18, 40 Bank Street
                        <br>Canary Wharf, London E14 5NR
                    </address>
                    <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Germany</h4>
                    <address class="text-sm font-normal text-gray-500 non-italic">
                        Level 8, Linkstraße 2,
                        <br>Potsdamer Platz, Berlin 10785
                    </address>
                </div>
                <div class="col-span-2">
                    <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-4xl dark:text-white">Contact</h2>
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email address <span class="text-xs text-gray-500">(So we can reply to you)</span></label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required>
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            <div class="flex mt-4">
                                <p class="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">By submitting this form, you confirm that you have read and agree to our <NuxtLink class="font-normal text-gray-900 underline hover:no-underline dark:text-white" to="/terms">Terms of Service</NuxtLink> and <NuxtLink class="font-normal text-gray-900 underline hover:no-underline dark:text-white" to="/privacy">Privacy Policy</NuxtLink>.</p>
                            </div>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { initFlowbite } from "flowbite";
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
