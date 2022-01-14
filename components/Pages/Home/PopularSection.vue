<template>
  <section id="home-hero" class="bg-light px-4 sm:px-8 lg:px-12 pb-10 sm:pb-20">
    <div class="container mx-auto">
      <h2 class="text-3xl sm:text-5xl font-bold mb-8">Populaire printables</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductsProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :title="product.name"
          :image="product.images[0]"
          :id="product.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    featuredProducts: {
      type: Array,
      default: {},
    },
  },
};
</script>