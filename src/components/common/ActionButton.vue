<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'outlined', 'ghost'].includes(v)
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <button 
    @click="emit('click')"
    class="flex items-center gap-3 py-4 px-4 rounded-2xl transition-all w-full"
    :class="{
      'bg-bg-surface hover:bg-border': variant === 'default',
      'border border-border hover:bg-bg-surface': variant === 'outlined',
      'hover:bg-bg-surface': variant === 'ghost'
    }"
  >
    <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-bg-card border border-border">
      <component :is="icon" class="w-5 h-5 text-text-primary" />
    </div>
    <span class="text-base font-medium text-text-primary">{{ label }}</span>
  </button>
</template>

