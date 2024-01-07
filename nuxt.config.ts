// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    WOOCOMMERCE_USERNAME: '',
    WOOCOMMERCE_PASSWORD: '',
    public: {
      apiBase: '',
    },
  },
  typescript: {
    shim: false,
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  experimental: {
    typedPages: true,
  },
})
