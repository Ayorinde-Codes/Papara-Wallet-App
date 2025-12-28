<script setup>
import { Lock, HelpCircle } from 'lucide-vue-next'
import SectionHeader from '@/components/common/SectionHeader.vue'

defineProps({
  target: {
    type: String,
    default: '₺500',
  },
  remaining: {
    type: String,
    default: '₺500,00',
  },
  progress: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['click', 'help'])
</script>

<template>
  <div class="px-4">
    <SectionHeader title="CASHBACK" @click="emit('click')" />

    <div class="bg-bg-card rounded-2xl p-4">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-10 h-10 rounded-xl bg-bg-surface flex items-center justify-center shrink-0">
          <Lock class="w-5 h-5 text-text-secondary" />
        </div>
        <div class="flex-1">
          <p class="text-sm text-text-primary">{{ target }} harcama hedefini tamamla,</p>
          <p class="text-sm text-text-secondary">Cashback kazanmaya başla.</p>
        </div>
        <button class="p-1" @click.stop="emit('help')">
          <HelpCircle class="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      <div class="h-px bg-border mb-2"></div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <span class="text-sm font-semibold text-text-primary">{{ remaining }} kaldı</span>
          <HelpCircle class="w-4 h-4 text-text-secondary" />
        </div>
        <span class="text-sm text-text-secondary">%{{ progress }} Tamamlandı</span>
      </div>
    </div>
  </div>
</template>
