// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  vite: {
    server: {
      watch: {
        ignored: ['**/node_modules_old/**', '**/.git/**']
      }
    }
  }
});