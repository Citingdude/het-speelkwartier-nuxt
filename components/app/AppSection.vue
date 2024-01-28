<script setup lang="ts">
defineProps<{
  disablePadding?: boolean
}>()
</script>

<template>
  <section
    :class="{
      'py-10 lg:py-20': !disablePadding,
    }"
  >
    <div class="container">
      <slot />
    </div>
  </section>
</template>
