import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useParallax = () => {
    const parallaxElements = ref<HTMLElement[]>([])
    const scrollTriggers = ref<any[]>([])

    const registerParallaxElement = (
        element: HTMLElement,
        speed: number = 0.5,
        start: string = 'top bottom',
        end: string = 'bottom top'
    ) => {
        parallaxElements.value.push(element)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start,
                end,
                scrub: true,
                markers: false,
            },
        })

        tl.to(element, { y: `${speed * 100}%`, ease: 'none' })
        scrollTriggers.value.push(tl)
    }

    const createParallaxEffect = (
        element: HTMLElement,
        options: {
            speed?: number
            direction?: 'up' | 'down' | 'left' | 'right'
            start?: string
            end?: string
            ease?: string
        } = {}
    ) => {
        const {
            speed = 0.5,
            direction = 'down',
            start = 'top bottom',
            end = 'bottom top',
            ease = 'none',
        } = options

        const tl = gsap.timeline({
            scrollTrigger: { trigger: element, start, end, scrub: true, markers: false },
        })

        const transforms: Record<string, object> = {
            up: { y: `-${speed * 100}%` },
            down: { y: `${speed * 100}%` },
            left: { x: `-${speed * 100}%` },
            right: { x: `${speed * 100}%` },
        }

        tl.to(element, { ...transforms[direction], ease })
        scrollTriggers.value.push(tl)
        return tl
    }

    const createStaggeredParallax = (
        elements: HTMLElement[],
        options: {
            speed?: number
            stagger?: number
            direction?: 'up' | 'down' | 'left' | 'right'
            start?: string
            end?: string
        } = {}
    ) => {
        const {
            speed = 0.5,
            stagger = 0.1,
            direction = 'down',
            start = 'top bottom',
            end = 'bottom top',
        } = options

        const tl = gsap.timeline({
            scrollTrigger: { trigger: elements[0], start, end, scrub: true, markers: false },
        })

        const transforms: Record<string, object> = {
            up: { y: `-${speed * 100}%` },
            down: { y: `${speed * 100}%` },
            left: { x: `-${speed * 100}%` },
            right: { x: `${speed * 100}%` },
        }

        tl.to(elements, { ...transforms[direction], stagger, ease: 'none' })
        scrollTriggers.value.push(tl)
        return tl
    }

    const createScaleParallax = (
        element: HTMLElement,
        options: { scale?: number; start?: string; end?: string; ease?: string } = {}
    ) => {
        const { scale = 1.2, start = 'top bottom', end = 'bottom top', ease = 'none' } = options

        const tl = gsap.timeline({
            scrollTrigger: { trigger: element, start, end, scrub: true, markers: false },
        })

        tl.to(element, { scale, ease })
        scrollTriggers.value.push(tl)
        return tl
    }

    const createOpacityParallax = (
        element: HTMLElement,
        options: { opacity?: number; start?: string; end?: string; ease?: string } = {}
    ) => {
        const { opacity = 0, start = 'top bottom', end = 'bottom top', ease = 'none' } = options

        const tl = gsap.timeline({
            scrollTrigger: { trigger: element, start, end, scrub: true, markers: false },
        })

        tl.to(element, { opacity, ease })
        scrollTriggers.value.push(tl)
        return tl
    }

    const killAllTriggers = () => {
        scrollTriggers.value.forEach((trigger) => {
            if (trigger.scrollTrigger) trigger.scrollTrigger.kill()
        })
        scrollTriggers.value = []
        parallaxElements.value = []
    }

    const refreshTriggers = () => ScrollTrigger.refresh()

    onUnmounted(() => {
        killAllTriggers()
    })

    return {
        registerParallaxElement,
        createParallaxEffect,
        createStaggeredParallax,
        createScaleParallax,
        createOpacityParallax,
        killAllTriggers,
        refreshTriggers,
        parallaxElements,
    }
}
