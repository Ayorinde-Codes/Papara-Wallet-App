<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },
  bgColor: {
    type: String,
    default: 'white'
  },
  borderColor: {
    type: String,
    default: 'border'
  }
})

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16'
}

const bgColorClasses = {
  white: 'bg-white',
  orange: 'bg-orange-500'
}

const borderColorClasses = {
  border: 'border-border',
  orange: 'border-orange-500'
}

const bgClass = computed(() => bgColorClasses[props.bgColor] || `bg-${props.bgColor}`)
const borderClass = computed(() => borderColorClasses[props.borderColor] || `border-${props.borderColor}`)
</script>

<template>
  <div 
    :class="[
      sizeClasses[size],
      'flex items-center justify-center rounded-xl border',
      borderClass,
      bgClass
    ]"
  >
    <slot />
  </div>
</template>

