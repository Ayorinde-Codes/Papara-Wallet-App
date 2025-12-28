<script setup>
import { ChevronLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import SimChip from '@/assets/icons/SimChip.vue'
import Mastercard from '@/assets/icons/Mastercard.vue'
import ContactlessIcon from '@/assets/icons/ContactlessIcon.vue'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="flex-1 overflow-y-auto flex flex-col">
    <header class="flex items-center px-4 py-4 shrink-0">
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-bg-surface transition-colors"
        @click="goBack"
      >
        <ChevronLeft class="w-6 h-6 text-text-primary" />
      </button>
    </header>

    <div class="flex-1 flex flex-col px-6">
      <h1 class="text-3xl font-bold text-text-primary leading-tight mb-2 text-center">
        Akbank ATM'leri tamamen ücretsiz.
      </h1>

      <p class="text-base text-text-secondary mb-8 leading-relaxed text-center">
        Papara Card ile tüm ATM'lerden para çekebilir, Akbank ATM'lerinde tamamen ücretsiz para
        yatırabilir ve çekebilirsin.
      </p>

      <div class="relative flex-1 flex items-center justify-center min-h-[380px] mb-4">
        <div
          class="absolute w-[160px] h-[240px] rounded-xl shadow-lg z-10 bg-linear-to-br from-gray-100 to-gray-200 border border-gray-300/30 -translate-x-[100px]"
        >
          <div class="p-4 h-full flex flex-col">
            <div class="flex justify-end pt-4 pr-8">
              <SimChip className="w-8 h-10" fill="#A3A3A3" />
            </div>

            <div class="flex-1 flex items-center justify-start">
              <div
                class="text-gray-600 font-medium text-3xl tracking-[0.15em] lowercase font-['Maven_Pro']"
              >
                papara
              </div>
            </div>

            <div class="flex items-center justify-between pb-2">
              <div class="text-gray-400 text-[9px] tracking-[0.2em] font-card">GRAY</div>
              <Mastercard :width="36" :height="22" />
            </div>
          </div>
        </div>

        <div
          class="absolute w-[170px] h-[260px] rounded-xl shadow-2xl z-30 bg-neutral-800 translate-y-[40px]"
        >
          <div class="p-4 h-full flex flex-col">
            <div class="flex items-start justify-end pt-3">
              <div class="flex items-center gap-5">
                <SimChip className="w-8 h-10" fill="#E5E5E5" />
                <ContactlessIcon
                  :width="20"
                  :height="20"
                  className="text-white/70"
                  :rotated="true"
                />
              </div>
            </div>

            <div class="flex-1 flex items-center justify-start">
              <div
                class="text-gray-300 font-medium text-3xl tracking-[0.15em] lowercase font-['Maven_Pro']"
              >
                papara
              </div>
            </div>

            <div class="flex items-center justify-between pb-2">
              <div class="text-gray-400 text-[9px] tracking-[0.2em] font-card">BLACK</div>
              <Mastercard :width="36" :height="22" />
            </div>
          </div>
        </div>

        <div
          class="absolute w-[160px] h-[240px] rounded-xl shadow-lg z-20 bg-linear-to-br from-sky-400 to-sky-500 translate-x-[100px]"
        >
          <div class="p-4 h-full flex flex-col">
            <div class="flex items-start justify-between pt-1">
              <div class="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center">
                <span class="text-white text-sm font-bold">P</span>
              </div>
              <div class="flex items-center gap-5">
                <SimChip className="w-8 h-10" fill="#E5E5E5" />
                <ContactlessIcon
                  :width="20"
                  :height="20"
                  className="text-white/90"
                  :rotated="true"
                />
              </div>
            </div>

            <div class="flex-1 flex items-center justify-between">
              <div class="flex items-center justify-start">
                <div
                  class="text-white font-medium text-2xl tracking-[0.15em] lowercase font-['Maven_Pro']"
                >
                  papara
                </div>
              </div>
              <div class="flex flex-col items-center gap-1 -mr-2">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <span class="text-white text-[9px] font-semibold tracking-wide">EDU</span>
              </div>
            </div>

            <div class="flex items-center justify-end pb-2">
              <Mastercard :width="36" :height="22" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-6 py-6 space-y-3 shrink-0">
      <button
        class="w-full py-4 border border-white rounded-2xl bg-black text-white font-semibold hover:bg-gray-900 transition-colors"
      >
        ATM Bul
      </button>
      <button
        class="w-full py-4 border border-black rounded-2xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
      >
        Papara Card İste
      </button>
    </div>
  </div>
</template>
