// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
    clientKey: '',
    secretKey: '',
    public: {
      apiBase: ''
    }
  },
  typescript: {
    shim: false,
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
})
