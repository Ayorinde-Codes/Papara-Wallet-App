<script setup>
import { QrCode, Landmark } from 'lucide-vue-next'
import BottomSheetModal from './BottomSheetModal.vue'
import QRPayIcon from '@/assets/icons/QRPayIcon.vue'
import QRReceiveIcon from '@/assets/icons/QRReceiveIcon.vue'
import ATMWithdrawIcon from '@/assets/icons/ATMWithdrawIcon.vue'
import ATMDepositIcon from '@/assets/icons/ATMDepositIcon.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'select'])

const options = [
  { 
    id: 'pay', 
    label: 'QR ile Ödeme Yap', 
    icon: 'qr-pay',
    action: 'qr-pay'
  },
  { 
    id: 'receive', 
    label: 'QR ile Ödeme Al', 
    icon: 'qr-receive',
    action: 'qr-receive'
  },
  { 
    id: 'withdraw', 
    label: 'QR ile ATM\'den Para Çek', 
    icon: 'atm-withdraw',
    action: 'atm-withdraw'
  },
  { 
    id: 'deposit', 
    label: 'QR ile ATM\'den Para Yatır', 
    icon: 'atm-deposit',
    action: 'atm-deposit'
  }
]

const handleSelect = (option) => {
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
        @click="handleSelect(option)"
        class="w-full flex items-center gap-4 px-4 py-4 hover:bg-bg-surface transition-colors text-left relative"
      >
        <div class="w-8 h-8 flex items-center justify-center shrink-0">
          <QRPayIcon v-if="option.icon === 'qr-pay'" :width="28" :height="28" />
          <QRReceiveIcon v-else-if="option.icon === 'qr-receive'" :width="28" :height="28" />
          <ATMWithdrawIcon v-else-if="option.icon === 'atm-withdraw'" :width="28" :height="28" />
          <ATMDepositIcon v-else-if="option.icon === 'atm-deposit'" :width="28" :height="28" />
        </div>
        
        <div class="flex-1 py-4 -my-4" :class="{ 'border-b border-border': index < options.length - 1 }">
          <span class="text-base font-medium text-text-primary">{{ option.label }}</span>
        </div>
      </button>
    </div>
    
    <div class="p-4 pt-3">
      <button
        @click="handleClose"
        class="w-full py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
      >
        Vazgeç
      </button>
    </div>
  </BottomSheetModal>
</template>

