<script setup>
import { computed } from 'vue'
import { TrendingUp } from 'lucide-vue-next'
import IconContainer from '@/components/common/IconContainer.vue'

const props = defineProps({
  time: {
    type: String,
    default: 'Bugün 06:00',
  },
  title: {
    type: String,
    default: 'Aylık hesap özetin oluşturuldu.',
  },
  subtitle: {
    type: String,
    default: 'Eylül ayında neler yaptığını görmek için tıkla',
  },
  badgeCount: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['click'])

const stackedCards = computed(() => {
  const count = Math.max(0, props.badgeCount - 1)
  return Array.from({ length: count }, (_, i) => {
    const index = i + 1
    const offset = index * 1.5
    const widthOffset = 32 + index
    const shadowClass = index === 1 ? 'shadow-lg' : index === 2 ? 'shadow-xl' : 'shadow-2xl'
    return {
      index,
      offset,
      widthOffset,
      shadowClass,
    }
  })
})
</script>

<template>
  <div class="mx-4 h-24 relative pl-0 pt-0">
    <div
      v-for="card in stackedCards"
      :key="card.index"
      class="absolute rounded-2xl bg-bg-card border border-border h-full"
      :class="card.shadowClass"
      :style="{
        top: `${card.offset}px`,
        left: `${card.offset}px`,
        width: `calc(100% - ${card.widthOffset}px)`,
      }"
    ></div>

    <button
      class="relative w-[calc(100%-32px)] h-full bg-bg-card rounded-2xl p-4 flex items-start gap-3 hover:bg-bg-surface transition-colors border border-border z-10"
      @click="emit('click')"
    >
      <IconContainer bgColor="orange" borderColor="orange">
        <TrendingUp class="w-5 h-5 text-white" stroke-width="2.5" />
      </IconContainer>

      <div class="flex-1 text-left">
        <span class="text-xs text-text-secondary">{{ time }}</span>
        <h4 class="text-sm font-semibold text-text-primary mt-0.5">{{ title }}</h4>
        <p class="text-xs text-text-secondary mt-0.5">{{ subtitle }}</p>
      </div>

      <div
        v-if="badgeCount > 0"
        class="absolute -top-2 -right-2 w-6 h-6 bg-accent-red text-white text-xs font-bold rounded-full flex items-center justify-center z-20"
      >
        {{ badgeCount > 9 ? '9+' : badgeCount }}
      </div>
    </button>
  </div>
</template>
