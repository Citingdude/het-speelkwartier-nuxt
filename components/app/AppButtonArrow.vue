<template>
  <NuxtLink class="flex items-center" :to="props.to">
    <p class="text-accent sm:text-lg font-bold">Shop</p>
    <IconsArrow class="w-8 h-8" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  to: String
})
</script>

<style>
</style>