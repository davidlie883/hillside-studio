<template> <!-- Main wrapper for the whole page -->
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- Header -->
     <!-- Flex is the one who arranges it to make it into a row -->
    <header class="absolute left-0 top-0 z-30 flex w-full flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-6">
      <h1 class="text-xl font-bold text-white md:text-2xl">Hillside Studio</h1>

      <nav class="flex gap-3">
        <!-- rounded-full is the one who gives the circle -->
        <NuxtLink
          to="/services"
          class="inline-block rounded-full border border-white/40 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-block rounded-full bg-white px-4 py-2 text-sm text-black transition hover:opacity-90"
        >
          Contact
        </NuxtLink>
      </nav>
    </header>

    <!-- Gives the background image -->
    <main>
      <section class="relative overflow-hidden min-h-screen">
      
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/house.png');"
        ></div>

        <!-- Adds a bit of color on the background -->
        <div class="absolute inset-0 bg-black/35"></div>

        <!-- Container holding all the text and button context -->
        <div class="relative z-10 px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20 lg:px-16 lg:pt-44">
          <div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
            <div> <!-- container to hold specific thinfs -->
              <p
                ref="tagRef"
                class="mb-3 text-xs uppercase tracking-[0.2em] text-white/80 md:mb-4 md:text-sm"
              >
                Simple mock website
              </p>

              <h2
                ref="titleRef"
                class="mb-5 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl md:mb-6 md:text-6xl"
              >
                We design clean websites for modern businesses
              </h2>

            <!-- Description paragraph-->

              <p
                ref="textRef"
                class="mb-7 max-w-xl text-base leading-relaxed text-white/85 md:mb-8 md:text-lg"
              >
                This is a sample homepage for a consulting-style business. It keeps the layout clean,
                professional, and easy to understand.
              </p>

              <div class="flex flex-wrap gap-4">
                <NuxtLink
                  ref="buttonRef"
                  to="/services"
                  class="inline-block rounded-full bg-white px-5 py-3 text-sm text-black transition hover:scale-105 md:px-6 md:text-base"
                >
                  View Services
                </NuxtLink>
              </div>
            </div>

            <!-- Another layer -->
            <div
              ref="cardRef"
              class="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md md:p-8"
            >
              <div class="mb-4 h-36 rounded-2xl bg-white/20 sm:h-40 md:h-48"></div>
              <h3 class="mb-3 text-xl font-semibold text-white md:text-2xl">
                Creative, simple, effective
              </h3>
              <p class="text-sm leading-relaxed text-white/80 md:text-base">
                A mock landing page with smooth animation, clear spacing, and one strong call-to-action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Rest of page -->
        <div class="px-5 py-12 md:px-10 md:py-20 lg:px-16 lg:py-24">
            <!-- Stats -->
            <!-- This makes it next to each other, grid -->
            <section class="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-2xl bg-white p-6 shadow-sm">
                <h3 class="text-3xl font-bold">50+</h3>
                <p class="mt-2 text-gray-600">Mock projects explored</p>
            </div>
            <div class="rounded-2xl bg-white p-6 shadow-sm">
                <h3 class="text-3xl font-bold">20+</h3>
                <p class="mt-2 text-gray-600">Landing page concepts</p>
            </div>
            <div class="rounded-2xl bg-white p-6 shadow-sm">
                <h3 class="text-3xl font-bold">100%</h3>
                <p class="mt-2 text-gray-600">Responsive-first layouts</p>
            </div>
            <div class="rounded-2xl bg-white p-6 shadow-sm">
                <h3 class="text-3xl font-bold">24/7</h3>
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
    .from(buttonRef.value?.$el || buttonRef.value, {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, '-=0.3')
    .from(cardRef.value, {
      x: 40,
      opacity: 0,
      duration: 0.9
    }, '-=0.6')
})
</script>