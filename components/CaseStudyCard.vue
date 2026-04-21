<template>
  <div class="rounded-[1.75rem] border border-white/25 bg-white/5 p-4">
    <div
      class="mb-5 h-56 rounded-2xl bg-cover bg-center"
      :style="{ backgroundImage: `url('${image}')` }"
    ></div>

    <h3 class="text-2xl font-medium leading-tight text-white">
      {{ title }}
    </h3>

    <p class="mt-4 text-sm leading-relaxed text-white/65">
      {{ description }}
    </p>

    <div class="mt-10 border-t border-white/20 pt-5">
      <NuxtLink
        :to="link"
        class="text-xl text-white transition hover:text-white/75"
      >
        → {{ linkText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '/services'
  },
  linkText: {
    type: String,
    default: 'View Case Study'
  }
})
</script>