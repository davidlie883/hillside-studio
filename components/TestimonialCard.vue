<template>
  <article
    class="shrink-0 w-[340px] overflow-hidden rounded-[2rem] bg-[#111] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
  >
    <div
      class="h-56 bg-cover bg-center"
      :style="{ backgroundImage: `url('${image}')` }"
    ></div>

    <div class="p-6">
      <p class="mb-4 text-base leading-relaxed text-white/80">
        “{{ quote }}”
      </p>

      <h3 class="font-semibold text-white">
        {{ name }}
      </h3>

      <p class="text-sm text-white/55">
        {{ role }}
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})
</script>