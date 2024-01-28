<script setup lang="ts">
import type Breadcrumb from '~/types/components/breadcrumb.type'

const productID = useRoute('products-productId').params.productId

const { data: product } = await useFetch(`/api/product/${productID}`)

const breadcrumbs = computed<Breadcrumb[]>(() => {
  if (!product.value)
    return []

  const breadcrumbs: Breadcrumb[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Winkel',
      href: '/shop',
    },
  ]

  if (product.value.categories && product.value.categories.length > 0) {
    breadcrumbs.push({
      name: product.value.categories[0].name,
      href: `/shop/categories/${product.value.categories[0].slug}`,
    })
  }

  breadcrumbs.push({
    name: product.value.name,
  })

  return breadcrumbs
})
</script>

<template>
  <main v-if="product">
    <AppSection>
      <div>
        <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>

      <div class="grid lg:grid-cols-2 gap-8 mt-4">
        <div>
          <img
            class="rounded-2xl aspect-[4/3] object-cover"
            :src="product.images[0].src"
            :alt="product.images[0].alt"
          >
        </div>

        <div>
          <h1 class="text-2xl">
            {{ product.name }}
          </h1>

          <div class="text-accent font-medium mt-2 text-lg" v-html="product.price_html" />

          <AppButton class="mt-8">
            Toevoegen aan winkelwagen
          </AppButton>
        </div>
      </div>
    </AppSection>
  </main>
</template>
