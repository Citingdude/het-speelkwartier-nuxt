<template>
  <div>
    <img
      :src="image.src"
      alt=""
      class="mb-4 rounded-2xl"
    />

    <h3 class="text-2xl mb-4 font-semibold">{{ title }}</h3>

    <ButtonsArrowButton />
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Product title'
        },
        image: {
            type: Object,
            default: {}
        }
    },
};
</script>

<style>
</style>