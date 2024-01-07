<script setup lang=ts>
type Color = 'champagne' | 'goldenrod'

defineProps<{
  title: string
  color: Color
}>()
</script>

<template>
  <NuxtLink
    to="/shop"
    :class="{
      'bg-champagne': color === 'champagne',
      'bg-goldenrod': color === 'goldenrod',
    }"
    class="flex flex-col justify-center rounded-2xl p-6"
  >
    <p class="text-2xl sm:text-3xl mb-4">
      {{ title }}
    </p>

    <AppButtonArrow is-button />
  </NuxtLink>
</template>

<style>
</style>
