<template>
  <h3 :class="cn('font-semibold leading-none tracking-tight', className)">
    <slot />
  </h3>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const { class: className } = defineProps<Props>()
</script>
