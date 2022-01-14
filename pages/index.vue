<template>
  <div id="p-home">
    <PagesHomeHeroSection />
    <PagesHomePopularSection :featuredProducts="featuredProducts" />
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
    const featuredProducts = await $axios.$get("https://hetspeelkwartier.be/wp-json/wc/v3/products?featured=true", {
        withCredentials: true,
        auth: {
            username: 'ck_3aa0463ce2045297fd16429950da23d277376d51',
            password: 'cs_677b67c7bf26dc4c481e25c36b2bf60e640cb000'
        }
    });

    return { featuredProducts };
  },
}
</script>
