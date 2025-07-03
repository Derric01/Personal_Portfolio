<template>
  <div v-show="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg max-w-sm mx-auto">
      <h2 class="text-xl font-bold mb-4">Simple Modal Test</h2>
      <p class="mb-4">This is a simple test modal to diagnose the issue.</p>
      <button 
        @click="$emit('close')" 
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Close Modal
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>
