<template>
  <div class="rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm">
    <h3 class="text-3xl font-bold">
      {{ value }}
    </h3>
    <p class="mt-2 text-white/75">
      {{ label }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>