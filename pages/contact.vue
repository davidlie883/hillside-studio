<template>
  <div
    class="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 md:px-12 lg:px-20"
  >
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 max-w-3xl">
        <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
          Contact
        </p>
        <h1 class="mb-4 text-4xl font-bold md:text-5xl">
          Let’s talk about your website
        </h1>
        <p class="text-lg leading-relaxed text-gray-600">
          Have a project in mind or just want to ask a few questions? Fill in
          the form below and we’ll get back to you soon.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <!-- Contains both the boxes, the grid-->
        <div class="rounded-3xl bg-white p-8 shadow-sm">
          <h2 class="mb-8 text-2xl font-semibold">Get in touch</h2>

          <div class="space-y-6">
            <div>
              <p class="mb-1 text-sm uppercase tracking-wide text-gray-500">
                Email
              </p>
              <p class="text-lg font-medium">hello@hillsidestudio.com</p>
            </div>

            <div>
              <p class="mb-1 text-sm uppercase tracking-wide text-gray-500">
                Phone
              </p>
              <p class="text-lg font-medium">+61 400 123 456</p>
            </div>

            <div>
              <p class="mb-1 text-sm uppercase tracking-wide text-gray-500">
                Location
              </p>
              <p class="text-lg font-medium">Melbourne, Australia</p>
            </div>
          </div>

          <div class="mt-8 rounded-2xl bg-gray-100 p-5">
            <h3 class="mb-2 text-lg font-semibold">Why contact us?</h3>
            <p class="leading-relaxed text-gray-600">
              We help with clean website layouts, service pages, landing pages,
              and simple business-focused designs.
            </p>
          </div>
        </div>

        <div class="rounded-3xl bg-white p-8 shadow-sm">
          <h2 class="mb-8 text-2xl font-semibold">Send a message</h2>

          <form class="space-y-6">
            <div>
              <label
                for="name"
                class="mb-2 block text-sm font-medium text-gray-700"
                >Full Name</label
              >
              <input
                id="name"
                type="text"
                placeholder="Your name"
                class="w-full rounded-2xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-700"
                >Email</label
              >
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-2xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label
                for="subject"
                class="mb-2 block text-sm font-medium text-gray-700"
                >Subject</label
              >
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                class="w-full rounded-2xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label
                for="message"
                class="mb-2 block text-sm font-medium text-gray-700"
                >Message</label
              >
              <textarea
                id="message"
                rows="6"
                placeholder="Tell us a little about your project"
                class="w-full rounded-2xl border border-gray-300 px-4 py-3"
              ></textarea>
            </div>

            <button
              type="submit"
              class="rounded-full bg-black px-6 py-3 text-white"
            >
              Send Message
            </button>
          </form>

          <NuxtLink
            to="/"
            class="mt-6 inline-block text-sm text-gray-500 hover:text-black"
          >
            ← Back Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
