<script setup>
import { ArrowUpCircle, CreditCard, UserPlus } from 'lucide-vue-next'
import QuickActionButton from '@/components/common/QuickActionButton.vue'

const emit = defineEmits(['deposit', 'request-card', 'invite'])
</script>

<template>
  <div class="px-4">
    <div class="flex gap-3 overflow-x-auto hide-scrollbar py-1">
      <QuickActionButton
        label="Hesabına"
        sublabel="Para Yatır"
        :icon="ArrowUpCircle"
        @click="emit('deposit')"
      />
      <QuickActionButton
        label="Papara Card"
        sublabel="İste"
        :icon="CreditCard"
        @click="emit('request-card')"
      />
      <QuickActionButton
        label="Profil"
        sublabel="Ayarlar"
        :icon="UserPlus"
        @click="emit('invite')"
      />
    </div>
  </div>
</template>
