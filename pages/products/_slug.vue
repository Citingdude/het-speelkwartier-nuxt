<template>
  <div class="container mx-auto">
    <p>Slug: {{ this.$route.params.slug }}</p>
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const product = await $axios.$get(
      `https://hetspeelkwartier.be/wp-json/wc/v3/products/${params.slug}`,
      {
        withCredentials: true,
        auth: {
          username: "ck_3aa0463ce2045297fd16429950da23d277376d51",
          password: "cs_677b67c7bf26dc4c481e25c36b2bf60e640cb000",
        },
      }
    );

    return { product };
  },
};
</script>

<style>
</style>