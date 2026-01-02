<script setup>
import { ref, computed, watch } from 'vue'
import {
  X,
  Bus,
  Gamepad2,
  TrendingUp,
  Heart,
  Briefcase,
  Ticket,
  Smartphone,
  Train,
} from 'lucide-vue-next'
import DottedArrow from '@/assets/icons/DottedArrow.vue'
import MiniDonutChart from '@/assets/icons/MiniDonutChart.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

watch(
  () => props.isOpen,
  isOpen => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
)

const close = () => {
  emit('close')
}

const categories = ref([
  { id: 1, name: 'Ulaşım Kartları', color: '#4CAF50', icon: Bus, percentage: 12 },
  { id: 2, name: 'Oyun & Dijital Kod', color: '#7C4DFF', icon: Gamepad2, percentage: 14 },
  { id: 3, name: 'Şans Oyunları', color: '#607D8B', icon: TrendingUp, percentage: 8 },
  { id: 4, name: 'Bağış', color: '#EF5350', icon: Heart, percentage: 10 },
  { id: 5, name: 'Findeks', color: '#5C6BC0', icon: Briefcase, percentage: 8 },
  { id: 6, name: 'Havalimanı Hizmetleri', color: '#42A5F5', icon: Ticket, percentage: 18 },
  { id: 7, name: 'GSM TL/Paket', color: '#FFA726', icon: Smartphone, percentage: 12 },
  { id: 8, name: 'Toplu Taşıma', color: '#26A69A', icon: Train, percentage: 18 },
])

const totalAmount = ref('₺3.417,50')

const segments = computed(() => {
  let cumulative = 0
  return categories.value.map(cat => {
    const segment = {
      ...cat,
      startAngle: cumulative * 3.6,
      endAngle: (cumulative + cat.percentage) * 3.6,
    }
    cumulative += cat.percentage
    return segment
  })
})

const getSegmentPath = (startAngle, endAngle, innerRadius = 60, outerRadius = 100) => {
  const startOuter = polarToCartesian(100, 100, outerRadius, startAngle)
  const endOuter = polarToCartesian(100, 100, outerRadius, endAngle)
  const startInner = polarToCartesian(100, 100, innerRadius, endAngle)
  const endInner = polarToCartesian(100, 100, innerRadius, startAngle)

  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

  return `M ${startOuter.x} ${startOuter.y} 
          A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}
          L ${startInner.x} ${startInner.y}
          A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${endInner.x} ${endInner.y}
          Z`
}

const polarToCartesian = (cx, cy, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  }
}

const getIconPosition = (startAngle, endAngle, radius = 80) => {
  const midAngle = (startAngle + endAngle) / 2
  return polarToCartesian(100, 100, radius, midAngle)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex flex-col lg:items-center lg:justify-center lg:p-4"
      >
        <div class="absolute inset-0 bg-bg-primary/80 backdrop-blur-xl" @click="close"></div>

        <div
          class="relative z-10 w-full flex-1 lg:flex-none lg:w-auto lg:max-w-md overflow-y-auto flex flex-col px-4 sm:px-6 py-6 sm:py-8 lg:max-h-[90vh]"
        >
          <DottedArrow
            class="absolute top-8 sm:top-12 right-8 sm:right-14 w-20 sm:w-24 h-12 sm:h-16 z-10 opacity-60"
          />

          <div class="absolute top-6 sm:top-8 right-4 sm:right-6 flex flex-col items-center z-10">
            <MiniDonutChart :width="32" :height="32" />
            <span class="text-xs sm:text-sm text-text-secondary mt-1">Özet</span>
          </div>

          <div class="h-10 sm:h-12 shrink-0"></div>

          <div class="flex justify-center mb-4 sm:mb-6 shrink-0">
            <div class="relative w-48 h-48 sm:w-56 sm:h-56">
              <svg viewBox="0 0 200 200" class="w-full h-full transform -rotate-90">
                <path
                  v-for="segment in segments"
                  :key="segment.id"
                  :d="getSegmentPath(segment.startAngle, segment.endAngle - 1)"
                  :fill="segment.color"
                  class="transition-all duration-500 hover:opacity-80 cursor-pointer"
                />
              </svg>

              <svg viewBox="0 0 200 200" class="absolute inset-0 w-full h-full pointer-events-none">
                <g
                  v-for="segment in segments"
                  :key="'icon-' + segment.id"
                  :transform="`translate(${getIconPosition(segment.startAngle - 90, segment.endAngle - 90, 80).x}, ${getIconPosition(segment.startAngle - 90, segment.endAngle - 90, 80).y})`"
                >
                  <foreignObject x="-10" y="-10" width="20" height="20">
                    <div class="flex items-center justify-center w-full h-full">
                      <component :is="segment.icon" class="w-5 h-5 text-white" stroke-width="1.5" />
                    </div>
                  </foreignObject>
                </g>
              </svg>

              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-xs text-text-secondary">Toplam</span>
                <span class="text-lg sm:text-xl font-bold text-text-primary">{{
                  totalAmount
                }}</span>
              </div>
            </div>
          </div>

          <div class="mb-6 sm:mb-8 shrink-0 px-2">
            <div class="flex flex-wrap justify-center gap-3 sm:gap-6 mb-2 sm:mb-3">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-sm shrink-0 bg-[#4CAF50]" />
                <span class="text-xs text-text-primary whitespace-nowrap">Ulaşım Kartları</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-sm shrink-0 bg-[#7C4DFF]" />
                <span class="text-xs text-text-primary whitespace-nowrap">Oyun & Dijital Kod</span>
              </div>
            </div>
            <div class="flex flex-wrap justify-center gap-3 sm:gap-6 mb-2 sm:mb-3">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-sm shrink-0 bg-[#607D8B]" />
                <span class="text-xs text-text-primary whitespace-nowrap">Şans Oyunları</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-sm shrink-0 bg-[#EF5350]" />
                <span class="text-xs text-text-primary whitespace-nowrap">Bağış</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-sm shrink-0 bg-[#5C6BC0]" />
                <span class="text-xs text-text-primary whitespace-nowrap">Findeks</span>
              </div>
            </div>
            <div class="flex flex-wrap justify-center gap-3 sm:gap-6">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-sm shrink-0 bg-[#42A5F5]" />
                <span class="text-xs text-text-primary whitespace-nowrap"
                  >Havalimanı Hizmetleri</span
                >
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-sm shrink-0 bg-[#FFA726]" />
                <span class="text-xs text-text-primary whitespace-nowrap">GSM TL/Paket</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-sm shrink-0 bg-[#26A69A]" />
                <span class="text-xs text-text-primary whitespace-nowrap">Toplu Taşıma</span>
              </div>
            </div>
          </div>

          <div class="text-center mb-6 sm:mb-8 shrink-0 px-2 sm:px-4">
            <p class="text-lg sm:text-xl font-semibold text-text-primary leading-snug">
              Ödemelerini aylık olarak<br />
              kategori bazlı<br />
              görüntüleyebilirsin.
            </p>
          </div>

          <div class="flex flex-col items-center mt-auto shrink-0">
            <button
              class="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors bg-white"
              @click="close"
            >
              <X class="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
            <span class="mt-2 text-xs sm:text-sm text-text-secondary">Anladım</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
