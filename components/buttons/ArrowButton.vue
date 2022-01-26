<template>
  <NuxtLink class="flex items-center" :to="link">
    <p class="text-accent sm:text-lg font-bold">Shop</p>
    <IconsArrowIcon class="w-8 h-8" />
  </NuxtLink>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: "/"
        },
    },
};
</script>

<style>
</style>