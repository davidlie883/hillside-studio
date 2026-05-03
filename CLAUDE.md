# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Commands

```bash
npm install          # Install dependencies (run once after cloning)
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build
npm run format       # Format code with Prettier
```

No test suite configured. Nuxt DevTools available in browser via `Shift + Option + D`.

## Stack

**Nuxt 4** marketing website for Hillside Studio. Core modules:

| Module | Purpose |
|---|---|
| `@nuxt/ui` | UI components (prefix `U`, e.g. `<UButton>`, `<UDrawer>`) |
| `@nuxt/fonts` | Web font loading (Inter via Google Fonts) |
| `@nuxt/image` | Optimised image component `<NuxtImg>` |
| `gsap` | Animations — ScrollSmoother, ScrollTrigger, ScrollToPlugin |
| `@nuxtjs/seo` | SEO meta, Open Graph, canonical links |
| `@nuxtjs/sitemap` | Auto-generated sitemap |
| `@nuxtjs/robots` | robots.txt |
| `nuxt-schema-org` | Schema.org structured data |
| `tailwindcss` v4 | Utility CSS via `@tailwindcss/vite` Vite plugin |

## Architecture

### Layout & Scroll

`layouts/default.vue` wraps all content in GSAP **ScrollSmoother**. Required DOM structure:

```
<Header />                    ← fixed, z-index 1000, outside wrapper
#smooth-wrapper
  #smooth-content
    <slot />                  ← page content
    <Footer />
```

Do not create additional ScrollSmoother instances — the singleton lives in `composables/useSmoothScroll.ts`.

### Composables

- `useSmoothScroll` — `scrollToSection(id)`, `scrollToSectionOnPage(id, '/page')`, `initScrollSmoother()`, `killSmoother()`
- `useParallax` — `createParallaxEffect(el, opts)`, `createScaleParallax(el, opts)`, always cleans up on unmount

### Plugin

GSAP is provided globally via `plugins/gsap.client.ts` as `$gsap`, `$ScrollTrigger`, `$ScrollSmoother`.

**GSAP pattern in pages** (inside `onMounted` only — plugin is client-side):

```js
onMounted(() => {
    const { $gsap } = useNuxtApp()
    $gsap.from('.some-class', {
        opacity: 0, y: 30, duration: 0.8,
        scrollTrigger: { trigger: '.some-class', start: 'top 80%' }
    })
})
```

Do NOT import gsap directly in pages — use `$gsap` from `useNuxtApp()`.

### Pages

- `pages/index.vue` — Homepage: hero, case study cards, stats, testimonials carousel, FAQ, CTA, logo marquee
- `pages/services.vue` — Services: hero with background image, core services, process, packages, deliverables
- `pages/contact.vue` — Contact: form, contact details, GSAP entry animations
- `pages/case-study/yipabk.vue` — Case study: hero, overview, horizontal scroll carousel, build section

All pages begin with `pt-24 md:pt-28` (or equivalent) on the first section to clear the fixed 80px header.

### Components

- `components/Header.vue` — Fixed black nav bar, Hillside logo, desktop nav + mobile `UDrawer`
- `components/Footer.vue` — Black footer with logo, copyright, email, nav links
- `components/CaseStudyCard.vue` — Props: `image`, `title`, `description`, `link`, `linkText`
- `components/StatCard.vue` — Props: `value`, `label`
- `components/TestimonialCard.vue` — Props: `image`, `quote`, `name`, `role`

Components are auto-imported by Nuxt — no manual imports needed.

### Styling

Tailwind CSS 4 with custom theme tokens in `assets/css/main.css` under `@theme static`:

- **primary** — slate (neutral dark grey)
- **secondary** — gray
- **tertiary** — white
- Custom breakpoint `xs: 430px`
- Custom text sizes: `text-2xs`, `text-3xs`, `text-4xs`

Custom CSS classes preserved: `.logo-marquee`, `.testimonial-track`, `.no-scrollbar`

### Server

`server/api/contact.post.ts` — stub endpoint, returns `{ success: true }`. Wire up email sending (nuxt-resend, nodemailer, etc.) inside that file.

## Environment Variables

```env
NUXT_PUBLIC_SITE_URL=https://www.hillsidestudio.com.au   # Used by sitemap/canonicals
# RESEND_API_KEY=re_...                                   # Optional — for contact form email
```

## Static Assets

All images live in `public/`. Reference with root-relative paths (`/hillside_white.webp`).

- `hillside_white.webp` — logo for dark backgrounds (used in Header + Footer)
- `hillside_black.webp` — logo for light backgrounds (used in mobile drawer)
- Client logos: `bentara_campus.webp`, `creative_gourmet.webp`, `ey.webp`, etc.
