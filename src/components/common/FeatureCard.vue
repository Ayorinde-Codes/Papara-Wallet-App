<script setup>
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'bg-bg-surface'
  },
  icon: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  logos: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <div 
    class="relative rounded-3xl p-5 min-h-[220px] overflow-hidden"
    :class="bgColor"
  >
    <div class="relative z-10">
      <div v-if="logos.length" class="flex items-center gap-2 mb-4">
        <div 
          v-for="(logo, index) in logos" 
          :key="index"
          class="h-6 flex items-center"
        >
          <img v-if="logo.src" :src="logo.src" :alt="logo.alt" class="h-full object-contain" />
          <span v-else class="text-sm font-medium text-text-primary">{{ logo.text }}</span>
        </div>
      </div>

      <div v-if="icon" class="w-10 h-10 rounded-xl bg-bg-card/20 flex items-center justify-center mb-3 text-2xl">
        {{ icon }}
      </div>

      <h3 class="text-2xl font-bold text-text-primary leading-tight mb-1">{{ title }}</h3>
      
      <p v-if="subtitle" class="text-sm text-text-secondary mb-4">{{ subtitle }}</p>
    </div>

    <button 
      @click="emit('click')"
      class="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-bg-card rounded-xl px-4 py-3.5 hover:bg-bg-surface transition-colors border border-border"
    >
      <span class="text-sm font-semibold text-text-primary">{{ buttonText }}</span>
      <ChevronRight class="w-5 h-5 text-text-secondary" />
    </button>

    <div v-if="image" class="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 opacity-90">
      <img :src="image" alt="" class="w-full h-full object-contain" />
    </div>

    <slot name="decoration" />
  </div>
</template>
