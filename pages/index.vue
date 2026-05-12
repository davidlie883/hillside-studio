<template>
    <div class="page-root">
 
        <!-- ── Hero ── -->
        <section class="hero-section">
            <div class="hero-glow"></div>
 
            <div class="hero-top">
                <p class="hero-eyebrow">Creative + Tech + Marketing</p>
            </div>
 
            <div class="hero-body">
                <!-- Left -->
                <div class="hero-headline-wrap">
                    <h1 ref="titleRef" class="hero-headline">
                        <span>Digital</span>
                        <span class="hero-headline--muted">Agency</span>
                    </h1>
 
                    <p ref="textRef" class="hero-sub">
                        At Hillside, we design and develop engaging websites and digital products
                        that elevate brands and deliver real results — backed by expert consulting
                        and strategic guidance.
                    </p>
 
                    <div class="hero-actions">
                        <NuxtLink to="/services" class="hero-btn hero-btn--primary">
                            View Our Work
                        </NuxtLink>
                        <NuxtLink to="/contact" class="hero-btn hero-btn--ghost">
                            Get in touch →
                        </NuxtLink>
                    </div>
                </div>
 
                <!-- Right — cards side by side -->
                <div ref="cardRef" class="hero-cards">
                    <CaseStudyCard
                        image="/house.png"
                        title="Elevating Web and Automation System for YIPABK"
                        description="Indonesian non-profit advancing inclusive education and support systems for children with special needs."
                        link="/case-study/yipabk"
                        link-text="View Case Study"
                        class="hero-card--raised"
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
 
            <!-- Scroll indicator -->
            <div class="hero-scroll">
                <button type="button" class="hero-scroll-btn" @click="scrollToNext">
                    <span class="hero-scroll-line"></span>
                    <span class="hero-scroll-label">Scroll</span>
                </button>
            </div>
        </section>
 
        <!-- ── Full-bleed image + text ── -->
        <section class="fullbleed-section">
            <div
                class="fullbleed-bg"
                style="background-image: url('/house.png'); background-size: cover; background-position: center 30%"
            ></div>
            <div class="fullbleed-overlay"></div>
 
            <div class="fullbleed-top">
                <div class="fullbleed-top-inner">
                    <div></div>
                    <div class="fullbleed-top-content">
                        <p class="fullbleed-eyebrow">Strategy + Design</p>
                        <h2 class="fullbleed-headline">
                            Building digital experiences that feel clear, modern, and easy to use.
                        </h2>
                        <p class="fullbleed-body">
                            We've built digital experiences for established organisations, startups,
                            and everything in between. Systems that scale, communication problems
                            that actually get solved, keeping people first throughout.
                        </p>
                    </div>
                </div>
            </div>
 
            <div id="next-section" class="fullbleed-bottom">
                <div class="fullbleed-blur"></div>
                <div class="fullbleed-bottom-inner">
                    <div ref="secondTextRef" class="fullbleed-prose">
                        <p class="fullbleed-prose-text">
                            We design digital experiences that work for the people using them and
                            the teams maintaining them. Start with what users actually need, map
                            flows, test early, build interfaces that don't need manuals.
                        </p>
                        <p class="fullbleed-prose-text">
                            The work spans UX, interaction design, information architecture, and
                            brand evolution. Design for real conditions. If users get lost or the
                            client can't update content without breaking something, that's a problem.
                        </p>
                    </div>
 
                    <div class="stats-grid">
                        <div class="stat-card">
                            <p class="stat-number">50+</p>
                            <p class="stat-label">Projects explored</p>
                        </div>
                        <div class="stat-card">
                            <p class="stat-number">20+</p>
                            <p class="stat-label">Landing page concepts</p>
                        </div>
                        <div class="stat-card">
                            <p class="stat-number">100%</p>
                            <p class="stat-label">Responsive-first layouts</p>
                        </div>
                        <div class="stat-card">
                            <p class="stat-number">24/7</p>
                            <p class="stat-label">Modern business presence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 
        <!-- ── Testimonials ── -->
        <section class="testimonials-section">
            <div class="testimonials-inner">
                <div class="testimonials-header">
                    <div>
                        <p class="section-eyebrow">Testimonials</p>
                        <h2 class="section-heading">What clients say</h2>
                    </div>
                    <div class="testimonials-nav">
                        <button
                            type="button"
                            class="t-nav-btn"
                            :disabled="currentTestimonialIndex === 0"
                            @click="prevTestimonial"
                        >←</button>
                        <button
                            type="button"
                            class="t-nav-btn"
                            :disabled="currentTestimonialIndex >= maxTestimonialIndex"
                            @click="nextTestimonial"
                        >→</button>
                    </div>
                </div>
 
                <div class="testimonials-track-wrap">
                    <div class="testimonials-fade testimonials-fade--left"></div>
                    <div class="testimonials-fade testimonials-fade--right"></div>
                    <div
                        class="testimonials-track"
                        :style="{ transform: `translateX(-${currentTestimonialIndex * 366}px)` }"
                    >
                        <TestimonialCard
                            v-for="(t, i) in testimonials"
                            :key="i"
                            :image="t.image"
                            :quote="t.quote"
                            :name="t.name"
                            :role="t.role"
                            :large="t.large"
                        />
                    </div>
                </div>
            </div>
        </section>
 
        <!-- ── CTA ── -->
        <section class="cta-section">
            <div class="cta-inner">
                <p class="cta-eyebrow">Let's build something</p>
                <h2 class="cta-heading">Ready to create a stronger online presence?</h2>
                <p class="cta-body">
                    A clean website can make a business feel more modern, trustworthy, and easy to understand.
                </p>
                <div class="cta-actions">
                    <NuxtLink to="/contact" class="cta-btn cta-btn--primary">Contact Us</NuxtLink>
                    <NuxtLink to="/services" class="cta-btn cta-btn--ghost">Explore Services</NuxtLink>
                </div>
            </div>
        </section>
 
        <!-- ── Logo marquee ── -->
        <section class="marquee-section">
            <div class="marquee-inner">
                <p class="marquee-label">Our Team's Previous Experiences</p>
                <div class="marquee-track-wrap">
                    <div class="marquee-fade marquee-fade--left"></div>
                    <div class="marquee-fade marquee-fade--right"></div>
                    <div class="logo-marquee">
                        <div class="marquee-set">
                            <img v-for="logo in logos" :key="logo.src" :src="logo.src" :alt="logo.alt" class="marquee-logo" />
                        </div>
                        <div class="marquee-set" aria-hidden="true">
                            <img v-for="logo in logos" :key="'b-' + logo.src" :src="logo.src" alt="" class="marquee-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
 
    </div>
</template>
 
<script setup>
const titleRef = ref(null)
const textRef = ref(null)
const cardRef = ref(null)
const secondTextRef = ref(null)
 
const { scrollToSection } = useSmoothScroll()
const scrollToNext = () => scrollToSection('next-section')
 
const testimonials = [
    { image: '/house.png', quote: 'The layout felt clean and modern, and it presented our business much more clearly.', name: 'Sarah Lim', role: 'Small Business Owner' },
    { image: '/house.png', quote: 'Simple, polished, and easy to navigate. It looked much more professional than before.', name: 'Daniel Wong', role: 'Startup Founder' },
    { image: '/house.png', quote: 'The structure was very easy to understand, and the design felt neat on every screen.', name: 'Chloe Nguyen', role: 'Marketing Coordinator' },
    { image: '/house.png', quote: 'The website feels much clearer now, and it is easier for visitors to understand what we do.', name: 'Jason Tan', role: 'Operations Lead' },
    { image: '/house.png', quote: 'The updated design made the business look more trustworthy and much more organised.', name: 'Melissa Hart', role: 'Project Manager' },
    { image: '/house.png', quote: 'It feels more premium, more intentional, and much easier to navigate than the previous version.', name: 'Andrew Lee', role: 'Business Director' },
    { image: '/house.png', quote: 'The structure and spacing made everything easier to read and more pleasant to use.', name: 'Natalie Chen', role: 'Communications Officer' },
    { image: '/house.png', quote: 'It now feels like a proper brand presence instead of just a basic website.', name: 'Kevin Ong', role: 'Founder' },
]
 
const currentTestimonialIndex = ref(0)
const maxTestimonialIndex = computed(() => Math.max(testimonials.length - 3, 0))
const nextTestimonial = () => { if (currentTestimonialIndex.value < maxTestimonialIndex.value) currentTestimonialIndex.value++ }
const prevTestimonial = () => { if (currentTestimonialIndex.value > 0) currentTestimonialIndex.value-- }
 
const logos = [
    { src: '/bentara_campus.webp', alt: 'Bentara Campus' },
    { src: '/creative_gourmet.webp', alt: 'Creative Gourmet' },
    { src: '/ey.webp', alt: 'EY' },
    { src: '/farmers_hub.webp', alt: 'Farmers Hub' },
    { src: '/fenix.webp', alt: 'Fenix' },
    { src: '/kincrome.webp', alt: 'Kincrome' },
    { src: '/lactalis.webp', alt: 'Lactalis' },
    { src: '/luminous.webp', alt: 'Luminous' },
    { src: '/navanti.webp', alt: 'Navanti' },
    { src: '/no_moss.webp', alt: 'No Moss' },
    { src: '/planet_innovation.webp', alt: 'Planet Innovation' },
]
 
onMounted(() => {
    const { $gsap } = useNuxtApp()
 
    $gsap.from(titleRef.value, { y: 48, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.1 })
    $gsap.from(textRef.value, { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.35 })
    $gsap.from(cardRef.value, { x: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 })
 
    if (secondTextRef.value) {
        $gsap.to(secondTextRef.value, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: secondTextRef.value,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        })
    }
})
</script>
 
<style scoped>
/* ── Root ── */
.page-root {
    background: #000;
    color: #fff;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
}
 
/* ── Hero ── */
.hero-section {
    position: relative;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    overflow: hidden;
}
 
.hero-glow {
    position: absolute;
    width: 900px;
    height: 900px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%);
    top: -300px;
    right: -200px;
    pointer-events: none;
}
 
.hero-top {
    padding-top: 140px;
    padding-bottom: 20px;
}
 
.hero-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
}
 
.hero-body {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    align-items: start;
    width: 100%;
    padding-top: 24px;
}
 
.hero-headline-wrap {
    padding-top: 16px;
    padding-right: 56px;
}
 
.hero-headline-wrap {
    padding-top: 16px;
}
 
.hero-headline {
    display: flex;
    flex-direction: column;
    font-size: clamp(64px, 10vw, 130px);
    font-weight: 300;
    line-height: 0.92;
    letter-spacing: -0.04em;
    color: #fff;
    margin-bottom: 40px;
}
 
.hero-headline--muted {
    color: rgba(255, 255, 255, 0.22);
}
 
.hero-sub {
    font-size: clamp(14px, 1.4vw, 17px);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    max-width: 400px;
    line-height: 1.72;
    margin-bottom: 36px;
    border-left: 1px solid rgba(255, 255, 255, 0.12);
    padding-left: 20px;
}
 
.hero-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
 
.hero-btn {
    display: inline-flex;
    align-items: center;
    padding: 11px 22px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    letter-spacing: -0.01em;
}
 
.hero-btn--primary {
    background: #fff;
    color: #000;
}
 
.hero-btn--primary:hover { background: rgba(255, 255, 255, 0.88); }
 
.hero-btn--ghost {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.12);
}
 
.hero-btn--ghost:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
}
 
.hero-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    align-items: stretch;
    padding-top: 40px;
    align-self: start;
    margin-right: -40px;
}
 
.hero-scroll {
    display: flex;
    justify-content: center;
    padding: 28px 0 32px;
}
 
.hero-scroll-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.25);
    transition: color 0.2s;
}
 
.hero-scroll-btn:hover { color: rgba(255, 255, 255, 0.5); }
 
.hero-scroll-line {
    width: 1px;
    height: 36px;
    background: currentColor;
    animation: scrollPulse 2s ease-in-out infinite;
}
 
.hero-scroll-label {
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}
 
@keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.3); }
}
 
/* ── Full-bleed ── */
.fullbleed-section {
    position: relative;
    overflow: hidden;
}
 
.fullbleed-bg {
    position: absolute;
    inset: 0;
}
 
.fullbleed-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
}
 
.fullbleed-top { position: relative; z-index: 1; }
 
.fullbleed-top-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 80vh;
    align-items: center;
    padding: 80px 40px;
    max-width: 1280px;
    margin: 0 auto;
}
 
.fullbleed-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    margin-bottom: 20px;
}
 
.fullbleed-headline {
    font-size: clamp(28px, 3.5vw, 48px);
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: #fff;
    margin-bottom: 24px;
}
 
.fullbleed-body {
    font-size: 16px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.72;
    max-width: 440px;
}
 
.fullbleed-bottom { position: relative; z-index: 1; }
 
.fullbleed-blur {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(4px);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.55));
}
 
.fullbleed-bottom-inner {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 40px 100px;
}
 
.fullbleed-prose {
    max-width: 680px;
    margin: 0 auto 64px;
    text-align: center;
    opacity: 0;
    transform: translateY(24px);
}
 
.fullbleed-prose-text {
    font-size: clamp(16px, 1.8vw, 20px);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.72;
    margin-bottom: 28px;
}
 
.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
}
 
.stat-card {
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 20px;
    padding: 28px 22px;
    backdrop-filter: blur(8px);
    transition: background 0.3s;
}
 
.stat-card:hover { background: rgba(255, 255, 255, 0.11); }
 
.stat-number {
    font-size: 38px;
    font-weight: 300;
    letter-spacing: -0.03em;
    color: #fff;
    line-height: 1;
    margin-bottom: 10px;
}
 
.stat-label {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 300;
    line-height: 1.4;
}
 
/* ── Shared labels ── */
.section-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.3);
    margin-bottom: 10px;
}
 
.section-heading {
    font-size: clamp(28px, 3.5vw, 40px);
    font-weight: 300;
    letter-spacing: -0.02em;
    color: #fff;
    line-height: 1.1;
}
 
/* ── Testimonials ── */
.testimonials-section {
    padding: 100px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
}
 
.testimonials-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
}
 
.testimonials-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 40px;
}
 
.testimonials-nav { display: flex; gap: 10px; }
 
.t-nav-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.65);
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
 
.t-nav-btn:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
}
 
.t-nav-btn:disabled { opacity: 0.25; cursor: default; }
 
.testimonials-track-wrap { position: relative; overflow: hidden; }
 
.testimonials-fade {
    position: absolute;
    inset-y: 0;
    width: 60px;
    z-index: 2;
    pointer-events: none;
}
 
.testimonials-fade--left  { left: 0;  background: linear-gradient(to right, #000, transparent); }
.testimonials-fade--right { right: 0; background: linear-gradient(to left, #000, transparent); }
 
.testimonials-track {
    display: flex;
    gap: 20px;
    transition: transform 0.5s ease;
}
 
/* ── CTA ── */
.cta-section { padding: 0 40px 100px; }
 
.cta-inner {
    max-width: 1280px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    padding: 64px 56px;
}
 
.cta-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.3);
    margin-bottom: 16px;
}
 
.cta-heading {
    font-size: clamp(28px, 3.5vw, 44px);
    font-weight: 300;
    letter-spacing: -0.025em;
    color: #fff;
    max-width: 560px;
    margin-bottom: 14px;
    line-height: 1.1;
}
 
.cta-body {
    font-size: 15px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.45);
    max-width: 440px;
    line-height: 1.65;
    margin-bottom: 36px;
}
 
.cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
 
.cta-btn {
    display: inline-flex;
    align-items: center;
    padding: 12px 28px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
    letter-spacing: -0.01em;
}
 
.cta-btn--primary { background: #fff; color: #000; }
.cta-btn--primary:hover { background: rgba(255, 255, 255, 0.88); }
 
.cta-btn--ghost {
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
 
.cta-btn--ghost:hover { background: rgba(255, 255, 255, 0.06); color: #fff; }
 
/* ── Marquee ── */
.marquee-section {
    padding: 56px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
}
 
.marquee-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
}
 
.marquee-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.25);
    margin-bottom: 28px;
}
 
.marquee-track-wrap { position: relative; overflow: hidden; }
 
.marquee-fade {
    position: absolute;
    inset-y: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
}
 
.marquee-fade--left  { left: 0;  background: linear-gradient(to right, #000, transparent); }
.marquee-fade--right { right: 0; background: linear-gradient(to left, #000, transparent); }
 
.logo-marquee {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
}
 
.marquee-set {
    display: flex;
    align-items: center;
    gap: 56px;
    padding-right: 56px;
}
 
.marquee-logo {
    height: 40px;
    width: auto;
    object-fit: contain;
    opacity: 0.6;
    filter: brightness(0) invert(1);
    transition: opacity 0.2s;
}
 
.marquee-logo:hover { opacity: 1; }
 
@keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
}
 
/* ── Responsive ── */
@media (max-width: 900px) {
    .hero-section { padding: 0 24px; }
    .hero-body { grid-template-columns: 1fr; gap: 40px; }
    .hero-cards { grid-template-columns: 1fr; padding-top: 0; }
    .hero-card--raised { margin-top: 0; }
    .fullbleed-top-inner { grid-template-columns: 1fr; padding: 60px 24px; }
    .fullbleed-bottom-inner { padding: 60px 24px 80px; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .cta-section { padding: 0 24px 80px; }
    .cta-inner { padding: 40px 28px; }
    .testimonials-inner { padding: 0 24px; }
    .marquee-inner { padding: 0 24px; }
}
 
@media (max-width: 640px) {
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .testimonials-header { flex-direction: column; align-items: flex-start; gap: 20px; }
    .hero-top { padding-top: 110px; }
}
</style>