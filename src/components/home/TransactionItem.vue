<script setup>
import { computed } from 'vue'

const props = defineProps({
  logo: {
    type: String,
    default: '',
  },
  logoComponent: {
    type: Object,
    default: null,
  },
  logoColor: {
    type: String,
    default: 'bg-bg-surface',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'FAST Para Transferi',
  },
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    default: 'credit',
    validator: value => ['credit', 'debit'].includes(value),
  },
})

const emit = defineEmits(['click'])

const isCredit = computed(() => props.transactionType === 'credit')
</script>

<template>
  <button
    class="w-full flex items-center gap-3 py-3 hover:bg-bg-surface/50 rounded-xl transition-colors px-2 -mx-2"
    @click="emit('click')"
  >
    <div
      class="w-12 h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
      :class="props.logoColor"
    >
      <component
        :is="props.logoComponent"
        v-if="props.logoComponent"
        class="w-full h-full text-white"
      />
      <img v-else-if="props.logo" :src="props.logo" alt="" class="w-full h-full object-cover" />
      <span v-else class="text-lg font-bold text-text-primary">{{ props.name.charAt(0) }}</span>
    </div>

    <div class="flex-1 min-w-0 text-left">
      <h4 class="text-sm font-semibold text-text-primary truncate">{{ props.name }}</h4>
      <p class="text-xs text-text-secondary">{{ props.type }}</p>
    </div>

    <div class="text-right shrink-0">
      <p class="text-sm font-semibold" :class="isCredit ? 'text-accent-green' : 'text-accent-red'">
        {{ props.amount }}
      </p>
      <p class="text-xs text-text-secondary">{{ props.date }}</p>
    </div>
  </button>
</template>
