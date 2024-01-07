<script setup lang="ts">
const props = defineProps<{
  to?: string
  isButton?: boolean
}>()

const component = computed(() => {
  if (props.isButton)
    return 'button'
  else
    return resolveComponent('NuxtLink')
})
</script>

<template>
  <component :is="component" class="flex items-center" :to="props.to">
    <p class="text-accent sm:text-lg font-bold">
      Shop
    </p>
    <IconsArrow class="w-8 h-8" />
  </component>
</template>

<style>
</style>
