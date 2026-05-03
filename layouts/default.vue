<template>
    <div>
        <!-- Header is fixed outside the ScrollSmoother wrapper -->
        <Header v-if="!isLoading" class="sticky-header" />

        <!-- ScrollSmoother wrapper — all page content goes here -->
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <slot />
                <Footer v-if="!isLoading" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'

    const isLoading = ref(true)
    const { initScrollSmoother, killSmoother, getSmoother } = useSmoothScroll()
    const { $ScrollTrigger } = useNuxtApp()

    onMounted(() => {
        nextTick(() => {
            isLoading.value = false
            initScrollSmoother()
        })
    })

    watch(
        () => useRoute().path,
        () => {
            isLoading.value = true
            nextTick(() => {
                isLoading.value = false
                if (!getSmoother()) {
                    initScrollSmoother()
                } else {
                    setTimeout(() => {
                        const currentSmoother = getSmoother()
                        if (currentSmoother && $ScrollTrigger) {
                            $ScrollTrigger.refresh()
                        }
                    }, 100)
                }
            })
        }
    )

    onUnmounted(() => {
        killSmoother()
    })
</script>

<style>
    .sticky-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    #smooth-wrapper {
        overflow: hidden;
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    #smooth-content {
        min-height: 100vh;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>
