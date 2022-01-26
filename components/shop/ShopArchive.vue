<template>
  <div class="container mx-auto">
    <div class="grid sm:grid-cols-2 gap-8">
      <ProductsProductCard
        v-for="product in products"
        :key="product.id"
        :title="product.name"
        :image="product.images[0]"
        :id="product.id"
        :category="product.categories[0].name"
      />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            default: []
        },
    },
};
</script>

<style>
</style>