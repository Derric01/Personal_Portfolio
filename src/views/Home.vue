<template>
  <div class="min-h-screen relative overflow-hidden flex items-center justify-center">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10">
      <!-- Gradient Background - Enhanced with more vibrant colors -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background/30"
      ></div>

      <!-- Enhanced Floating Orbs with more vibrant colors and glow effects -->
      <div
        class="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-xl animate-float-slow"
      ></div>
      <div
        class="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/30 rounded-full blur-xl animate-float-medium"
      ></div>
      <div
        class="absolute top-1/2 left-3/4 w-20 h-20 bg-primary/40 rounded-full blur-xl animate-float-fast"
      ></div>
      <div
        class="absolute top-1/3 right-1/3 w-28 h-28 bg-purple-500/30 rounded-full blur-xl animate-float-medium"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/3 w-16 h-16 bg-green-500/30 rounded-full blur-xl animate-float-fast"
      ></div>
      
      <!-- New Animated Orbs -->
      <div
        class="absolute top-2/3 left-1/5 w-36 h-36 bg-pink-500/20 rounded-full blur-2xl animate-pulse-glow"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/5 w-40 h-40 bg-indigo-500/15 rounded-full blur-2xl animate-float-medium"
      ></div>
      <div
        class="absolute top-1/4 right-1/4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse-glow"
        style="animation-delay: 1s;"
      ></div>

      <!-- Enhanced Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <!-- Enhanced Particles with more variety and effects -->
      <div class="particles">
        <div class="particle" style="--delay: 0s; --duration: 8s; --x: 20%; --y: 80%"></div>
        <div class="particle" style="--delay: 2s; --duration: 10s; --x: 80%; --y: 20%"></div>
        <div class="particle" style="--delay: 4s; --duration: 6s; --x: 60%; --y: 90%"></div>
        <div class="particle" style="--delay: 1s; --duration: 9s; --x: 10%; --y: 40%"></div>
        <div class="particle" style="--delay: 3s; --duration: 7s; --x: 90%; --y: 70%"></div>
        <div
          class="particle particle-accent"
          style="--delay: 2.5s; --duration: 8.5s; --x: 30%; --y: 60%"
        ></div>
        <div
          class="particle particle-green"
          style="--delay: 1.5s; --duration: 7.5s; --x: 70%; --y: 30%"
        ></div>
        <div
          class="particle particle-purple"
          style="--delay: 3.5s; --duration: 9.5s; --x: 40%; --y: 50%"
        ></div>
        
        <!-- New Particle Types and Variations -->
        <div
          class="particle particle-gold"
          style="--delay: 0.5s; --duration: 9s; --x: 25%; --y: 65%"
        ></div>
        <div
          class="particle particle-teal"
          style="--delay: 3s; --duration: 8s; --x: 85%; --y: 25%"
        ></div>
        <div
          class="particle particle-pink large-particle"
          style="--delay: 2s; --duration: 12s; --x: 65%; --y: 15%"
        ></div>
        <div
          class="particle particle-indigo tiny-particle"
          style="--delay: 1s; --duration: 6s; --x: 15%; --y: 85%"
        ></div>
      </div>
      
      <!-- New Cosmic Elements -->
      <div class="cosmic-dots"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center space-y-8 fade-in">
        <!-- Hero Section -->
        <div class="space-y-6">
          <!-- Profile Image - Enhanced with more vibrant glow and tech icons -->
          <div class="flex justify-center">
            <div class="relative group">
              <!-- Rotating Orbit Ring -->
              <div class="absolute inset-0 rounded-full border-2 border-dashed border-accent/20 animate-rotate-slow"></div>
              
              <div
                class="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full blur opacity-30 group-hover:opacity-70 animate-pulse-glow transition duration-1000"
              ></div>
              <!-- Connect Button Indicator -->
              <div
                class="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow"
              >
                <ArrowUp class="w-5 h-5 text-accent animate-ping-slow" />
                <div
                  class="px-2 py-1 bg-accent/10 backdrop-blur-sm rounded-full text-xs text-accent"
                >
                  Click to Connect
                </div>
              </div>
              <button
                @click="toggleSocialModal"
                class="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-primary via-accent to-purple-500 p-1 shadow-2xl animate-float-gentle hover:scale-105 transition-transform duration-300 cursor-pointer"
                title="Connect with me"
              >
                <div
                  class="w-full h-full rounded-full bg-gradient-to-br from-background to-background/80 flex items-center justify-center backdrop-blur-sm"
                >
                  <span
                    class="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent animate-shimmer"
                    >DS</span
                  >
                </div>
              </button>
              <!-- Ping animation around the button to draw attention -->
              <div
                class="absolute -inset-2 rounded-full border-2 border-accent/30 animate-ping-slow"
              ></div>
              <div
                class="absolute -inset-4 rounded-full border border-accent/20 animate-ping-slower"
              ></div>
              <div
                class="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-background animate-pulse shadow-lg"
              ></div>

              <!-- Floating Tech Icons - Enhanced with more tech-related icons and animations -->
              <div
                class="absolute -top-8 -left-8 w-8 h-8 bg-blue-500/30 rounded-lg animate-float-slow opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-blue-400">⚡</div>
              </div>
              <div
                class="absolute -top-6 -right-10 w-6 h-6 bg-purple-500/30 rounded-lg animate-float-medium opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-purple-400">💎</div>
              </div>
              <div
                class="absolute -bottom-8 -left-6 w-7 h-7 bg-orange-500/30 rounded-lg animate-float-fast opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-orange-400">🚀</div>
              </div>
              <div
                class="absolute top-10 -left-12 w-7 h-7 bg-green-500/30 rounded-lg animate-float-medium opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-green-400">🌐</div>
              </div>
              <div
                class="absolute top-10 -right-12 w-7 h-7 bg-red-500/30 rounded-lg animate-float-fast opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-red-400">🔥</div>
              </div>
              <div
                class="absolute -bottom-10 right-6 w-6 h-6 bg-yellow-500/30 rounded-lg animate-float-slow opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-yellow-400">⭐</div>
              </div>
              
              <!-- New animated tech icons -->
              <div
                class="absolute top-4 -right-16 w-7 h-7 bg-teal-500/30 rounded-lg animate-float-horizontal opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-teal-400">📱</div>
              </div>
              <div
                class="absolute -bottom-6 -right-14 w-7 h-7 bg-pink-500/30 rounded-lg animate-float-medium opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-pink-400">🎨</div>
              </div>
              <div
                class="absolute -top-14 left-0 w-7 h-7 bg-indigo-500/30 rounded-lg animate-float-horizontal opacity-80 hover:scale-125 transition-transform"
              >
                <div class="w-full h-full flex items-center justify-center text-indigo-400">👨‍💻</div>
              </div>
            </div>
          </div>

          <!-- Name and Title - Enhanced with more vibrant gradients and animations -->
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight slide-up relative">
              <span
                class="bg-gradient-to-r from-primary via-purple-500 to-accent bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x"
              >
                Derric Samson
              </span>
              <!-- Animated Hand Wave -->
              <span class="inline-block animate-wave origin-bottom-right ml-2">👋</span>
            </h1>
            <div class="relative inline-block">
              <p
                class="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium typewriter"
              >
                Full-Stack Developer
              </p>
              <!-- Animated Underline Effect -->
              <div class="w-0 h-0.5 bg-gradient-to-r from-primary to-accent absolute bottom-0 left-0 typing-cursor"></div>
              <div
                class="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg blur-sm animate-pulse-glow"
              ></div>
            </div>
            
            <!-- New Animated Tech Stack Section -->
            <div class="mt-6 flex flex-wrap justify-center items-center gap-3 animate-fade-in-staggered">
              <div class="tech-badge">
                <span>Vue.js</span>
              </div>
              <div class="tech-badge">
                <span>TypeScript</span>
              </div>
              <div class="tech-badge">
                <span>Tailwind</span>
              </div>
              <div class="tech-badge">
                <span>Node.js</span>
              </div>
              <div class="tech-badge">
                <span>MongoDB</span>
              </div>
              <div class="tech-badge">
                <span>React</span>
              </div>
            </div>
            <p
              class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed fade-in-up opacity-80"
            >
              Building innovative web solutions with modern technologies and creative
              problem-solving
            </p>
          </div>

          <!-- Enhanced Quick Stats -->
          <div class="flex justify-center gap-8 sm:gap-12 text-center fade-in-up">
            <div class="relative group">
              <div
                class="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"
              ></div>
              <div
                class="relative space-y-2 p-4 rounded-xl hover:bg-accent/5 transition-all duration-300 transform hover:scale-105"
              >
                <div class="text-2xl sm:text-3xl font-bold text-primary counter-animation">
                  {{ repoCount }}+
                </div>
                <div class="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
            <div class="relative group">
              <div
                class="absolute -inset-2 bg-gradient-to-r from-accent/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"
              ></div>
              <div
                class="relative space-y-2 p-4 rounded-xl hover:bg-accent/5 transition-all duration-300 transform hover:scale-105"
              >
                <div class="text-2xl sm:text-3xl font-bold text-primary counter-animation">
                  {{ totalStars }}+
                </div>
                <div class="text-sm text-muted-foreground">GitHub Stars</div>
              </div>
            </div>
            <div class="relative group">
              <div
                class="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"
              ></div>
              <div
                class="relative space-y-2 p-4 rounded-xl hover:bg-accent/5 transition-all duration-300 transform hover:scale-105"
              >
                <div class="text-2xl sm:text-3xl font-bold text-primary counter-animation">3+</div>
                <div class="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Call to Action -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 fade-in-up">
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"
            ></div>
            <Button
              as="router-link"
              to="/projects"
              size="lg"
              class="relative w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FolderOpen class="w-5 h-5 mr-2" />
              View My Projects
            </Button>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-accent/50 to-primary/50 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-1000"
            ></div>
            <Button
              as="router-link"
              to="/contact"
              variant="outline"
              size="lg"
              class="relative w-full sm:w-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <Mail class="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>

        <!-- Enhanced Social Links -->
        <div class="flex justify-center gap-6 pt-8 fade-in-up">
          <div class="relative group">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>
            <Button
              as="a"
              href="https://github.com/Derric01"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              class="relative hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            >
              <Github class="w-6 h-6" />
            </Button>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>
            <Button
              as="a"
              href="https://www.linkedin.com/in/derric-samson-409a642b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              class="relative hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-700"
            >
              <Linkedin class="w-6 h-6" />
            </Button>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-emerald-800/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>
            <Button
              as="a"
              href="mailto:derricsamson17@gmail.com"
              variant="ghost"
              size="icon"
              class="relative hover:scale-110 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 border border-transparent hover:border-green-200 dark:hover:border-green-700"
            >
              <Mail class="w-6 h-6" />
            </Button>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-800/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>
            <Button
              as="a"
              href="https://instagram.com/derric_mars"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              class="relative hover:scale-110 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 border border-transparent hover:border-purple-200 dark:hover:border-purple-700"
            >
              <Camera class="w-6 h-6" />
            </Button>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-800/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>
            <Button
              as="a"
              href="https://discord.com/users/1266316116016238707"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              class="relative hover:scale-110 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-700"
            >
              <MessageCircle class="w-6 h-6" />
            </Button>
          </div>
        </div>

        <!-- Enhanced Scroll Indicator -->
        <div class="pt-16 fade-in-up">
          <div class="relative inline-block">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full blur animate-pulse"
            ></div>
            <Button
              as="router-link"
              to="/about"
              variant="ghost"
              size="icon"
              class="relative opacity-50 hover:opacity-100 transition-all duration-500 animate-bounce hover:scale-110"
            >
              <ChevronDown class="w-6 h-6" />
            </Button>
          </div>
          <p class="text-xs text-muted-foreground mt-2 opacity-50">Explore More</p>
        </div>
      </div>
    </div>

    <!-- Social Links Modal -->
    <SocialLinksModal :is-open="showSocialModal" @close="showSocialModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  MessageCircle,
  Camera,
  ArrowUp,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import SocialLinksModal from '@/components/SocialLinksModal.vue'
import { fetchAllRepos, getLanguageColor } from '@/lib/github'

// State variables
const showSocialModal = ref(false)

function toggleSocialModal() {
  showSocialModal.value = !showSocialModal.value
}

const repoCount = ref(15)
const totalStars = ref(45)
const featuredProjects = ref([
  {
    name: 'Portfolio Website',
    description:
      'Professional portfolio website built with Vue 3, Tailwind CSS, and shadcn/vue components',
    language: 'Vue',
    langColor: '#41B883',
    stars: 12,
  },
  {
    name: 'E-Commerce Dashboard',
    description:
      'Admin dashboard for e-commerce with analytics, inventory management and order processing',
    language: 'TypeScript',
    langColor: '#3178C6',
    stars: 8,
  },
  {
    name: 'AI Chat Application',
    description:
      'Real-time chat application with AI-powered responses and natural language processing',
    language: 'JavaScript',
    langColor: '#F7DF1E',
    stars: 15,
  },
])

// Fetch GitHub data on mount
onMounted(async () => {
  try {
    const result = await fetchAllRepos()
    if (result.repos.length > 0) {
      repoCount.value = result.repos.length
      totalStars.value = result.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)

      // Update featured projects if available
      const sorted = [...result.repos]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 3)
      if (sorted.length > 0) {
        featuredProjects.value = sorted.map((repo) => ({
          name: repo.name,
          description: repo.description || 'A fantastic project by Derric Samson',
          language: repo.language || 'JavaScript',
          langColor: getLanguageColor(repo.language || 'JavaScript'),
          stars: repo.stargazers_count,
        }))
      }
    }
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
  }
})
</script>

<style scoped>
/* Background Grid Pattern */
.bg-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0);
  background-size: 20px 20px;
}

/* Particle System */
.particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  opacity: 0;
  animation: particle var(--duration) infinite var(--delay);
  left: var(--x);
  top: var(--y);
}

@keyframes particle {
  0%,
  100% {
    opacity: 0;
    transform: translateY(0px) scale(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-100px) scale(1);
  }
}

/* Floating Animations */
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg) scale(1.05);
  }
  66% {
    transform: translateY(10px) rotate(240deg) scale(0.95);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-15px) rotate(180deg) scale(1.1);
  }
}

@keyframes float-fast {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-10px) rotate(90deg) scale(1.05);
  }
  50% {
    transform: translateY(5px) rotate(180deg) scale(0.95);
  }
  75% {
    transform: translateY(-5px) rotate(270deg) scale(1.05);
  }
}

@keyframes float-gentle {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}
.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}
.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}
.animate-float-gentle {
  animation: float-gentle 3s ease-in-out infinite;
}

/* Gradient Text Animation */
@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes text-shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}
.animate-text-shimmer {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
  background-size: 200% 100%;
  animation: text-shimmer 2s linear infinite;
}

/* Enhanced Entry Animations */
.fade-in {
  animation: fade-in-up 1s ease-out forwards;
}

.fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.slide-up {
  animation: slide-up 1s ease-out forwards;
}

.scale-in {
  animation: scale-in 0.5s ease-out forwards;
}

.typewriter {
  animation:
    typewriter 2s steps(20) 1s forwards,
    blink 1s infinite 3s;
  border-right: 2px solid;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.counter-animation {
  animation: counter-up 2s ease-out forwards;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes typewriter {
  to {
    width: 100%;
  }
}

@keyframes blink {
  0%,
  50% {
    border-color: transparent;
  }
  51%,
  100% {
    border-color: currentColor;
  }
}

@keyframes counter-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered Animation Delays */
.fade-in-up:nth-child(1) {
  animation-delay: 0.1s;
}
.fade-in-up:nth-child(2) {
  animation-delay: 0.2s;
}
.fade-in-up:nth-child(3) {
  animation-delay: 0.3s;
}
.fade-in-up:nth-child(4) {
  animation-delay: 0.4s;
}
.fade-in-up:nth-child(5) {
  animation-delay: 0.5s;
}

/* Enhanced Hover Effects */
.group:hover .group-hover\:opacity-100 {
  transition: opacity 0.3s ease-in-out;
}

.group:hover .group-hover\:duration-200 {
  transition-duration: 0.2s;
}

/* Ping animations for the connect button */
@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  70% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

@keyframes ping-slower {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  80% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-ping-slower {
  animation: ping-slower 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-bounce-slow {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Dark mode enhancements */
@media (prefers-color-scheme: dark) {
  .bg-grid-pattern {
    background-image: radial-gradient(
      circle at 1px 1px,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 0
    );
  }

  .particle {
    background: linear-gradient(45deg, #60a5fa, #a78bfa);
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .typewriter {
    animation:
      typewriter 1.5s steps(15) 0.5s forwards,
      blink 1s infinite 2s;
  }
}

/* New particle types */
.particle-accent {
  background: linear-gradient(45deg, #36d1dc, #5b86e5);
}

.particle-green {
  background: linear-gradient(45deg, #00b09b, #96c93d);
}

.particle-purple {
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
}

/* New particle styles */
.particle-gold {
  background: linear-gradient(45deg, #f7971e, #ffd200);
}

.particle-teal {
  background: linear-gradient(45deg, #11998e, #38ef7d);
}

.particle-pink {
  background: linear-gradient(45deg, #ec008c, #fc6767);
}

.particle-indigo {
  background: linear-gradient(45deg, #4776E6, #8E54E9);
}

.large-particle {
  width: 8px;
  height: 8px;
}

.tiny-particle {
  width: 3px;
  height: 3px;
}

/* Tech badges animation */
.tech-badge {
  padding: 0.35rem 0.8rem;
  border-radius: 9999px;
  background-color: rgba(var(--accent-rgb), 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  animation: badge-pulse 3s infinite;
  animation-delay: calc(var(--index, 0) * 0.1s);
  transform: translateY(20px);
  opacity: 0;
}

.tech-badge:hover {
  background-color: rgba(var(--accent-rgb), 0.2);
  transform: translateY(-2px);
}

.tech-badge:nth-child(1) { --index: 1; animation-delay: 0.1s; }
.tech-badge:nth-child(2) { --index: 2; animation-delay: 0.2s; }
.tech-badge:nth-child(3) { --index: 3; animation-delay: 0.3s; }
.tech-badge:nth-child(4) { --index: 4; animation-delay: 0.4s; }
.tech-badge:nth-child(5) { --index: 5; animation-delay: 0.5s; }
.tech-badge:nth-child(6) { --index: 6; animation-delay: 0.6s; }

@keyframes badge-pulse {
  0% { transform: translateY(20px); opacity: 0; }
  20% { transform: translateY(0); opacity: 1; }
  90% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
}

/* Typing cursor animation */
.typing-cursor {
  animation: typing-width 2.5s steps(30, end) forwards 0.5s, blink 1s infinite 3s;
}

@keyframes typing-width {
  from { width: 0; }
  to { width: 100%; }
}

/* Cosmic dots background */
.cosmic-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0);
  background-size: 50px 50px;
  animation: cosmic-rotate 120s linear infinite;
}

@keyframes cosmic-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Text shimmer animation */
.animate-shimmer {
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
