<template>
    <div class="min-h-screen bg-gray-50 text-gray-900">
        <!-- this allows the image to be cropped-->
        <section class="relative overflow-hidden">
            <div
                class="absolute inset-0 bg-cover bg-center"
                style="background-image: url('/house.png')"
            ></div>
            <div class="absolute inset-0 bg-black/45"></div>

            <div ref="heroRef" class="relative z-10 px-8 pb-20 pt-32 md:px-16 md:pb-24 md:pt-40">
                <div class="max-w-4xl">
                    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                        Our Services
                    </p>
                    <h1 class="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                        Practical website solutions for modern businesses
                    </h1>
                    <p class="max-w-2xl text-lg text-white/80">
                        We design websites that are clean, structured, and easy to use — with a
                        focus on strong presentation, responsive layouts, and clear communication.
                    </p>
                </div>
            </div>
        </section>

        <main class="px-8 py-16 md:px-16">
            <!-- Main Services -->
            <section class="animate-section mb-20">
                <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">What we do</p>
                <h2 class="mb-8 text-3xl font-bold">Core Services</h2>

                <div class="grid gap-6 md:grid-cols-3">
                    <div class="animate-card rounded-2xl bg-white p-6 shadow-sm">
                        <h3 class="mb-3 text-xl font-semibold">Website Design</h3>
                        <p class="text-gray-600">
                            Clean and modern layouts designed to make information easy to read and
                            navigate.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-white p-6 shadow-sm">
                        <h3 class="mb-3 text-xl font-semibold">Landing Pages</h3>
                        <p class="text-gray-600">
                            Focused pages that highlight your service clearly and guide visitors
                            toward action.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-white p-6 shadow-sm">
                        <h3 class="mb-3 text-xl font-semibold">Responsive Layouts</h3>
                        <p class="text-gray-600">
                            Designs that remain polished and readable across desktop, tablet, and
                            mobile.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Process -->
            <section class="animate-section mb-20">
                <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Our process</p>
                <h2 class="mb-8 text-3xl font-bold">How we work</h2>

                <!-- This allows it to be next to each other-->
                <div class="grid gap-6 md:grid-cols-4">
                    <div class="rounded-2xl bg-white p-6 shadow-sm">
                        <p class="mb-3 text-sm font-semibold text-gray-500">01</p>
                        <h3 class="mb-2 text-lg font-semibold">Discover</h3>
                        <p class="text-sm text-gray-600">
                            We learn about your business, goals, and the type of presence you want
                            online.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-white p-6 shadow-sm">
                        <p class="mb-3 text-sm font-semibold text-gray-500">02</p>
                        <h3 class="mb-2 text-lg font-semibold">Plan</h3>
                        <p class="text-sm text-gray-600">
                            We organise the page structure, sections, and content direction before
                            design begins.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-white p-6 shadow-sm">
                        <p class="mb-3 text-sm font-semibold text-gray-500">03</p>
                        <h3 class="mb-2 text-lg font-semibold">Design</h3>
                        <p class="text-sm text-gray-600">
                            We create a polished layout with clear spacing, hierarchy, and visual
                            consistency.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-white p-6 shadow-sm">
                        <p class="mb-3 text-sm font-semibold text-gray-500">04</p>
                        <h3 class="mb-2 text-lg font-semibold">Refine</h3>
                        <p class="text-sm text-gray-600">
                            We adjust and improve the design so the final result feels clear and
                            professional.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Packages -->
            <section class="animate-section mb-20">
                <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Service options</p>
                <h2 class="mb-8 text-3xl font-bold">Simple packages</h2>

                <div class="grid gap-6 md:grid-cols-3">
                    <div class="rounded-3xl bg-white p-8 shadow-sm">
                        <h3 class="mb-2 text-2xl font-bold">Starter</h3>
                        <p class="mb-6 text-gray-600">
                            A simple setup for small businesses needing a clean online presence.
                        </p>
                        <ul class="space-y-3 text-sm text-gray-600">
                            <li>Single landing page</li>
                            <li>Responsive design</li>
                            <li>Clean call-to-action section</li>
                        </ul>
                    </div>

                    <div class="animate-card rounded-3xl bg-black p-8 text-white shadow-sm">
                        <h3 class="mb-2 text-2xl font-bold">Business</h3>
                        <p class="mb-6 text-white/70">
                            A more complete website structure for growing businesses.
                        </p>
                        <ul class="space-y-3 text-sm text-white/80">
                            <li>Multiple core pages</li>
                            <li>Service presentation sections</li>
                            <li>Responsive layout and polished styling</li>
                        </ul>
                    </div>

                    <div class="rounded-3xl bg-white p-8 shadow-sm">
                        <h3 class="mb-2 text-2xl font-bold">Custom</h3>
                        <p class="mb-6 text-gray-600">
                            For businesses that need more tailored structure and presentation.
                        </p>
                        <ul class="space-y-3 text-sm text-gray-600">
                            <li>Flexible page structure</li>
                            <li>Brand-focused visual direction</li>
                            <li>Custom content sections</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Deliverables -->
            <section class="animate-section mb-20 grid gap-8 md:grid-cols-2">
                <div>
                    <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Included</p>
                    <h2 class="mb-5 text-3xl font-bold">What you receive</h2>
                    <p class="max-w-xl text-gray-600">
                        Every project is designed to give your business a stronger online presence
                        with a clean, practical, and modern layout.
                    </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                    <div class="rounded-2xl bg-white p-5 shadow-sm">
                        <h3 class="mb-2 font-semibold">Clear page structure</h3>
                        <p class="text-sm text-gray-600">
                            Sections organised for readability and flow.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-white p-5 shadow-sm">
                        <h3 class="mb-2 font-semibold">Responsive layout</h3>
                        <p class="text-sm text-gray-600">
                            A design that works neatly across devices.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-white p-5 shadow-sm">
                        <h3 class="mb-2 font-semibold">Modern presentation</h3>
                        <p class="text-sm text-gray-600">
                            A polished style that feels professional.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-white p-5 shadow-sm">
                        <h3 class="mb-2 font-semibold">Usable navigation</h3>
                        <p class="text-sm text-gray-600">
                            Simple movement across pages and sections.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Final CTA -->
            <section class="animate-section rounded-3xl bg-black px-8 py-12 text-white">
                <p class="mb-3 text-sm uppercase tracking-[0.2em] text-gray-300">
                    Start your project
                </p>
                <h2 class="mb-4 text-3xl font-bold">
                    Need a website that feels clear and professional?
                </h2>
                <p class="mb-6 max-w-2xl text-gray-300">
                    Let's create a service-based website that is modern, easy to navigate, and
                    visually strong.
                </p>

                <div class="flex flex-wrap gap-4">
                    <NuxtLink
                        to="/contact"
                        class="rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90"
                    >
                        Contact Us
                    </NuxtLink>

                    <NuxtLink
                        to="/"
                        class="rounded-full border border-white/30 px-6 py-3 text-white transition hover:bg-white hover:text-black"
                    >
                        Back Home
                    </NuxtLink>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
const heroRef = ref(null)

onMounted(() => {
    const { $gsap } = useNuxtApp()

    $gsap.from(heroRef.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    })

    $gsap.utils.toArray('.animate-section').forEach((section) => {
        $gsap.from(section, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        })
    })

    $gsap.utils.toArray('.animate-card').forEach((card) => {
        $gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        })
    })
})
</script>
