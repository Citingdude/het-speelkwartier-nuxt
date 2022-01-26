<template>
  <header class="py-4 px-12 bg-white">
    <div class="container mx-auto flex items-center justify-between">
      <div>
        <img
          width="126"
          src="~/assets/images/logo.svg"
          alt="Logo Het Speelkwartier"
        />
      </div>

      <nav class="hidden md:flex space-x-12 text-dark text-lg font-medium">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/shop">Shop</NuxtLink>
        <NuxtLink to="/">Werking</NuxtLink>
        <NuxtLink to="/">Contact</NuxtLink>
      </nav>

      <div class="hidden md:flex space-x-8">
        <button>
          <IconsSearchIcon class="w-6 h-6" />
        </button>

        <button>
          <IconsAccountIcon class="w-6 h-6" />
        </button>

        <button>
          <IconsCartIcon class="w-6 h-6" />
        </button>
      </div>

      <button @click="mobileMenu = !mobileMenu" class="flex md:hidden relative z-10">
        <IconsHamburgerIcon class="w-6 h-6" />
      </button>

      <nav v-show="mobileMenu" class="absolute w-10/12 h-full bg-gray-100 left-0 top-0 flex flex-col">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/shop">Shop</NuxtLink>
        <NuxtLink to="/">Werking</NuxtLink>
        <NuxtLink to="/">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
    }
  },
};
</script>

<style>
</style>