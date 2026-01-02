<script setup>
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  text: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <button
    class="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-black/80 backdrop-blur rounded-xl px-4 py-3.5 hover:bg-black transition-colors border border-border active:bg-black/90"
    @click="emit('click')"
  >
    <span class="text-sm font-semibold text-text-primary">{{ text }}</span>
    <ChevronRight class="w-5 h-5 text-text-secondary" />
  </button>
</template>
