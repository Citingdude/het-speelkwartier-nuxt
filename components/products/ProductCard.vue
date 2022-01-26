<template>
  <div>
    <img
      :src="image.src"
      alt=""
      class="mb-4 rounded-2xl max-h-72 h-full w-full object-cover"
    />

    <p class="text-accent font-light mb-2">
      {{ category }}
    </p>

    <h3 class="text-2xl mb-4 font-semibold">{{ title }}</h3>

    <ButtonsArrowButton :link="`/products/${id}`" />
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
        },
        id: {
            type: Number,
            default: ""
        },
        category: {
          type: String,
          default: ""
        }
    },
};
</script>

<style>
</style>