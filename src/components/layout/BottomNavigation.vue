<script setup>
import { inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Home, QrCode, Send, Receipt, CreditCard } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const setQRModalOpen = inject('setQRModalOpen')
const setTransferModalOpen = inject('setTransferModalOpen')
const setStatsModalOpen = inject('setStatsModalOpen')

const navItems = [
  { name: 'Ana Sayfa', icon: Home, path: '/', type: 'route' },
  { name: 'QR İşlemleri', icon: QrCode, path: '/qr', type: 'modal', modal: 'qr' },
  { name: 'Para Transferi', icon: Send, path: '/transfer', type: 'modal', modal: 'transfer' },
  { name: 'Ödemeler', icon: Receipt, path: '/stats', type: 'modal', modal: 'stats' },
  { name: 'Papara Card', icon: CreditCard, path: '/cards', type: 'route' },
]

const isActive = path => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const handleNavClick = item => {
  if (item.type === 'modal') {
    if (item.modal === 'qr') {
      setQRModalOpen(true)
    } else if (item.modal === 'transfer') {
      setTransferModalOpen(true)
    } else if (item.modal === 'stats') {
      setStatsModalOpen(true)
    }
  } else {
    router.push(item.path)
  }
}
</script>

<template>
  <nav class="bg-bg-card border-t border-border mt-auto shrink-0">
    <div class="flex items-center justify-around py-2 px-1">
      <button
        v-for="item in navItems"
        :key="item.path"
        class="flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all min-w-[64px]"
        :class="[
          isActive(item.path) ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary',
        ]"
        @click="handleNavClick(item)"
      >
        <component
          :is="item.icon"
          class="w-6 h-6 transition-transform"
          :class="{ 'scale-110': isActive(item.path) }"
        />
        <span class="text-xs font-medium whitespace-nowrap">{{ item.name }}</span>
      </button>
    </div>
    <div class="h-safe-area-inset-bottom bg-bg-card lg:hidden"></div>
  </nav>
</template>
