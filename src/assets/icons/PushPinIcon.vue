<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="fill-current"
    preserveAspectRatio="xMidYMid meet"
  >
    <!-- Push pin icon - round head with sharp point -->
    <path d="M16 12V2H8v10l-4 4v2h16v-2l-4-4z" fill="currentColor" />
    <circle cx="12" cy="6" r="2" fill="currentColor" opacity="0.3" />
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: 16,
  },
  height: {
    type: [String, Number],
    default: 16,
  },
})
</script>
