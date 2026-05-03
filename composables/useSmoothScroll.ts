import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

// Module-level singleton — shared across all composable calls
let smoother: any = null

export const useSmoothScroll = () => {
    const initScrollSmoother = () => {
        if (!smoother) {
            smoother = ScrollSmoother.create({
                wrapper: '#smooth-wrapper',
                content: '#smooth-content',
                smooth: 1.5,
                effects: true,
                normalizeScroll: true,
                ignoreMobileResize: true,
            })
        }
    }

    const scrollToSection = (sectionId: string, duration: number = 1.5) => {
        const element = document.getElementById(sectionId)
        if (element) {
            if (smoother) {
                smoother.scrollTo(element, {
                    duration,
                    offsetY: 0,
                    ease: 'power2.inOut',
                })
            } else {
                gsap.to(window, {
                    duration,
                    scrollTo: { y: element, offsetY: 0 },
                    ease: 'power2.inOut',
                })
            }
        }
    }

    const scrollToHash = (hash: string, duration: number = 1.5) => {
        const sectionId = hash.startsWith('#') ? hash.slice(1) : hash
        scrollToSection(sectionId, duration)
    }

    const scrollToSectionOnPage = async (
        sectionId: string,
        targetPage?: string,
        duration: number = 1.5
    ) => {
        const currentRoute = useRoute()

        if (targetPage && currentRoute.path !== targetPage) {
            await navigateTo(targetPage)
            setTimeout(() => {
                scrollToSection(sectionId, duration)
            }, 500)
        } else {
            scrollToSection(sectionId, duration)
        }
    }

    const scrollToTop = (duration: number = 1.5) => {
        if (smoother) {
            smoother.scrollTo(0, { duration, ease: 'power2.inOut' })
        } else {
            gsap.to(window, { duration, scrollTo: 0, ease: 'power2.inOut' })
        }
    }

    const scrollToBottom = (duration: number = 1.5) => {
        const scrollHeight = document.documentElement.scrollHeight
        const windowHeight = window.innerHeight

        if (smoother) {
            smoother.scrollTo(scrollHeight - windowHeight, { duration, ease: 'power2.inOut' })
        } else {
            gsap.to(window, {
                duration,
                scrollTo: scrollHeight - windowHeight,
                ease: 'power2.inOut',
            })
        }
    }

    const killSmoother = () => {
        if (smoother) {
            smoother.kill()
            smoother = null
        }
    }

    const getSmoother = () => smoother

    return {
        initScrollSmoother,
        scrollToSection,
        scrollToHash,
        scrollToSectionOnPage,
        scrollToTop,
        scrollToBottom,
        killSmoother,
        getSmoother,
    }
}
