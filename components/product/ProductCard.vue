<script setup lang="ts">
const props = defineProps<{
  title: string
  imageUrl: string
  id: number
  category?: string
}>()
</script>

<template>
  <NuxtLink
    class="hover:-translate-y-2 transition"
    :to="`/products/${props.id}`"
  >
    <img
      :src="props.imageUrl"
      alt=""
      class="mb-4 rounded-2xl max-h-72 h-full w-full object-cover"
    >

    <p v-if="props.category" class="text-accent font-light mb-2">
      {{ props.category }}
    </p>

    <h3 class="text-2xl mb-4 font-semibold">
      {{ props.title }}
    </h3>

    <AppButtonArrow is-button />
  </NuxtLink>
</template>
