// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    WOOCOMMERCE_CLIENT_KEY: '',
    WOOCOMMERCE_CLIENT_SECRET: '',
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
  routeRules: {
    '/': {
      swr: true,
    },
    '/**': {
      swr: true,
    },
  },
})
