<template>
    <div class="bg-weather-primary min-h-screen font-Roboto">
        <div class="mx-auto">
            <!--navbar-->
            <div
                class="flex flex-row items-center justify-between p-2 text-white"
            >
                <div class="h-full flex items-center hover:cursor-pointer">
                    <i
                        class="material-icons-outlined text-xl md:text-3xl hover:text-weather-secondary"
                        @click="showTooltip"
                        >info</i
                    >
                    <i class="ml-4 material-icons-outlined text-xl md:text-3xl"
                        >add</i
                    >
                </div>
                <nuxt-link to="/" class="text-4xl md:text-6xl"
                    >Weather</nuxt-link
                >
                <div
                    id="weather"
                    class="h-full flex items-center hover:cursor-pointer"
                >
                    <i
                        class="material-icons-outlined text-4xl md:text-6xl"
                        @click="showNav"
                        >menu</i
                    >
                    <transition
                        name="parent"
                        appear
                        @leave="leave"
                        :css="false"
                    >
                        <NavBar v-if="siteStore.showNavbar" />
                    </transition>
                </div>
            </div>
            <base-modal v-if="siteStore.showTooltip">
                <h1>Hello from modal</h1>
            </base-modal>

            <!--Content-->
            <slot />

            <!--Footer-->
        </div>
    </div>
</template>

<script setup>
import gsap from "gsap";
import { useSiteStore } from "~~/store/site";
const siteStore = useSiteStore();
const showNav = () => {
    siteStore.toggleNavbar();
};
const showTooltip = () => {
    siteStore.toggleTooltip();
};
function leave(el, done) {
    console.log("before leave");
    gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: "elastic.inOut(2.5, 1)",
    });
    gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done,
    });
}
</script>
