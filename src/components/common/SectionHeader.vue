<script setup>
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <button class="flex items-center justify-between w-full py-3 group" @click="emit('click')">
    <div class="flex items-center gap-2">
      <span class="text-sm font-medium text-text-secondary uppercase tracking-wide">{{
        title
      }}</span>
      <ChevronRight
        v-if="showArrow"
        class="w-4 h-4 text-text-secondary group-hover:translate-x-0.5 transition-transform"
      />
    </div>
    <span v-if="pagination" class="text-sm text-accent-orange font-medium">{{ pagination }}</span>
  </button>
</template>
