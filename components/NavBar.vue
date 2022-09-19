<template>
    <div>
        <div class="relative z-10" role="dialog">
            <div class="fixed inset-0 bg-transparent bg-opacity-75"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <!-- Actual modal -->
                <Transition name="nav" appear @enter="enter">
                    <div class="grid min-h-full w-full place-items-end">
                        <div
                            class="bg-weather-secondary text-white rounded-l-lg min-h-screen w-3/4"
                        >
                            <div class="flex justify-end m-2 md:m-4">
                                <span
                                    class="bg-weather-primary p-1 rounded-full flex items-center hover:cursor-pointer"
                                    @click="closeNav"
                                >
                                    <i
                                        class="material-icons-outlined text-4xl md:text-6xl"
                                        >close</i
                                    >
                                </span>
                            </div>

                            <div
                                class="grid justify-start items-center text-4xl content-height px-4"
                            >
                                <ul class="flex flex-col space-y-5">
                                    <li>
                                        <nuxt-link
                                            to="/"
                                            class="flex flex-row justify-center items-center"
                                        >
                                            <span
                                                ><i
                                                    class="fa-solid fa-house"
                                                ></i
                                            ></span>
                                            <span class="ml-4">Home</span>
                                        </nuxt-link>
                                    </li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
// TODO the transition has to be fixed.
import { useSiteStore } from "~~/store/site";
import gsap from "gsap";
const siteStore = useSiteStore();
const showNav = ref(true);

const closeNav = () => {
    siteStore.toggleNavbar();
};

function enter(el, done) {
    gsap.from(el, {
        duration: 1,
        opacity: 1,
        x: 400,
        ease: "power1.easeIn",
        onComplete: done,
    });
}
</script>
