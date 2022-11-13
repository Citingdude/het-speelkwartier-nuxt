<script setup lang="ts">
const getThisYear = computed(() => {
  const date = new Date().getFullYear()
  return date
})
</script>

<template>
  <footer>
    <div class="px-12">
      <div class="container mx-auto flex justify-between pt-20 pb-10">
        <div
          class="
            flex flex-col
            md:flex-row
            space-y-16
            md:space-y-0 md:space-x-16
          "
        >
          <div>
            <h3 class="text-2xl mb-2 font-medium">
              Navigatie
            </h3>

            <div class="w-52 h-1 bg-champagne mb-4" />

            <div>
              <div class="flex flex-col space-y-2">
                <NuxtLink class="hover:text-accent" to="/">
                  Home
                </NuxtLink>
                <NuxtLink class="hover:text-accent" to="/">
                  Shop
                </NuxtLink>
                <NuxtLink class="hover:text-accent" to="/">
                  Werking
                </NuxtLink>
                <NuxtLink class="hover:text-accent" to="/">
                  Contact
                </NuxtLink>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl mb-2 font-medium">
              Klanten
            </h3>

            <div class="w-52 h-1 bg-champagne mb-4" />

            <div>
              <div class="flex flex-col space-y-2">
                <NuxtLink class="hover:text-accent" to="/">
                  Mijn account
                </NuxtLink>
                <NuxtLink class="hover:text-accent" to="/">
                  Werking
                </NuxtLink>
                <NuxtLink class="hover:text-accent" to="/">
                  Winkelmand
                </NuxtLink>
                <NuxtLink class="hover:text-accent" to="/">
                  Algemene voorwaarden
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img width="240" src="/images/logo.svg" alt="Logo">
        </div>
      </div>
    </div>

    <div class="bg-champagne px-12">
      <div class="container mx-auto py-4">
        <p>Copyright © 2021-{{ getThisYear }} hetspeelkwartier.be</p>
      </div>
    </div>
  </footer>
</template>

<style>
</style>
