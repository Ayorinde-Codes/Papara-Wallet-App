<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Coins, CreditCard, Send } from 'lucide-vue-next'
import IconContainer from '@/components/common/IconContainer.vue'
import FeatureCardButton from '@/components/common/FeatureCardButton.vue'
import KymetliLogo from '@/assets/images/kymetli-madenler-logo.png'
import DolarLogo from '@/assets/images/dolar-hesabi-logo.png'
import YatirimLogo from '@/assets/images/yatirim-hesabi-logo.png'
import BirikimLogo from '@/assets/images/birikim-hesabi-logo.png'
import NasdaqLogo from '@/assets/images/nasdaq-logo.png'
import BorsaIstanbulLogo from '@/assets/images/borsa-istanbul-logo.png'

const currentSlide = ref(0)
let autoSlideInterval = null

const carouselStyle = computed(() => ({
  '--translate-x': `-${currentSlide.value * 100}%`,
  transform: 'translateX(var(--translate-x))',
}))

const slides = ref([
  {
    id: 1,
    type: 'lira',
    title: 'Türk Lirası Hesabı',
    balance: '₺0,00',
    iban: 'TR05',
  },
  {
    id: 2,
    type: 'balance',
    title: 'Tüm Varlıklarım',
    balance: '₺0,00',
    accounts: [
      { icon: '🇹🇷', label: 'Türk Lirası Hesabı', value: '₺0,00' },
      { icon: '💎', label: 'Kıymetli Madenler', value: '—' },
      { icon: '📊', label: 'Yatırım Hesabı', value: '—' },
      { icon: '🏦', label: 'Birikim Hesabı', value: '—' },
    ],
  },
  {
    id: 3,
    type: 'birikim',
    title: 'Birikim\nHesabı',
    subtitle: 'Hedef belirle, birikim yap.',
    buttonText: 'Birikim Hesabı Aç',
    logo: BirikimLogo,
  },
  {
    id: 4,
    type: 'investment',
    logos: ['Nasdaq', 'NYSE', 'BORSA İSTANBUL'],
    title: 'Yatırım\nHesabı',
    subtitle: 'Hisse senedi al / sat',
    buttonText: 'Yatırım Hesabı Oluştur',
    logo: YatirimLogo,
  },
  {
    id: 5,
    type: 'feature',
    icon: '🇺🇸',
    title: 'Dolar\nHesabı',
    subtitle: 'Yatırım işlemlerin için dolar al/sat.',
    buttonText: 'Yatırım Hesabı Oluştur',
    logo: DolarLogo,
  },
  {
    id: 6,
    type: 'gold',
    title: 'Kıymetli\nMadenler',
    subtitle: '(Altın, Gümüş, Platin)',
    buttonText: 'Kıymetli Madenler Hesabı Aç',
    logo: KymetliLogo,
  },
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const goToSlide = index => {
  currentSlide.value = index
  resetAutoSlide()
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 4000)
}

const resetAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})
</script>

<template>
  <div class="relative px-4">
    <div class="overflow-hidden rounded-3xl">
      <div class="flex transition-transform duration-300 ease-out" :style="carouselStyle">
        <div v-for="slide in slides" :key="slide.id" class="w-full shrink-0">
          <div v-if="slide.type === 'lira'" class="rounded-3xl p-5 min-h-[240px] bg-bg-card">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-lg">🇹🇷</span>
              <span class="text-sm text-text-primary font-medium">{{ slide.title }}</span>
            </div>

            <div class="flex items-center gap-2 mb-1">
              <span class="text-4xl font-bold text-text-primary">{{ slide.balance }}</span>
              <button class="w-6 h-6 rounded-full bg-bg-surface flex items-center justify-center">
                <svg
                  class="w-4 h-4 text-text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>

            <div class="flex items-center gap-2 mb-6">
              <span class="text-xs text-text-secondary">IBAN'ın:</span>
              <span class="text-xs text-text-primary bg-bg-surface px-2 py-0.5 rounded">{{
                slide.iban
              }}</span>
              <span class="text-xs text-text-secondary">***</span>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <button
                class="flex-1 flex items-center justify-between px-4 bg-bg-surface rounded-xl py-3 hover:bg-bg-surface/80 transition-colors"
              >
                <span class="text-sm font-semibold text-text-primary">Yatır / Çek</span>
                <IconContainer>
                  <CreditCard class="w-5 h-5 text-black" />
                </IconContainer>
              </button>
              <button
                class="flex-1 flex items-center justify-between px-4 bg-bg-surface rounded-xl py-3 hover:bg-bg-surface/80 transition-colors"
              >
                <span class="text-sm font-semibold text-text-primary">Gönder</span>
                <IconContainer>
                  <Send class="w-5 h-5 text-black" />
                </IconContainer>
              </button>
            </div>
          </div>

          <div
            v-else-if="slide.type === 'balance'"
            class="rounded-3xl p-5 min-h-[240px] bg-bg-card"
          >
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <span class="text-black text-xs font-bold">P</span>
                </div>
                <span class="text-sm text-text-secondary">{{ slide.title }}</span>
              </div>
              <button
                class="w-10 h-6 bg-bg-surface rounded-full flex items-center justify-end pr-1"
              >
                <span class="text-xs">₺</span>
              </button>
            </div>
            <div class="text-3xl font-bold text-text-primary mb-6">{{ slide.balance }}</div>

            <div class="space-y-3">
              <div
                v-for="account in slide.accounts"
                :key="account.label"
                class="flex items-center justify-between"
              >
                <div class="flex items-center gap-2">
                  <span class="text-lg">{{ account.icon }}</span>
                  <span class="text-sm text-text-primary">{{ account.label }}</span>
                </div>
                <span class="text-sm text-text-secondary">{{ account.value }}</span>
              </div>
            </div>
          </div>

          <div
            v-else-if="slide.type === 'gold'"
            class="rounded-3xl p-5 min-h-[240px] relative overflow-hidden bg-bg-card"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-8 h-8 rounded-lg bg-amber-500/30 flex items-center justify-center">
                    <svg class="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 21h18l-3-18H6L3 21zM7.5 7h9l2 12h-13l2-12z" opacity="0.3" />
                      <path d="M19 3H5L2 21h20L19 3zm-1.5 4l2 12h-15l2-12h11z" />
                    </svg>
                  </div>
                  <div class="w-8 h-8 rounded-lg bg-gray-400/30 flex items-center justify-center">
                    <svg class="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 21h18l-3-18H6L3 21zM7.5 7h9l2 12h-13l2-12z" opacity="0.3" />
                      <path d="M19 3H5L2 21h20L19 3zm-1.5 4l2 12h-15l2-12h11z" />
                    </svg>
                  </div>
                </div>

                <h3
                  class="text-2xl font-bold text-text-primary leading-tight whitespace-pre-line mb-1"
                >
                  {{ slide.title }}
                </h3>

                <p class="text-sm text-text-secondary">{{ slide.subtitle }}</p>
              </div>

              <div class="w-32 h-32 shrink-0">
                <img
                  :src="slide.logo"
                  alt="Kıymetli Madenler"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>

            <FeatureCardButton :text="slide.buttonText" />
          </div>

          <div
            v-else-if="slide.type === 'investment'"
            class="rounded-3xl p-5 min-h-[240px] relative overflow-hidden bg-bg-card"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-4">
                  <img :src="NasdaqLogo" alt="Nasdaq" class="h-4 object-contain" />
                  <span class="text-xs text-text-secondary">NYSE</span>
                  <img :src="BorsaIstanbulLogo" alt="Borsa Istanbul" class="h-4 object-contain" />
                </div>

                <h3
                  class="text-2xl font-bold text-text-primary leading-tight whitespace-pre-line mb-1"
                >
                  {{ slide.title }}
                </h3>

                <p class="text-sm text-text-secondary">{{ slide.subtitle }}</p>
              </div>

              <div class="w-32 h-32 shrink-0">
                <img :src="slide.logo" alt="Yatırım Hesabı" class="w-full h-full object-contain" />
              </div>
            </div>

            <FeatureCardButton :text="slide.buttonText" />
          </div>

          <div
            v-else-if="slide.type === 'birikim'"
            class="rounded-3xl p-5 min-h-[240px] relative overflow-hidden bg-bg-card"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div
                  class="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center mb-3"
                >
                  <Coins class="w-6 h-6 text-purple-300" />
                </div>

                <h3
                  class="text-2xl font-bold text-text-primary leading-tight whitespace-pre-line mb-1"
                >
                  {{ slide.title }}
                </h3>

                <p class="text-sm text-text-secondary">{{ slide.subtitle }}</p>
              </div>

              <div class="w-32 h-32 shrink-0">
                <img :src="slide.logo" alt="Birikim Hesabı" class="w-full h-full object-contain" />
              </div>
            </div>

            <FeatureCardButton :text="slide.buttonText" />
          </div>

          <div v-else class="rounded-3xl p-5 min-h-[240px] relative overflow-hidden bg-bg-card">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div
                  v-if="slide.icon"
                  class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 text-2xl"
                >
                  {{ slide.icon }}
                </div>

                <h3
                  class="text-2xl font-bold text-text-primary leading-tight whitespace-pre-line mb-1"
                >
                  {{ slide.title }}
                </h3>

                <p class="text-sm text-text-secondary">{{ slide.subtitle }}</p>
              </div>

              <div v-if="slide.logo" class="w-32 h-32 shrink-0">
                <img :src="slide.logo" :alt="slide.title" class="w-full h-full object-contain" />
              </div>
            </div>

            <FeatureCardButton :text="slide.buttonText" />
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-center gap-2 mt-4">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="w-2 h-2 rounded-full transition-all"
        :class="currentSlide === index ? 'bg-text-primary w-4' : 'bg-text-secondary/40'"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>
