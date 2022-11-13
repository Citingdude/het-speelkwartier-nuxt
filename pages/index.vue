<template>
  <div id="p-home">
    <PagesHomeHero />
    <!-- <PagesHomePopularSection :featuredProducts="featuredProducts" /> -->
    <!-- <NewsletterSection /> -->
  </div>
</template>

<script setup lang="ts">
import { Base64 } from 'js-base64';
import type { Ref } from 'vue';

const username = 'ck_3aa0463ce2045297fd16429950da23d277376d51'
const password = 'cs_677b67c7bf26dc4c481e25c36b2bf60e640cb000'

const headers: HeadersInit | Ref<HeadersInit | undefined> | undefined = {
    Authorization: 'Basic ' + Base64.encode(username + ":" + password)
  }


const { data: featuredProducts } = await useFetch('products?featured=true', {
  baseURL: useBaseURL(),
  headers
})

console.log(featuredProducts)
</script>