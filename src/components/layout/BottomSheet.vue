<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const isVisible = ref(false)
const isAnimating = ref(false)

watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    isVisible.value = true
    setTimeout(() => {
      isAnimating.value = true
    }, 10)
  } else {
    isAnimating.value = false
    setTimeout(() => {
      isVisible.value = false
    }, 300)
  }
})

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    close()
  }
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && props.modelValue) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="isVisible"
      class="fixed inset-0 z-[100] flex items-end justify-center"
      @click="handleBackdropClick"
    >
      <div 
        class="absolute inset-0 bg-black/60 transition-opacity duration-300"
        :class="isAnimating ? 'opacity-100' : 'opacity-0'"
      />
      
      <div 
        class="relative w-full max-w-md lg:max-w-lg bg-bg-card rounded-t-3xl transition-transform duration-300 ease-out max-h-[85vh] flex flex-col"
        :class="isAnimating ? 'translate-y-0' : 'translate-y-full'"
      >
        <div class="flex justify-center pt-3 pb-2">
          <div class="w-10 h-1 bg-border rounded-full" />
        </div>
        
        <div v-if="title" class="flex items-center justify-between px-5 pb-4">
          <h2 class="text-lg font-semibold text-text-primary">{{ title }}</h2>
          <button 
            @click="close"
            class="w-8 h-8 flex items-center justify-center rounded-full bg-bg-surface hover:bg-border transition-colors"
          >
            <X class="w-5 h-5 text-text-secondary" />
          </button>
        </div>
        
        <div class="flex-1 overflow-y-auto px-5 pb-8">
          <slot />
        </div>
        
        <div class="px-5 pb-6">
          <button 
            @click="close"
            class="w-full py-4 bg-bg-surface hover:bg-border text-text-primary font-semibold rounded-2xl transition-colors"
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

