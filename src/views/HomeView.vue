<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import StoryCarousel from '@/components/home/StoryCarousel.vue'
import FeatureCarousel from '@/components/home/FeatureCarousel.vue'
import NotificationBanner from '@/components/home/NotificationBanner.vue'
import QuickActions from '@/components/home/QuickActions.vue'
import TransactionList from '@/components/home/TransactionList.vue'
import CashbackCard from '@/components/home/CashbackCard.vue'
import PromoCard from '@/components/home/PromoCard.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import BottomSheet from '@/components/layout/BottomSheet.vue'
import ActionButton from '@/components/common/ActionButton.vue'
import {
  Send,
  ArrowLeftRight,
  Globe,
  ShieldCheck,
  RefreshCw,
  QrCode,
  Smartphone,
  Banknote,
} from 'lucide-vue-next'

const showTransferSheet = ref(false)
const showQRSheet = ref(false)
</script>

<template>
  <div class="flex-1 overflow-y-auto">
    <AppHeader papara-no="1234567890" :notification-count="7" />

    <StoryCarousel class="mb-6" />

    <FeatureCarousel class="mb-6" />

    <NotificationBanner class="mb-6" :badge-count="5" />

    <div class="px-4 mb-4">
      <SectionHeader title="DAHA İYİ BİR PAPARA DENEYİMİ" pagination="2 / 5" />
    </div>

    <QuickActions class="mb-6" />

    <TransactionList class="mb-6" />

    <CashbackCard class="mb-6" />

    <PromoCard class="mb-8" />

    <BottomSheet v-model="showTransferSheet">
      <div class="space-y-2">
        <ActionButton label="Para Gönder" :icon="Send" />
        <ActionButton label="Para İste" :icon="ArrowLeftRight" />
        <ActionButton label="Yurt Dışı Para Transferi" :icon="Globe" />
        <ActionButton label="Güvenli Ödeme İşlemi" :icon="ShieldCheck" />
        <ActionButton label="Düzenli Transfer" :icon="RefreshCw" />
      </div>
    </BottomSheet>

    <BottomSheet v-model="showQRSheet">
      <div class="space-y-2">
        <ActionButton label="QR ile Ödeme Yap" :icon="QrCode" />
        <ActionButton label="QR ile Ödeme Al" :icon="QrCode" />
        <ActionButton label="QR ile ATM'den Para Çek" :icon="Smartphone" />
        <ActionButton label="QR ile ATM'den Para Yatır" :icon="Banknote" />
      </div>
    </BottomSheet>
  </div>
</template>
