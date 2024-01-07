<script setup lang="ts">
const { data: featuredProducts } = useFetch('/api/products')
</script>

<template>
  <div id="p-home">
    <PagesHomeHero />
    <PagesHomeFeatured :featured-products="featuredProducts" />
    <PagesHomeNewsletter />
  </div>
</template>
