<template>
  <div id="app" class="min-h-screen bg-background">
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="pt-16">
      <Transition name="page" mode="out-in">
        <RouterView />
      </Transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
