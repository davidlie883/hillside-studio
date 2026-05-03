<template>
    <footer class="bg-black px-6 py-8 text-white xs:px-8 lg:px-10 xl:px-14 2xl:px-16">
        <div class="flex flex-row items-center justify-between gap-4">
            <!-- Left: logo + copyright -->
            <div class="flex flex-col gap-1.5">
                <img
                    src="/hillside_white.webp"
                    alt="Hillside Studio"
                    class="h-8 w-auto object-contain sm:h-10"
                />
                <p class="text-3xs font-light text-white/60 sm:text-xs">
                    © {{ new Date().getFullYear() }} Hillside Studio. All rights reserved.
                </p>
            </div>

            <!-- Right: email + nav links -->
            <div class="flex flex-col items-end gap-1.5">
                <a
                    href="mailto:hillsideconsultancy@gmail.com"
                    class="text-sm font-medium text-white transition hover:text-white/70 sm:text-base"
                >
                    hillsideconsultancy@gmail.com
                </a>
                <div class="flex items-center gap-2 text-white/60">
                    <NuxtLink to="/" class="text-3xs transition hover:text-white sm:text-xs">
                        Work
                    </NuxtLink>
                    <span class="text-3xs sm:text-xs">·</span>
                    <NuxtLink
                        to="/services"
                        class="text-3xs transition hover:text-white sm:text-xs"
                    >
                        Approach
                    </NuxtLink>
                    <span class="text-3xs sm:text-xs">·</span>
                    <NuxtLink to="/contact" class="text-3xs transition hover:text-white sm:text-xs">
                        Contact
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup></script>
