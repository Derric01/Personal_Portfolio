<template>
  <div :class="cn('rounded-xl border bg-card text-card-foreground shadow', className)">
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
