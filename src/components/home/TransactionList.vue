<script setup>
import TransactionItem from './TransactionItem.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import OdeabankLogo from '@/assets/logos/OdeabankLogo.vue'
import GarantiBBVALogo from '@/assets/logos/GarantiBBVALogo.vue'

const transactions = [
  {
    id: 1,
    name: 'Hidayet Salt',
    type: 'FAST Para Transferi',
    amount: '₺20.000,00',
    date: '14 Eylül 2025 20:14',
    transactionType: 'debit',
    logoComponent: OdeabankLogo,
    logoColor: 'bg-emerald-900',
  },
  {
    id: 2,
    name: 'Garanti BBVA',
    type: 'FAST Para Transferi',
    amount: '₺20.000,00',
    date: '14 Eylül 2025 20:12',
    transactionType: 'credit',
    logoComponent: GarantiBBVALogo,
    logoColor: 'bg-green-600',
  },
]

const emit = defineEmits(['view-all', 'transaction-click'])
</script>

<template>
  <div class="px-4">
    <SectionHeader title="HESAP HAREKETLERİ" @click="emit('view-all')" />

    <div class="space-y-1">
      <TransactionItem
        v-for="transaction in transactions"
        :key="transaction.id"
        :name="transaction.name"
        :type="transaction.type"
        :amount="transaction.amount"
        :date="transaction.date"
        :transaction-type="transaction.transactionType"
        :logo-component="transaction.logoComponent"
        :logo-color="transaction.logoColor"
        @click="emit('transaction-click', transaction)"
      />
    </div>
  </div>
</template>
