import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother)

    ScrollTrigger.config({
        ignoreMobileResize: true,
    })

    return {
        provide: {
            gsap,
            ScrollTrigger,
            ScrollToPlugin,
            ScrollSmoother,
        },
    }
})
