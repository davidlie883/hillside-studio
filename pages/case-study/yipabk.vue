<template>
    <div>
        <!-- ── Hero ── -->
        <section class="hero">
            <p class="hero-eyebrow">YIPABK · Case Study</p>
            <h1 class="hero-title">
                Elevating web and automation <em>for inclusive education.</em>
            </h1>
            <p class="hero-sub">
                An Indonesian non-profit advancing inclusive education and support systems for
                children with special needs.
            </p>
            <div class="hero-image-wrap">
                <img
                    src="/house.png"
                    alt="YIPABK case study preview"
                    class="hero-img"
                />
            </div>
        </section>

        <!-- ── Overview ── -->
        <section class="overview">
            <div class="overview-inner">
                <div class="reveal">
                    <p class="section-label">Overview</p>
                    <h2 class="overview-heading">
                        YIPABK is an Indonesian non-profit supporting children with special needs
                        through advocacy, inclusive education, and community empowerment.
                    </h2>
                </div>

                <div class="info-grid reveal">
                    <div class="info-cell wide">
                        <div>
                            <p class="cell-label">Founded</p>
                            <p class="cell-title">Established in 2012 by educators</p>
                            <p class="cell-body">
                                Dedicated to creating an Indonesia where all children can grow happily
                                with equal access to education, guided by the RICH values.
                            </p>
                        </div>
                        <div>
                            <p class="cell-label">Our Work</p>
                            <p class="cell-title">Digital presence, reimagined</p>
                            <p class="cell-body">
                                We elevated YIPABK's digital experience through unified design and
                                automated internal systems for finance, data, and timesheeting.
                            </p>
                        </div>
                    </div>
                    <div class="info-cell">
                        <p class="cell-label">Impact</p>
                        <p class="cell-title">More donors, more reach</p>
                        <p class="cell-body">
                            Higher monthly donations and conversion rates following the web uplift.
                        </p>
                    </div>
                    <div class="info-cell">
                        <p class="cell-label">Scope</p>
                        <p class="cell-title">Web + Internal Systems</p>
                        <p class="cell-body">
                            Public-facing website redesign and automation of finance, data, and
                            timesheeting workflows.
                        </p>
                    </div>
                    <div class="info-cell">
                        <p class="cell-label">Location</p>
                        <p class="cell-title">Indonesia</p>
                        <p class="cell-body">
                            Operating nationally, serving families and educators across the country.
                        </p>
                    </div>
                </div>

                <div class="prose-block reveal">
                    <p class="prose-label">About the project</p>
                    <div class="prose-content">
                        <p>
                            YIPABK (Yayasan Indonesia Peduli Anak Berkebutuhan Khusus) is an
                            Indonesian non-profit foundation supporting children with special needs
                            and their families through advocacy, inclusive education, and community
                            empowerment.
                        </p>
                        <p>
                            Established in 2012 by a group of educators, YIPABK is dedicated to
                            creating an Indonesia where all children can grow happily with equal
                            access to education. Guided by the values of
                            <strong>Respect, Integrity, Compassion, and Humility</strong> (RICH),
                            the organisation focuses on inclusive learning and supportive
                            environments for children with diverse needs.
                        </p>
                        <p>
                            Our work focused on elevating YIPABK's digital presence through a more
                            unified and thoughtful design approach — reimagining their website and
                            supporting automation of internal operational systems, helping the
                            organisation better serve both internal and external stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── Programmes ── -->
        <section class="programmes">
            <div class="programmes-inner">
                <div class="prog-header reveal">
                    <p class="section-label">Programmes</p>
                    <h2 class="prog-heading">Three core programmes driving real change.</h2>
                </div>

                <div class="prog-list">
                    <div class="prog-card reveal">
                        <p class="prog-acronym">LIFE</p>
                        <p class="prog-name">Learning Intervention Family Equip</p>
                        <p class="prog-desc">
                            Direct intervention and family empowerment to help children with special
                            needs thrive in learning environments.
                        </p>
                    </div>
                    <div class="prog-card reveal">
                        <p class="prog-acronym">RAISE</p>
                        <p class="prog-name">Resource Awareness Inspiration Stories Education</p>
                        <p class="prog-desc">
                            Public awareness and storytelling that inspire communities to embrace
                            inclusive education.
                        </p>
                    </div>
                    <div class="prog-card reveal">
                        <p class="prog-acronym">TEACH</p>
                        <p class="prog-name">Train Educate Accommodate Collaborate Help</p>
                        <p class="prog-desc">
                            Teacher training and collaborative programmes equipping educators to
                            support diverse learners.
                        </p>
                    </div>
                </div>

                <div class="values-divider reveal">
                    <p class="values-label">Core Values</p>
                    <div class="values-row">
                        <div class="value-item">
                            <p class="value-letter">R</p>
                            <p class="value-word">Respect</p>
                            <p class="value-desc">Every child deserves dignity and recognition.</p>
                        </div>
                        <div class="value-item">
                            <p class="value-letter">I</p>
                            <p class="value-word">Integrity</p>
                            <p class="value-desc">Honest and consistent in all we do.</p>
                        </div>
                        <div class="value-item">
                            <p class="value-letter">C</p>
                            <p class="value-word">Compassion</p>
                            <p class="value-desc">Leading with empathy, always.</p>
                        </div>
                        <div class="value-item">
                            <p class="value-letter">H</p>
                            <p class="value-word">Humility</p>
                            <p class="value-desc">Open to learning and growing together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── Process ── -->
        <section class="process">
            <div class="process-header reveal">
                <div class="process-header-top">
                    <div>
                        <p class="section-label">Process</p>
                        <h2 class="process-heading">
                            Get to know the YIPABK<br /><em>design and system process.</em>
                        </h2>
                        <p class="process-sub">
                            From initial research to final deployment — a look inside how we
                            approached every layer of this project.
                        </p>
                    </div>
                    <div class="process-nav">
                        <button class="nav-btn" :disabled="atStart" aria-label="Previous" @click="scrollCards(-1)">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M11 4L6 9L11 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button class="nav-btn" :disabled="atEnd" aria-label="Next" @click="scrollCards(1)">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M7 4L12 9L7 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div ref="cardsViewport" class="cards-viewport" @scroll="onScroll">
                <div class="cards-track">
                    <!-- Card 1 — large image -->
                    <article class="pcard pcard--dark pcard--large">
                        <div class="pcard-img-wrap">
                            <img src="/house.png" alt="Design Introduction" class="pcard-img" />
                            <div class="pcard-img-overlay"></div>
                        </div>
                        <div class="pcard-content">
                            <span class="pcard-eyebrow">Design Introduction</span>
                            <h3 class="pcard-title">Professional, warm,<br />and accessible by design.</h3>
                            <p class="pcard-body">
                                YIPABK's design was shaped to feel credible and clear, while still
                                feeling human and welcoming for families, educators, and stakeholders.
                            </p>
                        </div>
                    </article>

                    <!-- Card 2 — narrow dark -->
                    <article class="pcard pcard--dark pcard--narrow">
                        <div class="pcard-content pcard-content--full">
                            <span class="pcard-eyebrow">Consistency</span>
                            <h3 class="pcard-title">One visual language across web and system.</h3>
                            <p class="pcard-body">
                                Each component was built with consistency in mind — both the public
                                website and internal system share a coherent visual language.
                            </p>
                            <div class="pcard-badge">Design System</div>
                        </div>
                    </article>

                    <!-- Card 3 — narrow light -->
                    <article class="pcard pcard--light pcard--narrow">
                        <div class="pcard-content pcard-content--full">
                            <span class="pcard-eyebrow pcard-eyebrow--dark">Clarity</span>
                            <h3 class="pcard-title pcard-title--dark">
                                Not just visual,<br />but functional.
                            </h3>
                            <p class="pcard-body pcard-body--dark">
                                The goal was to make the web and system experience clearer, easier to
                                use, and more supportive for all stakeholders.
                            </p>
                            <div class="pcard-badge pcard-badge--dark">UX Strategy</div>
                        </div>
                    </article>

                    <!-- Card 4 — large split -->
                    <article class="pcard pcard--dark pcard--large pcard--split">
                        <div class="pcard-content">
                            <span class="pcard-eyebrow">Internal + External</span>
                            <h3 class="pcard-title">
                                A digital system built<br />for real use, not just presentation.
                            </h3>
                        </div>
                        <div class="pcard-split-grid">
                            <div class="pcard-split-cell">
                                <p class="pcard-split-label">Public-facing website</p>
                                <p class="pcard-split-body">
                                    Built to strengthen trust, improve readability, and present
                                    YIPABK's mission in a more structured and engaging way.
                                </p>
                            </div>
                            <div class="pcard-split-cell">
                                <p class="pcard-split-label">Internal automation</p>
                                <p class="pcard-split-body">
                                    Designed to support operational workflows — finance, data
                                    management, and timesheeting — with a cleaner structure.
                                </p>
                            </div>
                        </div>
                    </article>

                    <!-- Card 5 — blue stat -->
                    <article class="pcard pcard--blue pcard--narrow">
                        <div class="pcard-content pcard-content--full">
                            <span class="pcard-eyebrow">Outcome</span>
                            <div class="pcard-stat">↑</div>
                            <h3 class="pcard-title">More donors.<br />More reach.</h3>
                            <p class="pcard-body">
                                Higher monthly donations and conversion rates following the web uplift
                                and system rollout.
                            </p>
                        </div>
                    </article>
                </div>
            </div>

            <div class="scroll-hint reveal">
                <span class="scroll-hint-line"></span>
                <span class="scroll-hint-text">Scroll to explore</span>
                <span class="scroll-hint-line"></span>
            </div>
        </section>

        <!-- ── Development ── -->
        <section class="dev-section">
            <div class="dev-inner">
                <div class="dev-header reveal">
                    <p class="section-label">Development</p>
                    <h2 class="dev-heading">From back end structure<br />to front end experience.</h2>
                </div>

                <div class="dev-grid">
                    <!-- Left sticky -->
                    <div class="dev-left reveal" style="margin-bottom:0">
                        <div class="dev-sticky">
                            <div class="dev-quote-card">
                                <svg class="dev-quote-icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" opacity="0.15" />
                                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" opacity="0.15" />
                                </svg>
                                <p class="dev-quote-text">
                                    Following our post web uplift, YIPABK's website has gained
                                    traction with more monthly donators, people contacting and
                                    reaching out as well as higher conversion rates of donors.
                                </p>
                                <div class="dev-quote-footer">
                                    <div class="dev-quote-divider"></div>
                                    <p class="dev-quote-attr">Project outcome</p>
                                </div>
                            </div>

                            <div class="dev-stats">
                                <div class="dev-stat-pill">
                                    <div class="dev-stat-dot"></div>
                                    <span class="dev-stat-label">Monthly donors</span>
                                    <span class="dev-stat-arrow">↑</span>
                                </div>
                                <div class="dev-stat-pill">
                                    <div class="dev-stat-dot"></div>
                                    <span class="dev-stat-label">Conversion rate</span>
                                    <span class="dev-stat-arrow">↑</span>
                                </div>
                                <div class="dev-stat-pill">
                                    <div class="dev-stat-dot"></div>
                                    <span class="dev-stat-label">Inbound enquiries</span>
                                    <span class="dev-stat-arrow">↑</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right images -->
                    <div class="dev-right reveal">
                        <div class="dev-img-main">
                            <img
                                src="/house.png"
                                alt="YIPABK system architecture"
                                class="dev-img dev-img--main"
                            />
                        </div>
                        <div class="dev-img-row">
                            <div class="dev-img-small">
                                <img
                                    src="/house.png"
                                    alt="UI Components"
                                    class="dev-img dev-img--small"
                                />
                            </div>
                            <div class="dev-img-small">
                                <img
                                    src="/house.png"
                                    alt="Front end"
                                    class="dev-img dev-img--small"
                                />
                            </div>
                        </div>
                        <p class="dev-caption">Process — back end to front end</p>
                    </div>
                </div>


            </div>
        </section>
    </div>
</template>

<script setup>
const cardsViewport = ref(null)
const atStart = ref(true)
const atEnd = ref(false)

function onScroll() {
    const el = cardsViewport.value
    if (!el) return
    atStart.value = el.scrollLeft <= 4
    atEnd.value = el.scrollLeft + el.offsetWidth >= el.scrollWidth - 4
}

function scrollCards(dir) {
    const el = cardsViewport.value
    if (!el) return
    const card = el.querySelector('.pcard')
    const amount = (card?.offsetWidth ?? 400) + 16
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
}

onMounted(() => {
    // Drag to scroll
    const el = cardsViewport.value
    if (el) {
        let isDown = false, startX, scrollLeft
        el.addEventListener('mousedown', (e) => {
            isDown = true
            startX = e.pageX - el.offsetLeft
            scrollLeft = el.scrollLeft
        })
        el.addEventListener('mouseleave', () => (isDown = false))
        el.addEventListener('mouseup', () => (isDown = false))
        el.addEventListener('mousemove', (e) => {
            if (!isDown) return
            e.preventDefault()
            el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.2
        })
    }

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 60)
                    io.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.08 }
    )
    reveals.forEach((el) => io.observe(el))
})
</script>

<style scoped>
/* ── Tokens ── */
:root {
    --blue: #0071e3;
    --gray-50: #f5f5f7;
    --gray-100: #e8e8ed;
    --gray-400: #86868b;
    --gray-700: #515154;
    --gray-900: #1d1d1f;
}

/* ── Base ── */
.section-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #86868b;
    margin-bottom: 16px;
}

.reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.75s ease, transform 0.75s ease;
}
.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
}

/* ── Hero ── */
.hero {
    background: #000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 24px 80px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 50% at 50% 110%, rgba(0, 113, 227, 0.2) 0%, transparent 70%);
    pointer-events: none;
}

.hero-eyebrow {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #0071e3;
    text-transform: uppercase;
    margin-bottom: 20px;
    opacity: 0;
    animation: fadeUp 0.7s ease forwards 0.1s;
}

.hero-title {
    font-size: clamp(36px, 6.5vw, 76px);
    font-weight: 300;
    line-height: 1.06;
    letter-spacing: -0.03em;
    color: #fff;
    max-width: 860px;
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeUp 0.85s ease forwards 0.25s;
}

.hero-title em {
    font-style: normal;
    color: #86868b;
}

.hero-sub {
    font-size: clamp(15px, 1.8vw, 19px);
    font-weight: 300;
    color: #86868b;
    max-width: 520px;
    line-height: 1.65;
    opacity: 0;
    animation: fadeUp 0.85s ease forwards 0.4s;
}

.hero-image-wrap {
    width: 100%;
    max-width: 1060px;
    margin-top: 64px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    opacity: 0;
    animation: fadeUp 1s ease forwards 0.55s;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
}

.hero-image-wrap::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 35%;
    background: linear-gradient(to top, #000, transparent);
    pointer-events: none;
}

.hero-img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
}

/* ── Overview ── */
.overview {
    background: #fff;
    padding: 96px 24px 80px;
}

.overview-inner {
    max-width: 960px;
    margin: 0 auto;
}

.overview-heading {
    font-size: clamp(26px, 4vw, 48px);
    font-weight: 300;
    line-height: 1.14;
    letter-spacing: -0.022em;
    color: #1d1d1f;
    max-width: 720px;
    margin-bottom: 72px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #e8e8ed;
    border: 1px solid #e8e8ed;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 72px;
}

.info-cell {
    background: #fff;
    padding: 36px 32px;
}

.info-cell.wide {
    grid-column: 1 / -1;
    background: #f5f5f7;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.cell-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #86868b;
    margin-bottom: 10px;
}

.cell-title {
    font-size: clamp(17px, 2.2vw, 22px);
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.012em;
    color: #1d1d1f;
    margin-bottom: 14px;
}

.cell-body {
    font-size: 14px;
    line-height: 1.7;
    color: #515154;
    font-weight: 300;
}

.prose-block {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 56px;
    padding-top: 72px;
    border-top: 1px solid #e8e8ed;
}

.prose-label {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #1d1d1f;
    line-height: 1.35;
    position: sticky;
    top: 80px;
    align-self: start;
}

.prose-content p {
    font-size: 16px;
    line-height: 1.75;
    color: #515154;
    font-weight: 300;
    margin-bottom: 24px;
}

.prose-content p:last-child { margin-bottom: 0; }

.prose-content strong {
    font-weight: 500;
    color: #1d1d1f;
}

/* ── Programmes ── */
.programmes {
    background: #f5f5f7;
    padding: 80px 24px;
}

.programmes-inner {
    max-width: 960px;
    margin: 0 auto;
}

.prog-header { margin-bottom: 48px; }

.prog-heading {
    font-size: clamp(24px, 3.5vw, 38px);
    font-weight: 300;
    letter-spacing: -0.02em;
    color: #1d1d1f;
    margin-top: 12px;
}

.prog-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-bottom: 64px;
}

.prog-card {
    background: #fff;
    border-radius: 16px;
    padding: 30px 26px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: default;
}

.prog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
}

.prog-acronym {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #0071e3;
    margin-bottom: 6px;
}

.prog-name {
    font-size: 13px;
    font-weight: 400;
    color: #86868b;
    margin-bottom: 18px;
    line-height: 1.5;
}

.prog-desc {
    font-size: 14px;
    line-height: 1.65;
    color: #515154;
    font-weight: 300;
}

.values-divider {
    padding-top: 56px;
    border-top: 1px solid #e8e8ed;
}

.values-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #86868b;
    margin-bottom: 32px;
}

.values-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.value-letter {
    font-size: 52px;
    font-weight: 200;
    letter-spacing: -0.04em;
    color: #1d1d1f;
    line-height: 1;
    margin-bottom: 10px;
}

.value-word {
    font-size: 14px;
    font-weight: 500;
    color: #1d1d1f;
    margin-bottom: 6px;
}

.value-desc {
    font-size: 13px;
    color: #86868b;
    line-height: 1.55;
    font-weight: 300;
}

/* ── Process ── */
.process {
    background: #000;
    padding: 96px 0 80px;
    overflow: hidden;
}

.process-header {
    max-width: 960px;
    margin: 0 auto 56px;
    padding: 0 24px;
}

.process-header-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
}

.process-heading {
    font-size: clamp(32px, 5.5vw, 64px);
    font-weight: 300;
    line-height: 1.06;
    letter-spacing: -0.03em;
    color: #fff;
    margin: 12px 0 20px;
}

.process-heading em {
    font-style: normal;
    color: #86868b;
}

.process-sub {
    font-size: 16px;
    font-weight: 300;
    color: #86868b;
    max-width: 480px;
    line-height: 1.65;
}

.process-nav {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
    padding-bottom: 4px;
}

.nav-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease, opacity 0.2s ease;
}

.nav-btn:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.06);
}

.nav-btn:active { transform: scale(0.95); }

.nav-btn:disabled {
    opacity: 0.25;
    cursor: default;
    transform: none;
}

.cards-viewport {
    overflow-x: auto;
    overflow-y: visible;
    padding: 8px 24px 32px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    cursor: grab;
}

.cards-viewport:active { cursor: grabbing; }
.cards-viewport::-webkit-scrollbar { display: none; }

.cards-track {
    display: flex;
    gap: 16px;
    width: max-content;
    align-items: stretch;
}

.pcard {
    scroll-snap-align: start;
    border-radius: 24px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 620px;
}

.pcard:hover {
    transform: translateY(-6px);
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
}

.pcard--large  { width: clamp(560px, 55vw, 760px); }
.pcard--narrow { width: clamp(300px, 28vw, 420px); }
.pcard--dark   { background: #111; }
.pcard--light  { background: #f5f5f7; border: 1px solid rgba(0, 0, 0, 0.08); }
.pcard--blue   { background: #0071e3; }

.pcard-img-wrap {
    position: relative;
    flex: 1;
    min-height: 0;
}

.pcard-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.pcard-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #111 0%, rgba(17, 17, 17, 0.4) 50%, transparent 100%);
}

.pcard-content {
    position: relative;
    padding: 28px 32px 32px;
    z-index: 1;
}

.pcard-content--full {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.pcard-eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    margin-bottom: 10px;
}

.pcard-eyebrow--dark { color: #86868b; }

.pcard-title {
    font-size: clamp(20px, 2.4vw, 28px);
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.018em;
    color: #fff;
    margin-bottom: 14px;
}

.pcard-title--dark { color: #1d1d1f; }

.pcard-body {
    font-size: 14px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
}

.pcard-body--dark { color: #515154; }

.pcard-badge {
    display: inline-block;
    margin-top: 24px;
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    align-self: flex-start;
}

.pcard-badge--dark {
    border-color: rgba(0, 0, 0, 0.15);
    color: #86868b;
}

.pcard-stat {
    font-size: 72px;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1;
    margin: 8px 0 20px;
    letter-spacing: -0.04em;
}

.pcard--split { justify-content: flex-start; }
.pcard--split .pcard-content { padding-bottom: 16px; }

.pcard-split-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 0 32px 32px;
}

.pcard-split-cell {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 22px 20px;
}

.pcard-split-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 10px;
}

.pcard-split-body {
    font-size: 13px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.65);
    font-weight: 300;
}

.scroll-hint {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: center;
    margin-top: 8px;
    padding: 0 24px;
}

.scroll-hint-line {
    flex: 1;
    max-width: 80px;
    height: 1px;
    background: rgba(255, 255, 255, 0.12);
}

.scroll-hint-text {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.25);
    font-weight: 400;
    white-space: nowrap;
}

/* ── Development ── */
.dev-section {
    background: #fff;
    padding: 100px 24px 120px;
}

.dev-inner {
    max-width: 960px;
    margin: 0 auto;
}

.dev-header {
    margin-bottom: 64px;
    padding-top: 16px;
    border-top: 1px solid #e8e8ed;
}

.dev-heading {
    font-size: clamp(28px, 4.5vw, 54px);
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: #1d1d1f;
    margin-top: 12px;
}

.dev-grid {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 48px;
    margin-bottom: 0;
    align-items: start;
}

.dev-sticky {
    position: sticky;
    top: 80px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.dev-quote-card {
    background: #f5f5f7;
    border-radius: 20px;
    padding: 28px 26px;
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.dev-quote-icon {
    width: 28px;
    height: 28px;
    color: #1d1d1f;
    margin-bottom: 14px;
}

.dev-quote-text {
    font-size: 15px;
    line-height: 1.72;
    color: #1d1d1f;
    font-weight: 300;
    letter-spacing: -0.005em;
}

.dev-quote-footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.dev-quote-divider {
    width: 24px;
    height: 1px;
    background: #c7c7cc;
    flex-shrink: 0;
}

.dev-quote-attr {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #86868b;
}

.dev-stats {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.dev-stat-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    border: 1px solid #e8e8ed;
    border-radius: 999px;
    padding: 10px 16px;
    transition: background 0.2s, border-color 0.2s;
    cursor: default;
}

.dev-stat-pill:hover {
    background: #f5f5f7;
    border-color: #c7c7cc;
}

.dev-stat-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #0071e3;
    flex-shrink: 0;
}

.dev-stat-label {
    font-size: 13px;
    color: #1d1d1f;
    flex: 1;
}

.dev-stat-arrow {
    font-size: 13px;
    color: #0071e3;
    font-weight: 500;
}

.dev-right {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.dev-img-main {
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.dev-img-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.dev-img-small {
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.dev-img--main {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
}

.dev-img--small {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
}

.dev-caption {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #86868b;
    padding-top: 2px;
}

/* ── Responsive ── */
@media (max-width: 700px) {
    .info-grid { grid-template-columns: 1fr; }
    .info-cell.wide { grid-template-columns: 1fr; gap: 24px; }
    .prose-block { grid-template-columns: 1fr; gap: 20px; }
    .prog-list { grid-template-columns: 1fr; }
    .values-row { grid-template-columns: repeat(2, 1fr); }
    .dev-grid { grid-template-columns: 1fr; }
    .dev-sticky { position: static; }
    .process-header-top { flex-direction: column; align-items: flex-start; }
}
</style>