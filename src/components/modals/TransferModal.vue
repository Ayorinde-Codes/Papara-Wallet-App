<script setup>
import { Send, ArrowLeftRight, Globe, ShieldCheck, RefreshCw } from 'lucide-vue-next'
import BottomSheetModal from './BottomSheetModal.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close', 'select'])

const options = [
  {
    id: 'send',
    label: 'Para Gönder',
    icon: Send,
    action: 'send',
  },
  {
    id: 'request',
    label: 'Para İste',
    icon: ArrowLeftRight,
    action: 'request',
  },
  {
    id: 'international',
    label: 'Yurt Dışı Para Transferi',
    icon: Globe,
    action: 'international',
  },
  {
    id: 'secure',
    label: 'Güvenli Ödeme İşlemi',
    icon: ShieldCheck,
    action: 'secure',
  },
  {
    id: 'recurring',
    label: 'Düzenli Transfer',
    icon: RefreshCw,
    action: 'recurring',
  },
]

const handleSelect = option => {
  emit('select', option.action)
  emit('close')
}

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <BottomSheetModal :isOpen="isOpen" @close="handleClose">
    <div>
      <button
        v-for="(option, index) in options"
        :key="option.id"
        class="w-full flex items-center gap-4 px-4 py-4 hover:bg-bg-surface transition-colors text-left relative"
        @click="handleSelect(option)"
      >
        <div class="w-8 h-8 flex items-center justify-center shrink-0">
          <component :is="option.icon" class="w-6 h-6 text-text-primary" />
        </div>

        <div
          class="flex-1 py-4 -my-4"
          :class="{ 'border-b border-border': index < options.length - 1 }"
        >
          <span class="text-base font-medium text-text-primary">{{ option.label }}</span>
        </div>
      </button>
    </div>

    <div class="p-4 pt-3">
      <button
        class="w-full py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
        @click="handleClose"
      >
        Vazgeç
      </button>
    </div>
  </BottomSheetModal>
</template>
