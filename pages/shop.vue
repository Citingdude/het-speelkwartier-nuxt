<template>
  <div id="p-shop">
    <main class="bg-light px-4 sm:px-8 lg:px-12 py-10 sm:py-20">
      <ShopHeader class="mb-16" />

      <div class="grid grid-cols-4 gap-8 container mx-auto">
        <div class="col-span-1">
          <div class="flex flex-col">
            <h2 class="text-3xl font-medium mb-4">Categorieën</h2>

            <div class="flex flex-col">
              <NuxtLink
                class="text-accent hover:underline"
                to="#"
                v-for="category in productCategories"
                :key="category.id"
              >
                {{ category.name }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <ShopArchive class="col-span-3" :products="products" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://hetspeelkwartier.be/wp-json/wc/v3/products?per_page=20",
      {
        withCredentials: true,
        auth: {
          username: "ck_3aa0463ce2045297fd16429950da23d277376d51",
          password: "cs_677b67c7bf26dc4c481e25c36b2bf60e640cb000",
        },
      }
    );
    const productCategories = await $axios.$get(
      "https://hetspeelkwartier.be/wp-json/wc/v3/products/categories?hide_empty=true",
      {
        withCredentials: true,
        auth: {
          username: "ck_3aa0463ce2045297fd16429950da23d277376d51",
          password: "cs_677b67c7bf26dc4c481e25c36b2bf60e640cb000",
        },
      }
    );

    return { products, productCategories };
  },
};
</script>
