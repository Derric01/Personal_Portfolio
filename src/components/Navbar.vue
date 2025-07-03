<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <div class="flex items-center space-x-2">
            <button
              @click="showSocialModal = true"
              class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors group"
              title="Connect with me"
            >
              <span
                class="text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform"
                >DS</span
              >
            </button>
            <RouterLink
              to="/"
              class="font-bold text-lg hidden sm:block hover:text-primary transition-colors"
            >
              Derric Samson
            </RouterLink>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <RouterLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              class="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-primary bg-primary/10"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Dark Mode Toggle & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <Button variant="ghost" size="icon" @click="toggleDarkMode" class="w-9 h-9">
            <Sun v-if="isDark" class="h-4 w-4" />
            <Moon v-else class="h-4 w-4" />
          </Button>

          <!-- Mobile menu button -->
          <Button
            variant="ghost"
            size="icon"
            class="md:hidden w-9 h-9"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Menu class="h-4 w-4" />
          </Button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="mobile-menu">
        <div v-if="isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <RouterLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              class="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              active-class="text-primary bg-primary/10"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Social Links Modal -->
    <SocialLinksModal :is-open="showSocialModal" @close="showSocialModal = false" />
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Sun, Moon, Menu } from 'lucide-vue-next'
import Button from './ui/Button.vue'
import SocialLinksModal from './SocialLinksModal.vue'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const isDark = ref(false)
const isMenuOpen = ref(false)
const showSocialModal = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Check for saved theme or default to light mode
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
