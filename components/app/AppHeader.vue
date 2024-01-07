<script setup lang="ts">
const mobileMenu = ref(false)
</script>

<template>
  <header class="py-4 px-12 bg-white">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <img
          width="126"
          src="/images/logo.svg"
          alt="Logo Het Speelkwartier"
        >
      </NuxtLink>

      <nav class="hidden md:flex space-x-12 text-dark text-lg font-medium">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink to="/shop">
          Shop
        </NuxtLink>
        <NuxtLink to="/">
          Werking
        </NuxtLink>
        <NuxtLink to="/">
          Contact
        </NuxtLink>
      </nav>

      <div class="hidden md:flex space-x-8">
        <button>
          <IconsSearch class="w-6 h-6" />
        </button>

        <button>
          <IconsAccount class="w-6 h-6" />
        </button>

        <button>
          <IconsCart class="w-6 h-6" />
        </button>
      </div>

      <button class="flex md:hidden relative z-10" @click="mobileMenu = !mobileMenu">
        <IconsHamburger class="w-6 h-6" />
      </button>

      <nav v-show="mobileMenu" class="absolute w-10/12 h-full bg-gray-100 left-0 top-0 flex flex-col">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink to="/shop">
          Shop
        </NuxtLink>
        <NuxtLink to="/">
          Werking
        </NuxtLink>
        <NuxtLink to="/">
          Contact
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
