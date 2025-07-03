<template>
  <div class="min-h-screen py-20 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-purple-500/3 rounded-full blur-3xl animate-spin-slow"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-12 fade-in">
        <!-- Enhanced Header -->
        <div class="text-center space-y-6">
          <div class="relative">
            <h1
              class="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x"
            >
              My Projects
            </h1>
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl rounded-lg -z-10"
            ></div>
          </div>
          <div class="relative group">
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 blur-2xl rounded-2xl transition-all duration-500 group-hover:blur-3xl"
            ></div>
            <p
              class="text-xl text-muted-foreground max-w-2xl mx-auto relative z-10 p-6 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105"
            >
              Explore my GitHub repositories and see what I've been building with modern
              technologies
            </p>
          </div>
        </div>

        <!-- Enhanced Filters and Search -->
        <Card class="p-8 card-enhanced backdrop-blur-md border border-white/10">
          <div class="flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div class="flex flex-col sm:flex-row gap-6 flex-1">
              <!-- Enhanced Search -->
              <div class="flex-1 min-w-0 relative">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg blur opacity-50"
                ></div>
                <Input
                  v-model="searchQuery"
                  placeholder="Search repositories..."
                  class="w-full relative z-10 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/40 transition-all duration-300"
                />
              </div>

              <!-- Enhanced Language Filter -->
              <div class="relative">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-lg blur opacity-50"
                ></div>
                <select
                  v-model="selectedLanguage"
                  class="px-4 py-3 border border-blue-200/30 bg-background/80 backdrop-blur-sm rounded-lg text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 transition-all duration-300 hover:border-blue-300/50 relative z-10"
                >
                  <option value="all">All Languages</option>
                  <option v-for="lang in availableLanguages" :key="lang" :value="lang">
                    {{ lang }}
                  </option>
                </select>
              </div>

              <!-- Enhanced Sort Options -->
              <div class="relative">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-600/5 rounded-lg blur opacity-50"
                ></div>
                <select
                  v-model="sortBy"
                  class="px-4 py-3 border border-purple-200/30 bg-background/80 backdrop-blur-sm rounded-lg text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 transition-all duration-300 hover:border-purple-300/50 relative z-10"
                >
                  <option value="updated">Recently Updated</option>
                  <option value="stars">Most Stars</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>

            <!-- Enhanced Results Count -->
            <div class="text-sm text-muted-foreground flex items-center gap-2">
              <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              {{ filteredRepos.length }}
              {{ filteredRepos.length === 1 ? 'repository' : 'repositories' }}
            </div>
          </div>
        </Card>

        <!-- Loading State -->
        <div v-if="loading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="i in 6" :key="i" class="p-6">
            <div class="space-y-4">
              <Skeleton class="h-48 w-full rounded-lg bg-muted" />
              <div class="space-y-2">
                <Skeleton class="h-6 w-3/4 bg-muted" />
                <Skeleton class="h-4 w-full bg-muted" />
                <Skeleton class="h-4 w-2/3 bg-muted" />
              </div>
              <div class="flex gap-2">
                <Skeleton class="h-8 w-20 bg-muted" />
                <Skeleton class="h-8 w-16 bg-muted" />
                <Skeleton class="h-8 w-24 bg-muted" />
              </div>
            </div>
          </Card>
        </div>

        <!-- Error State -->
        <Card v-else-if="error" class="p-8 text-center">
          <div class="space-y-4">
            <AlertCircle class="w-12 h-12 text-destructive mx-auto" />
            <div>
              <h3 class="text-lg font-semibold">Failed to load repositories</h3>
              <p class="text-muted-foreground">{{ error }}</p>
            </div>
            <Button @click="loadRepositories" variant="outline">
              <RefreshCw class="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </Card>

        <!-- Projects Grid -->
        <div v-else-if="filteredRepos.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(repo, index) in filteredRepos"
            :key="repo.id"
            class="scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <ProjectCard :repo="repo" />
          </div>
        </div>

        <!-- Empty State -->
        <Card v-else class="p-8 text-center">
          <div class="space-y-4">
            <Search class="w-12 h-12 text-muted-foreground mx-auto" />
            <div>
              <h3 class="text-lg font-semibold">No repositories found</h3>
              <p class="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
            <Button @click="clearFilters" variant="outline"> Clear Filters </Button>
          </div>
        </Card>

        <!-- Load More Button -->
        <div v-if="hasMore && !loading" class="text-center pt-8">
          <Card class="p-4 inline-block">
            <p class="text-sm text-muted-foreground">
              Showing {{ repos.length }} repositories. There might be more available.
            </p>
          </Card>
        </div>

        <!-- Stats -->
        <div v-if="repos.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card class="p-4 text-center">
            <div class="text-2xl font-bold text-primary">{{ repos.length }}</div>
            <div class="text-sm text-muted-foreground">Repositories</div>
          </Card>
          <Card class="p-4 text-center">
            <div class="text-2xl font-bold text-primary">{{ totalStars }}</div>
            <div class="text-sm text-muted-foreground">Stars</div>
          </Card>
          <Card class="p-4 text-center">
            <div class="text-2xl font-bold text-primary">{{ totalForks }}</div>
            <div class="text-sm text-muted-foreground">Forks</div>
          </Card>
          <Card class="p-4 text-center">
            <div class="text-2xl font-bold text-primary">{{ availableLanguages.length - 1 }}</div>
            <div class="text-sm text-muted-foreground">Languages</div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { AlertCircle, RefreshCw, Search } from 'lucide-vue-next'
import {
  fetchAllRepos,
  filterReposByLanguage,
  sortRepos,
  getUniqueLanguages,
  type GitHubRepo,
} from '@/lib/github'
import ProjectCard from '@/components/ProjectCard.vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Skeleton from '@/components/ui/Skeleton.vue'

// State
const repos = ref<GitHubRepo[]>([])
const loading = ref(true)
const error = ref<string | null>(null)
const hasMore = ref(false)

// Filters
const searchQuery = ref('')
const selectedLanguage = ref('all')
const sortBy = ref<'stars' | 'updated' | 'name'>('updated')

// Computed
const availableLanguages = computed(() => getUniqueLanguages(repos.value))

const filteredRepos = computed(() => {
  let filtered = repos.value

  // Filter by language
  if (selectedLanguage.value !== 'all') {
    filtered = filterReposByLanguage(filtered, selectedLanguage.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    filtered = filtered.filter(
      (repo) =>
        repo.name.toLowerCase().includes(query) ||
        repo.description?.toLowerCase().includes(query) ||
        repo.topics.some((topic) => topic.toLowerCase().includes(query))
    )
  }

  // Sort repositories
  return sortRepos(filtered, sortBy.value)
})

const totalStars = computed(() => repos.value.reduce((sum, repo) => sum + repo.stargazers_count, 0))

const totalForks = computed(() => repos.value.reduce((sum, repo) => sum + repo.forks_count, 0))

// Methods
const loadRepositories = async () => {
  loading.value = true
  error.value = null

  try {
    const result = await fetchAllRepos()

    if (result.error) {
      error.value = result.error
    } else {
      repos.value = result.repos
      hasMore.value = result.hasMore
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedLanguage.value = 'all'
  sortBy.value = 'updated'
}

// Load repositories on mount
onMounted(() => {
  loadRepositories()
})
</script>

<style scoped>
.fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.scale-in {
  animation: scale-in 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Enhanced gradient text animation */
@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 300% 300%;
  animation: gradientShift 4s ease infinite;
}

/* Card hover effects with enhanced shadows */
.card-enhanced {
  @apply transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm border-white/10;
}

.card-enhanced:hover {
  background: linear-gradient(
    135deg,
    rgba(var(--primary), 0.05) 0%,
    rgba(var(--accent), 0.05) 100%
  );
}

/* Slow spinning animation for background */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
