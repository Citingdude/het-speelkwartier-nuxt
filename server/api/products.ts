import { Base64 } from 'js-base64'

export default defineEventHandler(async (_event) => {
  const config = useRuntimeConfig()

  const username = config.WOOCOMMERCE_CLIENT_KEY
  const password = config.WOOCOMMERCE_CLIENT_SECRET

  const headers: HeadersInit | Ref<HeadersInit | undefined> | undefined = {
    Authorization: `Basic ${Base64.encode(`${username}:${password}`)}`,
  }

  return await $fetch('products?featured=true', {
    baseURL: config.public.apiBase,
    headers,
  })
})
