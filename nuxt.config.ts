// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: "VForm",
          Field: "VField",
          FieldArray: "VFieldArray",
          ErrorMessage: "VErrorMessage",
        },
      },
    ],
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  extends: [
    // "github:traderfour/base-trader4-layers", // Extend from a git repository
    "base-layers", // Extend from a local directory
  ],
  routeRules: {
    // Render these routes with SPA
    "/my/**": { ssr: false },
  },
});
