<script setup>
import { Menu, MessageSquare, User, Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

defineProps({
  paparaNo: {
    type: String,
    default: '1234567890'
  },
  notificationCount: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['menu-click', 'messages-click', 'profile-click'])

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <header class="flex items-center justify-between px-4 py-3 bg-bg-primary sticky top-0 z-40">
    <div class="flex items-center gap-2">
      <button 
        @click="emit('menu-click')"
        class="relative w-11 h-11 flex items-center justify-center rounded-full bg-bg-surface hover:bg-border transition-colors"
      >
        <Menu class="w-5 h-5 text-text-primary" />
        <span 
          v-if="notificationCount > 0"
          class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent-red text-white text-xs font-bold rounded-full flex items-center justify-center"
        >
          {{ notificationCount > 9 ? '9+' : notificationCount }}
        </span>
      </button>
      
      <button 
        @click="emit('messages-click')"
        class="w-11 h-11 flex items-center justify-center rounded-full bg-bg-surface hover:bg-border transition-colors"
      >
        <MessageSquare class="w-5 h-5 text-text-primary" />
      </button>
    </div>

    <div class="flex items-center gap-1 text-text-secondary">
      <span class="text-sm">Papara No:</span>
      <span class="text-sm font-medium text-text-primary">{{ paparaNo }}</span>
    </div>

    <div class="flex items-center gap-2">
      <button 
        @click="toggleTheme"
        class="w-11 h-11 flex items-center justify-center rounded-full bg-bg-surface hover:bg-border transition-colors"
      >
        <Sun v-if="isDark" class="w-5 h-5 text-text-primary" />
        <Moon v-else class="w-5 h-5 text-text-primary" />
      </button>
      
      <button 
        @click="emit('profile-click')"
        class="w-11 h-11 flex items-center justify-center rounded-full bg-bg-surface hover:bg-border transition-colors"
      >
        <User class="w-5 h-5 text-text-primary" />
      </button>
    </div>
  </header>
</template>

