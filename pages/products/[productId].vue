<script setup lang="ts">
const productID = useRoute('products-productId').params.productId

const { data: product } = await useFetch(`/api/product/${productID}`)
</script>

<template>
  <main v-if="product">
    <section>
      <div class="container">
        {{ product.name }}
      </div>
    </section>
  </main>
</template>
