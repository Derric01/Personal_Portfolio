<template>
  <Card
    class="group hover-scale hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
  >
    <!-- Repository Image -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="repoImageUrl"
        :alt="`${repo.name} repository preview`"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        @error="onImageError"
      />
      <div class="absolute top-2 right-2 flex gap-2">
        <span
          v-if="repo.language"
          class="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full"
          :style="{ color: getLanguageColor(repo.language) }"
        >
          {{ repo.language }}
        </span>
        <span
          v-if="repo.archived"
          class="px-2 py-1 text-xs font-medium bg-yellow-500/80 text-yellow-900 backdrop-blur-sm rounded-full"
        >
          Archived
        </span>
      </div>
    </div>

    <CardHeader>
      <div class="flex items-start justify-between">
        <div class="flex-1 min-w-0">
          <CardTitle class="text-lg font-bold truncate group-hover:text-primary transition-colors">
            {{ repo.name }}
          </CardTitle>
          <CardDescription class="mt-1 line-clamp-2">
            {{ repo.description || 'No description available' }}
          </CardDescription>
        </div>
      </div>
    </CardHeader>

    <CardContent class="space-y-4">
      <!-- Repository Stats -->
      <div class="flex items-center gap-4 text-sm text-muted-foreground">
        <div class="flex items-center gap-1">
          <Star class="w-4 h-4" />
          <span>{{ repo.stargazers_count }}</span>
        </div>
        <div class="flex items-center gap-1">
          <GitFork class="w-4 h-4" />
          <span>{{ repo.forks_count }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Clock class="w-4 h-4" />
          <span>{{ formatDate(repo.pushed_at) }}</span>
        </div>
      </div>

      <!-- Topics -->
      <div v-if="repo.topics && repo.topics.length > 0" class="flex flex-wrap gap-1">
        <span
          v-for="topic in repo.topics.slice(0, 5)"
          :key="topic"
          class="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
        >
          {{ topic }}
        </span>
        <span v-if="repo.topics.length > 5" class="px-2 py-1 text-xs text-muted-foreground">
          +{{ repo.topics.length - 5 }} more
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-2 pt-2">
        <Button
          as="a"
          :href="repo.html_url"
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          size="sm"
          class="flex-1"
        >
          <Github class="w-4 h-4 mr-2" />
          View Code
        </Button>
        <Button
          v-if="repo.homepage"
          as="a"
          :href="repo.homepage"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="sm"
          class="flex-1"
        >
          <ExternalLink class="w-4 h-4 mr-2" />
          Live Demo
        </Button>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Star, GitFork, Clock, Github, ExternalLink } from 'lucide-vue-next'
import type { GitHubRepo } from '@/lib/github'
import { formatDate, getRepoImageUrl } from '@/lib/github'
import Card from './ui/Card.vue'
import CardHeader from './ui/CardHeader.vue'
import CardTitle from './ui/CardTitle.vue'
import CardDescription from './ui/CardDescription.vue'
import CardContent from './ui/CardContent.vue'
import Button from './ui/Button.vue'

interface Props {
  repo: GitHubRepo
}

const props = defineProps<Props>()

const imageError = ref(false)
const repoImageUrl = computed(() => {
  if (imageError.value) {
    // Fallback to a gradient background
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:oklch(0.3 0.2 240);stop-opacity:1" />
            <stop offset="100%" style="stop-color:oklch(0.6 0.15 180);stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#grad)" />
        <text x="200" y="100" font-family="Source Sans Pro, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white">
          ${props.repo.name}
        </text>
      </svg>
    `)}`
  }
  return getRepoImageUrl(props.repo)
})

const onImageError = () => {
  imageError.value = true
}

// Language colors (simplified set)
const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#1572B6',
  Vue: '#4FC08D',
  React: '#61DAFB',
  Node: '#68A063',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#ffac45',
  Kotlin: '#F18E33',
}

const getLanguageColor = (language: string): string => {
  return languageColors[language] || '#6b7280'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
