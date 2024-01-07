<script setup lang=ts>
</script>

<template>
  <section id="home-hero" class="bg-light px-4 sm:px-8 lg:px-12 py-10 sm:py-20">
    <div class="container mx-auto grid lg:grid-cols-2 gap-12">
      <div>
        <h1 class="text-4xl sm:text-6xl font-extrabold mb-6">
          Printables voor peuters en kleuters
        </h1>

        <p class="text-xl mb-8">
          Spelenderwijs leren met de printables van het speelkwartier!
        </p>

        <div class="grid grid-cols-2 gap-6">
          <CategoryCard title="Printables" color="champagne" />
          <CategoryCard title="Gratis" color="goldenrod" />
          <CategoryCard title="Flashcards" color="goldenrod" />
          <CategoryCard title="Zoektochten" color="champagne" />
        </div>
      </div>

      <img
        class="justify-self-center"
        src="/images/home-hero.png" alt="Knutselende kinderen"
      >
    </div>
  </section>
</template>
