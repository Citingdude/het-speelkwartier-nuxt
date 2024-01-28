<script setup lang="ts">
import type Breadcrumb from '~/types/components/breadcrumb.type'

const props = defineProps<{
  breadcrumbs: Breadcrumb[]
}>()
</script>

<template>
  <nav>
    <ol class="flex flex-wrap gap-2 text-sm">
      <li v-for="(breadcrumb, index) in props.breadcrumbs" :key="breadcrumb.name">
        <a v-if="breadcrumb.href" class="text-accent hover:underline" :href="breadcrumb.href">
          {{ breadcrumb.name }}
        </a>
        <span v-else>
          {{ breadcrumb.name }}
        </span>
        <span v-if="index !== props.breadcrumbs.length - 1" class="text-dark ml-2">/</span>
      </li>
    </ol>
  </nav>
</template>
