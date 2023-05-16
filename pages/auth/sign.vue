<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="grid items-center mx-auto lg:py-16 py-10 grid-cols-12">
        <!-- Login Form -->
        <div class="lg:col-span-6 col-span-full rounded order-2 lg:order-1">
          <div
            class="p-6 space-y-4 lg:space-y-6 bg-white mx-auto md:max-w-lg w-full dark:bg-transparent sm:p-8"
          >
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white"
            >
              Welcome Back
            </h1>
            <div
              class="items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex"
            >
              <a
                href="#"
                class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_13183_10121)">
                    <path
                      d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                      fill="#3F83F8"
                    />
                    <path
                      d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13183_10121">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Log in with Google
              </a>
              <a
                href="#"
                class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <Icon
                  name="mdi:apple"
                  class="w-5 h-5 mr-2 text-gray-900 dark:text-white"
                />

                Log in with Apple
              </a>
            </div>
            <div class="flex items-center">
              <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              <div class="px-5 text-center text-gray-500 dark:text-gray-400">
                or
              </div>
              <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>

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
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email Address</label
                >
                <VField
                  v-model="identifier"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="For Example, hi@trader4.net"
                  autofocus
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  @focus="responseMsg = ''"
                />
                <VErrorMessage class="text-red-700 text-sm" name="email" />
              </div>
              <button
                type="submit"
                :disabled="loadingDisabled"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
              >
                <Icon
                  v-if="loadingDisabled"
                  class="animate-spin"
                  size="1.5rem"
                  name="mdi:loading"
                />
                <span v-else>Get Verify Code</span>
              </button>
            </VForm>
          </div>
        </div>

        <!-- QR CODE -->
        <div
          class="lg:col-span-6 justify-self-center col-span-full order-1 lg:order-2"
        >
          <div v-if="isLoadingQR" role="status">
            <Icon
              class="animate-spin text-blue-600"
              size="7rem"
              name="mdi:loading"
            />
            <span class="sr-only">Loading...</span>
          </div>
          <div
            v-else
            class="w-fit relative dark:bg-slate-800 dark:border dark:border-slate-600 p-4 rounded"
          >
            <button
              v-if="refreshQr"
              class="rounded bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              @click="getQR"
            >
              <Icon name="mdi:refresh" size="3rem" class="text-blue-600" />
            </button>
            <img
              :class="refreshQr ? 'opacity-20' : ''"
              :src="qrSvgSRC"
              alt="QR"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Libs Import
import * as Yup from "yup";

// Variables
const identifier = ref("");
const responseMsg = ref("");
const responseHasError = ref(false);
const router = useRouter();
const loadingDisabled = ref(false);
const qrSvgSRC = ref("");
const refreshQr = ref(false);
const qrCodeExpire = ref("");
const isLoadingQR = ref(false);

// Login User and request OTP
const loginUser = async () => {
  loadingDisabled.value = true;
  // Request OTP WERIFY
  const { auth } = await useAuth();
  auth
    .requestOTP(identifier.value, "/v1/account/request-otp")
    .then((res) => {
      if (res.succeed) {
        responseMsg.value = "Please Verify Your Email";
        responseHasError.value = false;
        localStorage.setItem("OTPPayload", JSON.stringify(res.results));
        loadingDisabled.value = false;
        router.push("/auth/confirm");
      }
    })
    .catch(() => {
      responseMsg.value = "Something went wrong";
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

// Form Validation
const schema = Yup.object({
  email: Yup.string()
    .email(
      "Email address should look like hi@trader4.net, not sure?, Contact Us."
    )
    .required(
      "Seems you even not entered email address, not sure?, Contact Us."
    )
    .typeError(
      "Email address should look like hi@trader4.net, not sure?, Contact Us."
    ),
});

// Get QR Session
const getQR = async () => {
  isLoadingQR.value = true;
  refreshQr.value = false;
  const { auth } = await useAuth();
  auth
    .getQRSession("/v1/account/qr")
    .then((res) => {
      isLoadingQR.value = false;
      refreshQr.value = false;
      qrSvgSRC.value = res.results.url;
      qrCodeExpire.value = res.results.expired_at;
      checkTimer();
    })
    .catch(() => {
      isLoadingQR.value = false;
      refreshQr.value = true;
    });
};
getQR();

// Timer for refresh QR code
let interval = null as any;
const checkTimer = () => {
  const startTime = new Date().getTime();
  interval = setInterval(function () {
    if (
      new Date().getTime() - startTime > // current time - start time = elapsed time
      new Date(qrCodeExpire.value as string).getTime() - startTime // expired time - start time = remaining time
    ) {
      clearInterval(interval); //stop the interval
      refreshQr.value = true; //show refresh button
      return;
    }
  }, 1000);
};
</script>
