<template>
  <p :class="cn('text-sm text-muted-foreground', className)">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const { class: className } = defineProps<Props>()
</script>
