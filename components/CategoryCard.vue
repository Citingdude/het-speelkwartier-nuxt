<template>
  <div
    :class="{ 
        'bg-champagne': color === 'champagne',
        'bg-goldenrod': color === 'goldenrod',
    }"
    class="flex flex-col justify-center rounded-2xl p-6"
  >
    <p class="text-2xl sm:text-3xl mb-4">{{ title }}</p>

    <ButtonsArrowButton />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Category",
    },

    color: {
      type: String,
      default: "champagne",
    },
  },
};
</script>

<style>
</style>