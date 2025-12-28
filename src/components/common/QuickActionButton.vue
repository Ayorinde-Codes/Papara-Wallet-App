<script setup>
import IconContainer from './IconContainer.vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  sublabel: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <button
    class="flex items-center gap-3 bg-bg-card border border-border rounded-2xl px-4 py-4 hover:bg-bg-surface transition-colors min-w-[160px] shrink-0"
    @click="emit('click')"
  >
    <IconContainer>
      <component :is="icon" class="w-5 h-5 text-black" />
    </IconContainer>
    <div class="flex flex-col items-start justify-center self-center">
      <span class="text-sm font-semibold text-text-primary leading-tight">{{ label }}</span>
      <span v-if="sublabel" class="text-xs text-text-secondary leading-tight mt-0.5">{{
        sublabel
      }}</span>
    </div>
  </button>
</template>
