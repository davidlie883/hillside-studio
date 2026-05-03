<script setup lang="ts">
    const isMobileMenuOpen = ref(false)

    const navItems = [
        { label: 'Work', to: '/' },
        { label: 'Approach', to: '/services' },
        { label: 'Contact', to: '/contact' },
    ]

    const closeMobileMenu = () => {
        isMobileMenuOpen.value = false
    }
</script>

<template>
    <div
        class="flex h-20 w-full items-center justify-between bg-black px-6 xs:px-8 lg:px-10 xl:px-14 2xl:px-16"
    >
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
            <img
                src="/hillside_white.webp"
                alt="Hillside Studio"
                class="h-10 w-auto object-contain md:h-12"
            />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-2 md:flex">
            <NuxtLink
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                class="px-5 text-base font-medium text-white/70 transition hover:text-white"
            >
                {{ item.label }}
            </NuxtLink>
            <NuxtLink
                to="/contact"
                class="ml-2 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
                Let's Work Together
            </NuxtLink>
        </nav>

        <!-- Mobile Hamburger -->
        <button
            class="flex items-center gap-1.5 rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 md:hidden"
            @click="isMobileMenuOpen = true"
        >
            <span>Menu</span>
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>

        <!-- Mobile Drawer -->
        <UDrawer
            v-model:open="isMobileMenuOpen"
            direction="top"
            :handle="false"
            :ui="{
                header: 'flex items-center justify-between border-b border-gray-200 px-6 py-4',
                body: 'flex flex-1 flex-col px-6 py-8',
                content: 'flex flex-col bg-white',
            }"
            class="md:hidden"
        >
            <template #header>
                <img
                    src="/hillside_black.webp"
                    alt="Hillside Studio"
                    class="h-10 w-auto object-contain"
                />
                <button
                    class="rounded-full border border-gray-200 p-2 text-black transition hover:bg-gray-100"
                    @click="isMobileMenuOpen = false"
                >
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </template>

            <template #body>
                <nav class="flex flex-1 flex-col justify-between gap-8">
                    <div class="flex flex-col gap-2">
                        <NuxtLink
                            v-for="item in navItems"
                            :key="item.to"
                            :to="item.to"
                            class="py-3 text-4xl font-light uppercase text-black transition hover:text-gray-500"
                            @click="closeMobileMenu"
                        >
                            {{ item.label }}
                        </NuxtLink>
                    </div>
                    <NuxtLink
                        to="/contact"
                        class="block rounded-full bg-black px-6 py-4 text-center text-lg font-medium text-white transition hover:bg-black/80"
                        @click="closeMobileMenu"
                    >
                        Let's Work Together
                    </NuxtLink>
                </nav>
            </template>
        </UDrawer>
    </div>
</template>
