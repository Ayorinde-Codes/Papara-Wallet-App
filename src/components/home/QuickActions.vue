<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpCircle, CreditCard, UserPlus } from 'lucide-vue-next'
import QuickActionButton from '@/components/common/QuickActionButton.vue'

const emit = defineEmits(['deposit', 'request-card', 'invite', 'page-change'])

const actions = [
  { label: 'Hesabına', sublabel: 'Para Yatır', icon: ArrowUpCircle, event: 'deposit' },
  { label: 'Papara Card', sublabel: 'İste', icon: CreditCard, event: 'request-card' },
  { label: 'Profil', sublabel: 'Ayarlar', icon: UserPlus, event: 'invite' },
]

const containerRef = ref(null)
const currentPage = ref(1)
const totalItems = actions.length

const handleScroll = () => {
  if (!containerRef.value) return

  const scrollLeft = containerRef.value.scrollLeft
  const scrollWidth = containerRef.value.scrollWidth
  const clientWidth = containerRef.value.clientWidth
  const maxScroll = scrollWidth - clientWidth

  if (maxScroll <= 0) {
    if (currentPage.value !== 1) {
      currentPage.value = 1
      emit('page-change', { current: 1, total: totalItems })
    }
    return
  }

  const scrollProgress = scrollLeft / maxScroll
  const newPage = Math.min(
    totalItems,
    Math.max(1, Math.round(scrollProgress * (totalItems - 1)) + 1)
  )

  if (newPage !== currentPage.value) {
    currentPage.value = newPage
    emit('page-change', { current: newPage, total: totalItems })
  }
}

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('scroll', handleScroll)
    emit('page-change', { current: 1, total: totalItems })
  }
})

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('scroll', handleScroll)
  }
})

const handleActionClick = event => {
  emit(event)
}
</script>

<template>
  <div class="px-4">
    <div ref="containerRef" class="flex gap-3 overflow-x-auto hide-scrollbar py-1">
      <QuickActionButton
        v-for="(action, index) in actions"
        :key="index"
        :label="action.label"
        :sublabel="action.sublabel"
        :icon="action.icon"
        @click="handleActionClick(action.event)"
      />
    </div>
  </div>
</template>
