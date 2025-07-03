<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-md" @click="closeModal"></div>
    
    <!-- Modal Content -->
    <div class="relative bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
      <h2 class="text-2xl font-bold mb-4">Connect with Me</h2>
      
      <!-- Social Links -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <a 
          v-for="link in socialLinks" 
          :key="link.name"
          :href="link.url" 
          target="_blank"
          class="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <component :is="link.icon" class="w-5 h-5 mr-2" />
          {{ link.name }}
        </a>
      </div>
      
      <!-- Close Button -->
      <button 
        @click="closeModal"
        class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github, Linkedin, Instagram, MessageSquare as Discord, Mail } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false
  }
})

const emit = defineEmits(['close'])

// Debug
console.log('SocialLinksModal rendered with isOpen:', props.isOpen)

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Derric01',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/derric-samson-409a642b9',
    icon: Linkedin
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/derric_mars',
    icon: Instagram
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/1266316116016238707',
    icon: Discord
  }
]

const closeModal = () => {
  console.log('Closing modal')
  emit('close')
}
</script>
