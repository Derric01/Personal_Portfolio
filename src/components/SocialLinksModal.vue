<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-md" @click="closeModal"></div>
    <div class="relative bg-background/90 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
      <button 
        @click="closeModal"
        class="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-red-500/20 hover:text-red-500 flex items-center justify-center transition-all duration-300"
      >
        <X class="h-4 w-4" />
      </button>
      
      <div class="text-center mb-8">
        <div class="w-20 h-20 bg-gradient-to-br from-primary via-accent to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span class="text-2xl font-bold text-white">DS</span>
        </div>
        <h2 class="text-2xl font-bold mb-2">Connect with Me</h2>
        <p class="text-muted-foreground">Follow me on social media and let's connect!</p>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300"
        >
          <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="link.iconBg">
            <component :is="link.icon" class="h-4 w-4 text-white" />
          </div>
          <span class="font-medium text-sm">{{ link.name }}</span>
        </a>
      </div>
      
      <div class="mt-8 pt-6 border-t border-white/10">
        <div class="flex flex-col items-center justify-center space-y-4 text-sm">
          <div class="flex items-center space-x-2 text-muted-foreground">
            <Mail class="h-4 w-4" />
            <span>derricsamson17@gmail.com</span>
          </div>
          
          <a 
            href="mailto:derricsamson17@gmail.com"
            class="flex items-center justify-center gap-2 w-full max-w-xs bg-primary text-white rounded-lg py-2 px-4"
          >
            <Mail class="h-4 w-4" />
            <span class="text-sm font-medium">Send Email</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Github, Linkedin, Instagram, MessageSquare as Discord, Mail, X } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false
  }
})

const emit = defineEmits(['close'])

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Derric01',
    icon: Github,
    iconBg: 'bg-gray-700'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/derric-samson-409a642b9',
    icon: Linkedin,
    iconBg: 'bg-blue-600'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/derric_mars',
    icon: Instagram,
    iconBg: 'bg-pink-600'
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/1266316116016238707',
    icon: Discord,
    iconBg: 'bg-indigo-600'
  }
]

const closeModal = () => {
  emit('close')
}
</script>
