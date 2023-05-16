<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="grid py-10 mx-auto lg:py-16 grid-cols-12 items-center">
        <div
          class="lg:col-span-6 col-span-full md:max-w-lg w-full mx-auto rounded"
        >
          <div
            class="p-6 space-y-4 bg-white dark:bg-transparent lg:space-y-6 sm:p-8"
          >
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white"
            >
              Confirm Code
            </h1>
            <VForm
              class="space-y-4 lg:space-y-6"
              @submit="loginUser"
              :validation-schema="schema"
            >
              <p v-if="responseMsg" :class="responseStatus">
                {{ responseMsg }}
              </p>
              <div>
                <label
                  for="code"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Confirm Code</label
                >
                <VField
                  v-model="code"
                  type="number"
                  name="code"
                  id="code"
                  placeholder="For Example, 413850"
                  autofocus
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <VErrorMessage class="text-red-700 text-sm" name="code" />
              </div>
              <button
                :disabled="loadingDisabled"
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
              >
                <Icon
                  v-if="loadingDisabled"
                  class="animate-spin"
                  size="1.5rem"
                  name="mdi:loading"
                />
                <span v-else>Sign in</span>
              </button>
            </VForm>
          </div>
        </div>
        <div class="lg:col-span-6 lg:flex hidden justify-center">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt="illustration"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Imports
import { IVerifyOTPPayload } from "@werify/id-ts/dist/modules/public/verifyOTP/interfaces/IVerifyOTP";
import * as Yup from "yup";
import { saveToken } from "~/composables/JwtService";

// Variables
const responseMsg = ref("");
const responseHasError = ref(false);
const code = ref("");
const loadingDisabled = ref(false);

// Login User
const loginUser = async () => {
  loadingDisabled.value = true;

  // Otp payload
  let OTPPayload = JSON.parse(
    localStorage.getItem("OTPPayload") as string
  ) as IVerifyOTPPayload;
  OTPPayload.otp = code.value;

  // Verify OTP WERIFY
  const { auth } = await useAuth();
  auth
    .verifyOTP(OTPPayload, "/v1/account/verify-otp")
    .then((res) => {
      if (res.succeed) {
        localStorage.removeItem("OTPPayload");
        // localStorage.setItem(
        //   "token",
        //   `${res.results.token_type} ${res.results.access_token}`
        // );
        // saveToken(JSON.stringify(res.results));
        useCookie("user", { secure: true }).value = JSON.stringify(res.results);
        location.replace("/");
      }
    })
    .catch(() => {
      responseMsg.value =
        "Something went wrong Please Check your code & try again";
      responseHasError.value = true;
      loadingDisabled.value = false;
    });
};

// Error and success message Class
const responseStatus = computed(() => {
  return `text-${responseHasError.value ? "red" : "green"}-600 dark:text-${
    responseHasError.value ? "red" : "green"
  }-400`;
});

const schema = Yup.object({
  code: Yup.number()
    .required("Seems you even not entered verify code, not sure?, Contact Us.")
    .typeError("Confirm code should look like 413850, not sure?, Contact Us."),
});
</script>
