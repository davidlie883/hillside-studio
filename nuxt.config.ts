import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        '@nuxt/ui',
        '@nuxt/fonts',
        '@nuxtjs/seo',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        'nuxt-schema-org',
    ],
    css: ['~/assets/css/main.css'],
    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.hillsidestudio.com.au',
        name: 'Hillside Studio',
    },
    fonts: {
        families: [
            {
                name: 'Inter',
                provider: 'google',
            },
        ],
    },
    image: {
        format: ['webp', 'avif'],
        quality: 80,
        screens: {
            xs: 430,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
        densities: [1, 2],
        presets: {
            hero: {
                modifiers: { format: 'webp', quality: 85, width: 1441, height: 810 },
            },
            thumbnail: {
                modifiers: { format: 'webp', quality: 80, width: 400, height: 300 },
            },
        },
    },
    vite: {
        plugins: [tailwindcss()],
        css: {
            devSourcemap: false,
        },
        build: {
            cssMinify: 'lightningcss',
        },
    },
    ui: {
        prefix: 'U',
        theme: {
            colors: [
                'primary',
                'secondary',
                'tertiary',
                'success',
                'info',
                'warning',
                'error',
                'neutral',
                'black',
                'white',
            ],
        },
    },
    nitro: {
        compressPublicAssets: {
            gzip: true,
            brotli: true,
        },
        minify: true,
    },
    experimental: {
        payloadExtraction: false,
    },
})
