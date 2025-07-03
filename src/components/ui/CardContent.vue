<template>
  <div :class="cn('p-6 pt-0', className)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const { class: className } = defineProps<Props>()
</script>
