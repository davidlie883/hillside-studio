<template>
  <div
    class="min-h-screen bg-gray-50 px-6 pt-24 pb-16 text-gray-900 md:px-12 lg:px-20"
  >
    <div class="mx-auto max-w-6xl">
      <div ref="heroRef" class="mb-14 max-w-3xl">
        <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
          Contact
        </p>
        <h1 class="mb-4 text-4xl font-bold md:text-5xl">
          Let's talk about your website
        </h1>
        <p class="text-lg leading-relaxed text-gray-600">
          Have a project in mind or just want to ask a few questions? Fill in
          the form below and we'll get back to you soon.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <!-- Contact information box -->
        <div ref="infoCardRef" class="rounded-3xl bg-white p-8 shadow-sm">
          <h2 class="mb-8 text-2xl font-semibold">Get in touch</h2>

          <div class="space-y-6">
            <div class="contact-detail">
              <p class="mb-1 text-sm uppercase tracking-wide text-gray-500">
                Email
              </p>
              <p class="text-lg font-medium">hillsideconsultancy@gmail.com</p>
            </div>

            <div class="contact-detail">
              <p class="mb-1 text-sm uppercase tracking-wide text-gray-500">
                Phone
              </p>
              <p class="text-lg font-medium">+61 400 123 456</p>
            </div>

            <div class="contact-detail">
              <p class="mb-1 text-sm uppercase tracking-wide text-gray-500">
                Location
              </p>
              <p class="text-lg font-medium">Melbourne, Australia</p>
            </div>
          </div>

          <div class="contact-detail mt-8 rounded-2xl bg-gray-100 p-5">
            <h3 class="mb-2 text-lg font-semibold">Why contact us?</h3>
            <p class="leading-relaxed text-gray-600">
              We help with clean website layouts, service pages, landing pages,
              and simple business-focused designs.
            </p>
          </div>
        </div>

        <!-- Contact form box -->
        <div ref="formCardRef" class="rounded-3xl bg-white p-8 shadow-sm">
          <h2 class="mb-8 text-2xl font-semibold">Send a message</h2>

          <form class="space-y-6">
            <div class="form-field">
              <label
                for="name"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                class="w-full rounded-2xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div class="form-field">
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-2xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div class="form-field">
              <label
                for="subject"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                class="w-full rounded-2xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div class="form-field">
              <label
                for="message"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us a little about your project"
                class="w-full rounded-2xl border border-gray-300 px-4 py-3"
              ></textarea>
            </div>

            <!-- Submit button -->
            <div class="pt-2">
              <button
                type="submit"
                class="block w-full rounded-full bg-black px-6 py-4 text-center font-medium text-white transition hover:bg-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Bottom buttons -->
      <div
        ref="bottomButtonsRef"
        class="mt-10 flex flex-wrap items-center gap-4"
      >
        <NuxtLink
          to="/"
          class="rounded-full border border-gray-300 px-6 py-3 text-gray-700 transition hover:border-black hover:bg-black hover:text-white"
        >
          Back Home
        </NuxtLink>

        <NuxtLink
          to="/services"
          class="rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          View Services
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const heroRef = ref(null)
const infoCardRef = ref(null)
const formCardRef = ref(null)
const bottomButtonsRef = ref(null)

onMounted(() => {
    const { $gsap } = useNuxtApp()

    const tl = $gsap.timeline()

    tl.from(heroRef.value, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
        .from(infoCardRef.value, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .from(formCardRef.value, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.contact-detail', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.form-field', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.5')
        .from(bottomButtonsRef.value, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.2')
})
</script>
