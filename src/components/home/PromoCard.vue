<script setup>
import { Leaf, Lock } from 'lucide-vue-next'
import CashBackImage from '@/assets/images/cash-back.png'
import UberLogo from '@/assets/logos/UberLogo.vue'
import TemuLogo from '@/assets/logos/TemuLogo.vue'
import ChatGPTLogo from '@/assets/logos/ChatGPTLogo.vue'

const props = defineProps({
  month: {
    type: String,
    default: 'Ekim'
  },
  year: {
    type: String,
    default: '2025'
  },
  amount: {
    type: String,
    default: '₺960'
  },
  partners: {
    type: Array,
    default: () => [
      { name: 'ChatGPT', component: ChatGPTLogo },
      { name: 'TEMU', component: TemuLogo },
      { name: 'Uber', component: UberLogo },
    ]
  }
})
</script>

<template>
  <div class="mx-4 rounded-2xl overflow-hidden relative bg-bg-card min-h-[160px]">
    <button class="absolute top-1.5 right-1.5 p-1.5 rounded-full bg-bg-surface/50 flex items-center justify-center z-10">
      <div class="p-1 rounded-full bg-bg-surface flex items-center justify-center">
        <Lock class="w-4 h-4 text-text-secondary" />
      </div>
    </button>
    
    <div class="flex items-stretch">
      <div class="flex-1 p-5 flex flex-col justify-between">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-8 h-8 rounded-lg bg-bg-surface flex items-center justify-center">
            <Leaf class="w-4 h-4 text-text-secondary" />
          </div>
          <div>
            <p class="text-sm font-semibold text-text-primary">{{ month }}</p>
            <p class="text-xs text-text-secondary">{{ year }}</p>
          </div>
        </div>

        <div>
          <div class="bg-yellow-400 rounded-md px-2 py-1 mb-2 w-fit">
            <span class="text-2xl font-black text-black">{{ amount }}</span>
          </div>
          <p class="text-xs text-text-secondary font-medium mb-3">anında nakit kazan</p>
        </div>

        <div class="flex items-center gap-2">
          <div 
            v-for="partner in partners"
            :key="partner.name"
            class="w-8 h-8 rounded-full bg-bg-surface flex items-center justify-center overflow-hidden"
          >
            <component 
              :is="partner.component" 
              class="w-6 h-6 text-text-primary"
            />
          </div>
        </div>
      </div>

      <div class="w-1/2 relative overflow-hidden">
        <img 
          :src="CashBackImage" 
          alt="Cash Back" 
          class="w-full h-full object-cover object-right"
        />
      </div>
    </div>
  </div>
</template>

