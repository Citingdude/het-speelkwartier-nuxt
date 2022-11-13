<template>
  <div>
    <img
      :src="imageUrl"
      alt=""
      class="mb-4 rounded-2xl max-h-72 h-full w-full object-cover"
    />

    <p class="text-accent font-light mb-2">
      {{ category }}
    </p>

    <h3 class="text-2xl mb-4 font-semibold">{{ title }}</h3>

    <AppButtonArrow :to="`/products/${id}`" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  imageUrl: String,
  id: Number,
  category: String
})
</script>