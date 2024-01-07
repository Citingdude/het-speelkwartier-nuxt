import type { UseFetchOptions } from 'nuxt/app'

type FetchUrl = string | Request | Ref<string | Request> | (() => string | Request)

export async function useApiFetch<T, dataT = T>(url: FetchUrl, options: UseFetchOptions<T, dataT> = {}) {
  return await useFetch(url, {
    baseURL: useBaseURL(),
    ...options,
  })
}
