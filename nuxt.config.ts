export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@vueuse/nuxt"],
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
