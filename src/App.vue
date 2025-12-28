<script setup>
import { onMounted, provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import MobileContainer from '@/components/layout/MobileContainer.vue'
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import QRModal from '@/components/modals/QRModal.vue'
import TransferModal from '@/components/modals/TransferModal.vue'
import StatsModal from '@/components/modals/StatsModal.vue'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()

const isQRModalOpen = ref(false)
const isTransferModalOpen = ref(false)
const isStatsModalOpen = ref(false)

provide('isQRModalOpen', isQRModalOpen)
provide('isTransferModalOpen', isTransferModalOpen)
provide('isStatsModalOpen', isStatsModalOpen)
provide('setQRModalOpen', (value) => { isQRModalOpen.value = value })
provide('setTransferModalOpen', (value) => { isTransferModalOpen.value = value })
provide('setStatsModalOpen', (value) => { isStatsModalOpen.value = value })

onMounted(() => {
  initTheme()
})

const handleQRSelect = (action) => {
  console.log('QR action selected:', action)
}

const handleTransferSelect = (action) => {
  console.log('Transfer action selected:', action)
}
</script>

<template>
  <MobileContainer>
    <RouterView />
    <BottomNavigation />
    
    <QRModal 
      :isOpen="isQRModalOpen" 
      @close="isQRModalOpen = false"
      @select="handleQRSelect"
    />
    
    <TransferModal 
      :isOpen="isTransferModalOpen" 
      @close="isTransferModalOpen = false"
      @select="handleTransferSelect"
    />
    
    <StatsModal 
      :isOpen="isStatsModalOpen" 
      @close="isStatsModalOpen = false"
    />
  </MobileContainer>
</template>
