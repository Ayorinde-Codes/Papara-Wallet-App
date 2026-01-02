<script setup>
import { ref } from 'vue'
import PushPinIcon from '@/assets/icons/PushPinIcon.vue'
import StickerCardImage from '@/assets/images/sticker-card-hero.png'
import SupermanImage from '@/assets/images/superman.png'
import YatirimImage from '@/assets/images/yatirim-hesabi-logo.png'

const stories = ref([
  { id: 1, label: 'Papara Sticker Card', image: StickerCardImage, isPinned: true },
  { id: 2, label: 'Papara Superman Card', image: SupermanImage, isPinned: true },
  { id: 3, label: 'e-Şans 150 TL Hediye', avatar: '🎰', isPinned: false },
  { id: 4, label: 'Yatırım Hesabı', image: YatirimImage, isPinned: false },
  { id: 5, label: 'Altın Hediye', avatar: '🚀', isPinned: false },
])

const emit = defineEmits(['story-click'])
</script>

<template>
  <div class="px-4">
    <div class="flex gap-4 overflow-x-auto hide-scrollbar py-2">
      <button
        v-for="story in stories"
        :key="story.id"
        class="flex flex-col items-center gap-2 min-w-[72px]"
        @click="emit('story-click', story)"
      >
        <div
          class="relative w-16 h-16 rounded-full flex items-center justify-center"
          :class="
            story.isPinned
              ? 'ring-2 ring-offset-2 ring-offset-bg-primary ring-text-secondary'
              : 'ring-2 ring-offset-2 ring-offset-bg-primary ring-border'
          "
        >
          <div
            class="w-14 h-14 rounded-full bg-bg-surface flex items-center justify-center overflow-hidden"
          >
            <img
              v-if="story.image"
              :src="story.image"
              :alt="story.label"
              class="w-full h-full object-cover"
            />
            <span v-else class="text-2xl">{{ story.avatar }}</span>
          </div>
          <div
            v-if="story.isPinned"
            class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-gray-800 shadow-lg z-10"
          >
            <PushPinIcon class="w-3 h-3 text-black" />
          </div>
        </div>
        <span class="text-xs text-text-secondary text-center leading-tight whitespace-normal">{{
          story.label
        }}</span>
      </button>
    </div>
  </div>
</template>
