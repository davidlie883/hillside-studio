<template>
  <div class="min-h-screen bg-[#f3f3f3] text-black">
    <!-- Header -->
    <header class="px-6 pt-5">
      <div class="mx-auto flex max-w-7xl items-center justify-between border-b border-black/10 pb-4">
        <div class="flex items-center gap-10">
          <NuxtLink to="/">
            <img
              src="/hillside_black.webp"
              alt="Hillside Studios"
              class="h-10 w-auto object-contain md:h-12"
            />
          </NuxtLink>

          <nav class="hidden items-center md:flex">
            <NuxtLink
              to="/"
              class="px-5 text-base font-medium text-black/70 transition hover:text-black"
            >
              Work
            </NuxtLink>

            <NuxtLink
              to="/services"
              class="px-5 text-base font-medium text-black/70 transition hover:text-black"
            >
              Approach
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="rounded-full border border-black/20 bg-black/5 px-5 py-3 text-sm font-medium text-black transition hover:bg-black/10"
            >
              Contact
            </NuxtLink>
          </nav>
        </div>

        <NuxtLink
          to="/"
          class="rounded-full border border-black/20 bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/85"
        >
          ← Back to Home
        </NuxtLink>
      </div>
    </header>

    <!-- Case study hero -->
    <section class="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14 lg:px-16">
      <div class="mb-8 flex items-start justify-between">
        <p class="text-sm text-black/70 md:text-base">©2025</p>
      </div>

      <div class="mb-8 max-w-5xl">
        <p
          ref="labelRef"
          class="mb-2 text-2xl font-light tracking-tight text-black/30 md:text-4xl"
        >
          YIPABK
        </p>

        <h1
          ref="titleRef"
          class="text-4xl font-medium leading-tight tracking-tight text-black md:text-6xl"
        >
          Elevating Web and Automation System for YIPABK
        </h1>

        <p
          ref="textRef"
          class="mt-6 max-w-3xl text-lg leading-relaxed text-black/70 md:text-xl"
        >
          an Indonesian non-profit advancing inclusive education and support systems
          for children with special needs and their families.
        </p>
      </div>

      <div
        ref="imageRef"
        class="overflow-hidden rounded-[2rem] bg-black"
      >
        <img
          src="/house.png"
          alt="YIPABK case study preview"
          class="h-[420px] w-full object-cover md:h-[560px]"
        />
      </div>
    </section>
  </div>
  <section
  ref="aboutSectionRef"
  class="mx-auto max-w-7xl px-6 pb-20 pt-16 opacity-0 translate-y-8 md:px-10 md:pb-28 md:pt-24 lg:px-16"
>
  <div class="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-[0.8fr_1.6fr] md:gap-16">
    <div>
      <p class="text-3xl font-medium tracking-tight text-black md:text-5xl">
        About
      </p>
    </div>

    <div class="max-w-4xl">
      <p class="text-2xl leading-[1.35] tracking-tight text-black md:text-4xl">
        YIPABK (Yayasan Indonesia Peduli Anak Berkebutuhan Khusus) is an Indonesian
        non-profit foundation supporting children with special needs and their families
        through advocacy, inclusive education, and community empowerment.
      </p>

      <div class="mt-10 space-y-8 text-base leading-relaxed text-black/70 md:text-lg">
        <p>
          Established in 2012 by a group of educators, YIPABK is dedicated to creating
          an Indonesia where all children can grow happily with equal access to education.
          Guided by the values of Respect, Integrity, Compassion, and Humility (RICH),
          the organisation focuses on inclusive learning and supportive environments for
          children with diverse needs.
        </p>

        <p>
          Through its three core programmes — LIFE (Learning Intervention Family Equip),
          RAISE (Resource Awareness Inspiration Stories Education), and TEACH
          (Train Educate Accommodate Collaborate Help) — YIPABK provides direct
          intervention, family empowerment, teacher training, and public awareness initiatives.
        </p>

        <p>
          Our work focused on elevating YIPABK’s digital presence through a more unified
          and thoughtful design approach. We reimagined their website and supported the
          automation of internal systems such as finance, data management, and timesheeting,
          helping the organisation better serve both internal and external stakeholders.
        </p>
      </div>
    </div>
  </div>
</section>

<section
  ref="previewSectionRef"
  class="mx-auto max-w-7xl px-6 pb-20 opacity-0 translate-y-8 md:px-10 md:pb-28 lg:px-16"
>
  <div class="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
    <img
      src="/house.png"
      alt="YIPABK website preview"
      class="h-[320px] w-full object-cover md:h-[520px]"
    />
  </div>
</section>


</template>


<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const imageRef = ref(null)
const labelRef = ref(null)
const titleRef = ref(null)
const textRef = ref(null)
const aboutSectionRef = ref(null)
const previewSectionRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  tl.from(imageRef.value, {
    y: 40,
    opacity: 0,
    scale: 0.96,
    duration: 1,
    ease: 'power3.out'
  })
    .from(labelRef.value, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    })
    .from(titleRef.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.2')
    .from(textRef.value, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out'
    }, '-=0.35')

  if (aboutSectionRef.value) {
    gsap.fromTo(
      aboutSectionRef.value,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutSectionRef.value,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    )
  }

  if (previewSectionRef.value) {
    gsap.fromTo(
      previewSectionRef.value,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: previewSectionRef.value,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    )
  }
})
</script>