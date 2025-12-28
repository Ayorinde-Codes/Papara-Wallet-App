<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 28
  },
  height: {
    type: [Number, String],
    default: 28
  }
})
</script>

<template>
  <svg 
    :width="width" 
    :height="height" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class="text-text-primary"
  >
    <!-- Arrow pointing up (inverse of withdraw) -->
    <path 
      d="M12 15C12.5523 15 13 14.5523 13 14V8.41436L14.2929 9.70718C14.6834 10.0976 15.3166 10.0976 15.7071 9.70718C16.0976 9.31664 16.0976 8.68348 15.7071 8.29292L12.708 5.29372C12.3177 4.90348 11.6851 4.90322 11.2945 5.29302L8.29498 8.28634C7.90448 8.67666 7.90448 9.30999 8.29498 9.70041C8.68548 10.091 9.31864 10.091 9.70918 9.70041L11 8.40972V14C11 14.5523 11.4477 15 12 15Z" 
      fill="currentColor"
    />
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M21 1C22.6569 1 24 2.34315 24 4V8C24 9.65685 22.6569 11 21 11H19V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V11H3C1.34315 11 0 9.65685 0 8V4C0 2.34315 1.34315 1 3 1H21ZM22 8C22 8.55228 21.5523 9 21 9H19V7H20C20.5523 7 21 6.55229 21 6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6C3 6.55229 3.44772 7 4 7H5V9H3C2.44772 9 2 8.55228 2 8V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V8ZM7 7V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V7H7Z" 
      fill="currentColor"
    />
  </svg>
</template>

