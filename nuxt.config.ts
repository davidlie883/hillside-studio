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
            '@nuxt/ui',

    ],
    css: ['~/assets/css/main.css'],
    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.hillsidestudio.com.au',
        name: 'Hillside Studio',
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
        compressPublicAssets: false,
        minify: false,
        experimental: {
            asyncContext: true,
        },
    },
    experimental: {
        payloadExtraction: false,
    },
})