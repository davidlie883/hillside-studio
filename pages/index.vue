<template> <!-- Main wrapper for the whole page -->
<div class="min-h-screen bg-black text-white">    <!-- Header -->
     <!-- Flex is the one who arranges it to make it into a row -->
<!-- Header -->
<header class="px-6 pt-5">
  <div class="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-4">
    <div class="flex items-center gap-10">
      <h1 class="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        Hillside Studios
      </h1>

      <nav class="hidden items-center md:flex">
        <NuxtLink
          to="/"
          class="px-5 text-base font-medium text-white/70 transition hover:text-white"
        >
          Work
        </NuxtLink>

        <NuxtLink
          to="/services"
          class="px-5 text-base font-medium text-white/70 transition hover:text-white"
        >
          Approach
        </NuxtLink>

        <NuxtLink
  to="/contact"
  class="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
>
  Contact
</NuxtLink>
      </nav>
    </div>

    <NuxtLink
      to="/contact"
      class="rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
    >
      Let’s Work Together
    </NuxtLink>
  </div>
</header>

<!-- Hero -->
<main class="bg-black">
    <section class="mx-auto max-w-7xl px-6 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14">
    <div class="grid gap-12 lg:grid-cols-[1.05fr_1.25fr] lg:items-start">
      <!-- Left side -->
      <div class="pt-4">
        <p
          ref="tagRef"
          class="mb-4 text-sm uppercase tracking-[0.2em] text-white/60"
        >
          Creative + Tech
        </p>

        <h2
          ref="titleRef"
          class="max-w-2xl text-5xl font-light leading-[0.95] tracking-tight text-white md:text-7xl"
        >
          Digital Agency
        </h2>

        <div class="mt-16 max-w-xl border-t border-white/30 pt-6">
          <p
            ref="textRef"
            class="text-lg leading-relaxed text-white/75"
          >
            At Hillside, we’re a creative tech agency dedicated to helping businesses grow.
            We design and develop engaging websites and digital products that elevate brands
            and deliver real results.
          </p>
        </div>

        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink
            ref="buttonRef"
            to="/contact"
            class="rounded-xl bg-white px-6 py-4 text-base font-medium text-black transition hover:opacity-90"
          >
            → Let’s Work Together
          </NuxtLink>

          <NuxtLink
            to="/services"
            class="rounded-xl bg-white/10 px-6 py-4 text-base font-medium text-white transition hover:bg-white/20"
          >
            → View Our Works
          </NuxtLink>
        </div>
      </div>

      

      <!-- Right side -->
      <div
        ref="cardRef"
        class="grid gap-6 md:grid-cols-2 lg:pt-40"
      >
        <div class="rounded-[1.75rem] border border-white/25 bg-white/5 p-4">
          <div
            class="mb-5 h-56 rounded-2xl bg-cover bg-center"
            style="background-image: url('/house.png');"
          ></div>

          <h3 class="text-2xl font-medium leading-tight text-white">
            Designing Web and System for Australian Business
          </h3>

          <p class="mt-4 text-sm leading-relaxed text-white/65">
            Translating complex problems for establishing a digital presence across web
            and enterprise business.
          </p>

          <div class="mt-10 border-t border-white/20 pt-5">
            <NuxtLink to="/services" class="text-xl text-white transition hover:text-white/75">
              → View Case Study
            </NuxtLink>
          </div>
        </div>

        <div class="rounded-[1.75rem] border border-white/25 bg-white/5 p-4">
          <div
            class="mb-5 h-56 rounded-2xl bg-cover bg-center"
            style="background-image: url('/house.png');"
          ></div>

          <h3 class="text-2xl font-medium leading-tight text-white">
            Designing Web and System for Australian Business
          </h3>

          <p class="mt-4 text-sm leading-relaxed text-white/65">
            Translating complex problems for establishing a digital presence across web
            and enterprise business.
          </p>

          <div class="mt-10 border-t border-white/20 pt-5">
            <NuxtLink to="/services" class="text-xl text-white transition hover:text-white/75">
              → View Case Study
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

<div class="mt-10 flex justify-center">
  <button
    type="button"
    @click="scrollToNext"
    class="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
  >
    <span>Scroll</span>
    <span class="text-xl">↓</span>
  </button>
</div>

      <!-- Rest of page -->
        <div id="next-section" class="px-5 py-12 md:px-10 md:py-20 lg:px-16 lg:py-24">

            <!-- Stats -->
            <!-- This makes it next to each other, grid -->
            <section class="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div class="rounded-2xl bg-white p-6 text-black shadow-sm">
                <h3 class="text-3xl font-bold text-black">50+</h3>
                <p class="mt-2 text-gray-600">Mock projects explored</p>
              </div>
              <div class="rounded-2xl bg-white p-6 text-black shadow-sm">
                <h3 class="text-3xl font-bold text-black">20+</h3>
                <p class="mt-2 text-gray-600">Landing page concepts</p>
              </div>
              <div class="rounded-2xl bg-white p-6 text-black shadow-sm">
                <h3 class="text-3xl font-bold text-black">100%</h3>
                <p class="mt-2 text-gray-600">Responsive-first layouts</p>
              </div>
              <div class="rounded-2xl bg-white p-6 text-black shadow-sm">
                <h3 class="text-3xl font-bold text-black">24/7</h3>
                <p class="mt-2 text-gray-600">Modern business presence</p>
              </div>
            </section>

    <!-- Why Choose Us, and is a parent section and the grid-cols-2 allows it to be next to each other-->
    <section class="mb-20 grid gap-8 md:grid-cols-2 md:items-start">

    <!-- Left side: content cards -->
    <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-2xl bg-white p-6 shadow-sm">
        <h3 class="mb-2 font-semibold">Clean layouts</h3>
        <p class="text-sm text-gray-600">
            Clear spacing and structure that make each section easy to scan.
        </p>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-sm">
        <h3 class="mb-2 font-semibold">Professional look</h3>
        <p class="text-sm text-gray-600">
            A polished visual style that helps build trust with visitors.
        </p>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-sm">
        <h3 class="mb-2 font-semibold">Responsive design</h3>
        <p class="text-sm text-gray-600">
            Pages that adapt neatly across desktop, tablet, and mobile.
        </p>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-sm">
        <h3 class="mb-2 font-semibold">Simple navigation</h3>
        <p class="text-sm text-gray-600">
            Straightforward page flow so users can find what they need fast.
        </p>
        </div>
    </div>

  <!-- Right side: title/content -->
  <div>
    <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Why choose us</p>
    <h2 class="mb-5 text-3xl font-bold md:text-4xl">
      A website should look good and feel easy to use
    </h2>
    <p class="max-w-xl text-gray-600">
      We focus on simple structure, clean presentation, and layouts that help visitors
      understand a business quickly.
    </p>
  </div>
</section>

        <!-- Testimonials -->
        <section class="mb-20">
          <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Testimonials</p>
          <h2 class="mb-8 text-3xl font-bold md:text-4xl">What clients say</h2>

          <!-- This div allows it to be next to each other-->
          <div class="grid gap-6 md:grid-cols-3">
            <div class="rounded-2xl bg-white p-6 shadow-sm">
              <p class="mb-4 text-gray-600">
                “The layout felt clean and modern, and it presented our business much more clearly.”
              </p>
              <h3 class="font-semibold">Sarah Lim</h3>
              <p class="text-sm text-gray-500">Small Business Owner</p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm">
              <p class="mb-4 text-gray-600">
                “Simple, polished, and easy to navigate. It looked much more professional than before.”
              </p>
              <h3 class="font-semibold">Daniel Wong</h3>
              <p class="text-sm text-gray-500">Startup Founder</p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm">
              <p class="mb-4 text-gray-600">
                “The structure was very easy to understand, and the design felt neat on every screen.”
              </p>
              <h3 class="font-semibold">Chloe Nguyen</h3>
              <p class="text-sm text-gray-500">Marketing Coordinator</p>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="mb-20">
          <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">FAQ</p>
          <h2 class="mb-8 text-3xl font-bold md:text-4xl">Frequently asked questions</h2>

          <div class="space-y-4">
            <div class="rounded-2xl bg-white p-6 shadow-sm">
              <h3 class="mb-2 font-semibold">What kind of websites do you make?</h3>
              <p class="text-gray-600">
                We focus on modern business websites, landing pages, and simple service-based layouts.
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm">
              <h3 class="mb-2 font-semibold">Will it work on mobile?</h3>
              <p class="text-gray-600">
                Yes, the layout is built to stay clean and readable across different screen sizes.
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm">
              <h3 class="mb-2 font-semibold">Can the design be customised?</h3>
              <p class="text-gray-600">
                Yes, colours, sections, text, and overall style can be adjusted to suit the business.
              </p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="rounded-3xl bg-black px-6 py-12 text-white md:px-10">
          <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-300">Let’s build something</p>
          <h2 class="mb-4 text-3xl font-bold md:text-4xl">
            Ready to create a stronger online presence?
          </h2>
          <p class="mb-6 max-w-2xl text-gray-300">
            A clean website can make a business feel more modern, trustworthy, and easy to understand.
          </p>

          <div class="flex flex-wrap gap-4">
            <NuxtLink
              to="/contact"
              class="rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90"
            >
              Contact Us
            </NuxtLink>

            <NuxtLink
              to="/services"
              class="rounded-full border border-white/30 px-6 py-3 text-white transition hover:bg-white hover:text-black"
            >
              Explore Services
            </NuxtLink>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const tagRef = ref(null)
const titleRef = ref(null)
const textRef = ref(null)
const buttonRef = ref(null)
const cardRef = ref(null)
const scrollToNext = () => {
  const nextSection = document.getElementById('next-section')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const tl = gsap.timeline() 

  tl.from(tagRef.value, {
  y: 20,
  opacity: 0,
  duration: 0.6
})
  .from(titleRef.value, {
    y: 40,
    opacity: 0,
    duration: 0.8
  }, '-=0.3')
  .from(textRef.value, {
    y: 30,
    opacity: 0,
    duration: 0.7
  }, '-=0.4')
  .from(cardRef.value, {
    x: 40,
    opacity: 0,
    duration: 0.9
  }, '-=0.6')

})
</script>