<template>
  <svg
    :width="width"
    :height="height"
    :class="[className, rotated ? 'rotate-90' : '']"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: 20,
  },
  height: {
    type: [String, Number],
    default: 20,
  },
  className: {
    type: String,
    default: '',
  },
  rotated: {
    type: Boolean,
    default: true,
  },
  strokeWidth: {
    type: [String, Number],
    default: 2.5,
  },
})
</script>
