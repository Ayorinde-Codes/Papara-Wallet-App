<script setup></script>

<template>
  <div class="min-h-screen bg-bg-primary lg:bg-neutral-900 flex justify-center lg:py-6 lg:px-4">
    <div
      class="w-full max-w-md lg:bg-bg-primary lg:rounded-3xl lg:shadow-2xl lg:border lg:border-white/10 relative min-h-screen lg:min-h-[calc(100vh-48px)] lg:max-h-[calc(100vh-48px)] lg:overflow-hidden flex flex-col overflow-hidden"
    >
      <slot />
    </div>
  </div>
</template>
