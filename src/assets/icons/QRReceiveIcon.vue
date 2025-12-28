<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 28,
  },
  height: {
    type: [Number, String],
    default: 28,
  },
})
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 256 256"
    fill="none"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="text-text-primary"
  >
    <!-- Top-left finder pattern -->
    <rect x="48" y="48" width="64" height="64" rx="8" fill="none" />
    <!-- Bottom-left finder pattern -->
    <rect x="48" y="144" width="64" height="64" rx="8" fill="none" />
    <!-- Top-right: Arrow pointing left (replacing top-right finder) -->
    <path d="M184 72h-64M160 44l-30 29 30 28" fill="none" />
    <!-- Bottom-right data pattern -->
    <line x1="144" y1="144" x2="144" y2="176" fill="none" />
    <polyline points="144 208 176 208 176 144" fill="none" />
    <line x1="176" y1="160" x2="208" y2="160" fill="none" />
    <line x1="208" y1="192" x2="208" y2="208" fill="none" />
  </svg>
</template>
