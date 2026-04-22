<template> <!-- Main wrapper for the whole page -->
<div class="min-h-screen bg-black text-white">    <!-- Header -->
     <!-- Flex is the one who arranges it to make it into a row -->
<!-- Header -->
<header class="px-6 pt-5">
  <div class="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-4">
    <div class="flex items-center gap-10">
      <img
  src="/hillside_white.webp"
  alt="Hillside Studios"
  class="h-10 w-auto object-contain md:h-12"
/>

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
          Creative + Marketing + Tech
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
            At Hillside, we’re a creative tech agency dedicated to helping businesses grow. We design and develop engaging websites and digital products that elevate brands and deliver real results. Beyond design, we provide expert consulting and strategic guidance to ensure every step you take leads to success.

          </p>
        </div>

        <div class="mt-8 flex flex-wrap gap-4">
  

          <NuxtLink
            to="/services"
            class="rounded-xl bg-white/10 px-6 py-4 text-base font-medium text-white transition hover:bg-white/20"
          >
            → View Our Works
          </NuxtLink>
        </div>
      </div>

      <div
  ref="cardRef"
  class="grid gap-6 md:grid-cols-2 lg:pt-40"
>
  <CaseStudyCard
  image="/house.png"
  title="Elevating Web and Automation System for YIPABK"
  description="Indonesian non-profit advancing inclusive education and support systems for children with special needs and their families."
  link="/case-study/yipabk"
  link-text="View Case Study"
/>

  <CaseStudyCard
    image="/house.png"
    title="Designing Brand, Web, CMS and Booking form for Luminous OT"
    description="Shaping a distinctive brand identity in a competitive healthcare space whilst working on Web design, CMS and booking form."
    link="/services"
    link-text="View Case Study"
  />
</div>
        
    </div>
  </section>

<div class="mt-14 mb-20 flex justify-center md:mt-16 md:mb-24">  <button
    type="button"
    @click="scrollToNext"
    class="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
  >
    <span>Scroll</span>
    <span class="text-xl">↓</span>
  </button>
</div>

<section class="relative overflow-hidden">
  <!-- ONE shared background image -->
    <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/house.png');"
  ></div>

  <div class="absolute inset-0 bg-black/25"></div>

  <!-- SECTION 1: immediately visible top half + text -->
   <div class="relative z-10">
  <div class="mx-auto grid min-h-[78vh] max-w-7xl items-center px-6 pt-10 md:px-10 md:pt-14 lg:grid-cols-2 lg:px-16">
    <div></div>

    <div class="max-w-xl">
      <p class="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">
        Strategy + Design
      </p>

      <h2 class="text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
        Building digital experiences that feel clear, modern, and easy to use.
      </h2>

      <p class="mt-8 text-lg leading-relaxed text-white/80 md:text-xl">
        We’ve built digital experiences for established organisations, startups, and everything
        in between. The focus stays the same: systems that scale, solving the communication
        problems that actually matter, and keeping people first throughout the entire process.
      </p>
    </div>
  </div>

  <!-- extra image-only space before blur starts -->
  <div class="h-32 md:h-48 lg:h-72"></div>
</div>


  <!-- SECTION 2: same image continues, blur increases smoothly -->
    <div id="next-section" class="relative z-10 overflow-hidden">
  
  <!-- soft dark gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/55"></div>

    <!-- blur overlay -->

    <div class="absolute inset-0 backdrop-blur-[2px]"></div>
    <!-- extra top fade so blur doesn't feel sudden -->
<div class="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>

      <div class="relative mx-auto max-w-7xl px-6 pt-40 pb-16 md:px-10 md:pt-52 md:pb-20 lg:px-16 lg:pt-64 lg:pb-24">      
        <div
  ref="secondTextRef"
  class="mx-auto max-w-3xl text-center opacity-0 translate-y-10"
>
  <p class="text-lg leading-relaxed text-white/85 md:text-2xl md:leading-relaxed">
    We design digital experiences that work for the people using them and the teams
    maintaining them. Start with what users actually need, map flows, test early, build
    interfaces that don't need manuals.
  </p>

  <p class="mt-10 text-lg leading-relaxed text-white/85 md:mt-14 md:text-2xl md:leading-relaxed">
    The work spans UX, interaction design, information architecture, and brand
    evolution. Design for real conditions. Messy ones. If users get lost or the client can't
    update content without breaking something, that's a problem. Good design holds up
    when things get complicated.
  </p>
</div>

      <section class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <div class="rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm">
    <h3 class="text-3xl font-bold">50+</h3>
    <p class="mt-2 text-white/75">Mock projects explored</p>
  </div>

  <div class="rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm">
    <h3 class="text-3xl font-bold">20+</h3>
    <p class="mt-2 text-white/75">Landing page concepts</p>
  </div>

  <div class="rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm">
    <h3 class="text-3xl font-bold">100%</h3>
    <p class="mt-2 text-white/75">Responsive-first layouts</p>
  </div>

  <div class="rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm">
    <h3 class="text-3xl font-bold">24/7</h3>
    <p class="mt-2 text-white/75">Modern business presence</p>
  </div>
</section>
    </div>
  </div>
</section>


      <!-- Rest of page -->
        <div class="px-5 py-12 md:px-10 md:py-20 lg:px-16 lg:py-24">


    <!-- Why Choose Us, and is a parent section and the grid-cols-2 allows it to be next to each other-->
    <section class="mb-20 grid gap-8 md:grid-cols-2 md:items-start">

</section>

        <!-- Testimonials -->
        <section class="mb-24 overflow-hidden">
  <div class="mb-8">
    <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Testimonials</p>
    <h2 class="text-3xl font-bold md:text-4xl">What clients say</h2>
  </div>

  <div class="relative">
    <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent"></div>

    <div class="testimonial-track flex w-max gap-6">
      <template v-for="(testimonial, index) in testimonials" :key="`first-${index}`">
        <TestimonialCard
          :image="testimonial.image"
          :quote="testimonial.quote"
          :name="testimonial.name"
          :role="testimonial.role"
          :large="testimonial.large"
        />
      </template>

      <template v-for="(testimonial, index) in testimonials" :key="`second-${index}`">
        <TestimonialCard
          :image="testimonial.image"
          :quote="testimonial.quote"
          :name="testimonial.name"
          :role="testimonial.role"
          :large="testimonial.large"
        />
      </template>
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

    <section class="overflow-hidden border-t border-white/10 py-12">
  <div class="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
    <p class="mb-8 text-sm font-medium text-white/80">
      Our Team’s Previous Experiences:
    </p>

    <div class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black to-transparent"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black to-transparent"></div>

      <div class="logo-marquee flex w-max items-center gap-16">
        <div class="flex items-center gap-16">
          <img src="/bentara_campus.webp" alt="Bentara Campus" class="h-16 w-auto object-contain opacity-90" />
          <img src="/creative_gourmet.webp" alt="Creative Gourmet" class="h-16 w-auto object-contain opacity-90" />
          <img src="/ey.webp" alt="EY" class="h-16 w-auto object-contain opacity-90" />
          <img src="/farmers_hub.webp" alt="Farmers Hub" class="h-16 w-auto object-contain opacity-90" />
          <img src="/fenix.webp" alt="Fenix" class="h-16 w-auto object-contain opacity-90" />
          <img src="/kincrome.webp" alt="Kincrome" class="h-16 w-auto object-contain opacity-90" />
          <img src="/lactalis.webp" alt="Lactalis" class="h-16 w-auto object-contain opacity-90" />
          <img src="/luminous.webp" alt="Luminous" class="h-16 w-auto object-contain opacity-90" />
          <img src="/navanti.webp" alt="Navanti" class="h-16 w-auto object-contain opacity-90" />
          <img src="/no_moss.webp" alt="No Moss" class="h-16 w-auto object-contain opacity-90" />
          <img src="/planet_innovation.webp" alt="Planet Innovation" class="h-16 w-auto object-contain opacity-90" />
        </div>

        <div class="flex items-center gap-16" aria-hidden="true">
          <img src="/bentara_campus.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/creative_gourmet.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/ey.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/farmers_hub.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/fenix.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/kincrome.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/lactalis.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/luminous.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/navanti.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/no_moss.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
          <img src="/planet_innovation.webp" alt="" class="h-16 w-auto object-contain opacity-90" />
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tagRef = ref(null)
const titleRef = ref(null)
const textRef = ref(null)
const buttonRef = ref(null)
const cardRef = ref(null)
const secondTextRef = ref(null)

const scrollToNext = () => {
  const nextSection = document.getElementById('next-section')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const testimonials = [
  {
    image: '/house.png',
    quote: 'The layout felt clean and modern, and it presented our business much more clearly.',
    name: 'Sarah Lim',
    role: 'Small Business Owner',
    large: false
  },
  {
    image: '/house.png',
    quote: 'Simple, polished, and easy to navigate. It looked much more professional than before.',
    name: 'Daniel Wong',
    role: 'Startup Founder',
    large: true
  },
  {
    image: '/house.png',
    quote: 'The structure was very easy to understand, and the design felt neat on every screen.',
    name: 'Chloe Nguyen',
    role: 'Marketing Coordinator',
    large: false
  }
]

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

  if (secondTextRef.value) {
    gsap.to(secondTextRef.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: secondTextRef.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  }
})
</script>