<script setup>
import { ref } from 'vue'
import { RefreshCw, Send, ArrowDownToLine } from 'lucide-vue-next'

defineProps({
  balance: {
    type: String,
    default: '₺0,00'
  },
  iban: {
    type: String,
    default: 'TR05 ****'
  },
  isHidden: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['deposit', 'send', 'refresh'])
</script>

<template>
  <div class="bg-bg-card rounded-3xl p-5 mx-4">
    <!-- Header -->
    <div class="flex items-center gap-2 mb-2">
      <div class="w-5 h-5 rounded-full overflow-hidden">
        <div class="w-full h-full bg-red-600 flex items-center justify-center">
          <span class="text-white text-xs">🇹🇷</span>
        </div>
      </div>
      <span class="text-sm text-text-secondary">Türk Lirası Hesabı</span>
    </div>

    <div class="flex items-center justify-between mb-1">
      <div class="flex items-center gap-2">
        <span class="text-3xl font-bold text-text-primary">{{ isHidden ? '••••••' : balance }}</span>
        <button @click="emit('refresh')" class="p-1.5 rounded-full hover:bg-bg-surface transition-colors">
          <RefreshCw class="w-4 h-4 text-text-secondary" />
        </button>
      </div>
    </div>

    <div class="flex items-center gap-2 mb-5">
      <span class="text-xs text-text-secondary">IBAN'ın:</span>
      <span class="text-xs text-text-primary font-medium px-2 py-0.5 bg-bg-surface rounded">{{ iban }}</span>
    </div>

    <div class="flex gap-3">
      <button 
        @click="emit('deposit')"
        class="flex-1 flex items-center justify-center gap-2 bg-bg-surface hover:bg-border rounded-xl py-3 transition-colors"
      >
        <ArrowDownToLine class="w-5 h-5 text-text-primary" />
        <span class="text-sm font-semibold text-text-primary">Yatır / Çek</span>
      </button>
      <button 
        @click="emit('send')"
        class="flex-1 flex items-center justify-center gap-2 bg-bg-surface hover:bg-border rounded-xl py-3 transition-colors"
      >
        <Send class="w-5 h-5 text-text-primary" />
        <span class="text-sm font-semibold text-text-primary">Gönder</span>
      </button>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-center gap-2 mt-4">
      <div class="w-2 h-2 rounded-full bg-text-primary" />
      <div class="w-2 h-2 rounded-full bg-text-secondary/40" />
      <div class="w-2 h-2 rounded-full bg-text-secondary/40" />
      <div class="w-2 h-2 rounded-full bg-text-secondary/40" />
      <div class="w-2 h-2 rounded-full bg-text-secondary/40" />
      <div class="w-2 h-2 rounded-full bg-text-secondary/40" />
    </div>
  </div>
</template>

