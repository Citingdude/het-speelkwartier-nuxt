import { Base64 } from 'js-base64'
import type Product from '~/types/product/product.type'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const baseURL = config.public.apiBase
  const username = config.WOOCOMMERCE_USERNAME
  const password = config.WOOCOMMERCE_PASSWORD

  const headers: HeadersInit | Ref<HeadersInit | undefined> | undefined = {
    Authorization: `Basic ${Base64.encode(`${username}:${password}`)}`,
  }
  const productID = getRouterParam(event, 'productId')
  const product = await $fetch<Product>(`/products/${productID}`, {
    baseURL,
    headers,
  })

  return product
})
