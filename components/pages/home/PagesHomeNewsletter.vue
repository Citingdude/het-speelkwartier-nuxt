<script setup lang="ts">
const formData = {
  title: 'Test',
  status: 'publish',
  meta_box: {
    subscribe_email: '',
  },
}

async function sendForm() {
  await useFetch('https://hetspeelkwartier.be/wp-json/wp/v2/forms', {
    body: formData,
  })
}
</script>

<template>
  <section class="pb-20 relative bg-light">
    <div class="container mx-auto bg-goldenrod p-12 rounded-3xl">
      <h2 class="text-5xl font-bold mb-4">
        Schrijf je in voor onze nieuwsbrief
      </h2>

      <p class="text-lg mb-8">
        Blijf op de hoogte van de laatste nieuwtjes en gratis producten
      </p>

      <form class="max-w-lg relative z-10" method="post" @submit.prevent="sendForm()">
        <div class="flex flex-col mb-8">
          <label class="mb-2" for="email">E-mailadres</label>
          <input
            id="email"
            v-model="formData.meta_box.subscribe_email"
            class="
              py-2
              px-2
              rounded-lg
              outline-none
              border-2 border-white
              focus:border-accent
            "
            type="email"
            name="email"
          >
        </div>

        <button
          class="bg-accent text-light py-3 px-5 rounded-lg w-full"
          type="submit"
        >
          Inschrijven
        </button>
      </form>
    </div>

    <div>
      <IconsCircleTriangle class="absolute bottom-0 right-0" />
    </div>
  </section>
</template>
