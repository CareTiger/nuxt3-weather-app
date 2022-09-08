<template>
    <teleport to="body">
    <Transition mode="in-out"
    enter-active-class="animate__animated animate__fadeInRight zoomIn"
    leave-active-class="animate__animated animate__fadeOutRight zoomOut">    
    <div>
        <div class="relative z-10" role="dialog">
            <!--
                Background backdrop, show/hide based on modal state.
                Entering: "ease-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
                Leaving: "ease-in duration-200"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">

                <!-- Actual modal -->
                <Transition
                enter-active-class="animate__animated animate__fadeInRight zoomIn"
                leave-active-class="animate__animated animate__fadeOutRight zoomOut"> 
                <div class="grid min-h-full w-full place-items-end">
                    <div class="bg-weather-secondary text-white rounded-lg min-h-screen w-3/4 md:w-3/4">
                            <!--
                                Modal panel, show/hide based on modal state.
                                Entering: "ease-out duration-300"
                                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                To: "opacity-100 translate-y-0 sm:scale-100"
                                Leaving: "ease-in duration-200"
                                From: "opacity-100 translate-y-0 sm:scale-100"
                                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            -->
                            <div class="flex justify-end m-2 md:m-4">
                                <span class="bg-weather-primary p-1 rounded-full flex items-center hover:cursor-pointer" @click="closeNav">
                                    <i class="material-icons-outlined text-4xl md:text-6xl">close</i>
                                </span>
                            </div>
                    </div>        
                </div>
                </Transition>

            </div>
        </div>
    </div>
    </Transition>
    </teleport>
</template>


<script setup>
    // TODO the transition has to be fixed.
import { useSiteStore } from '~~/store/site';
const siteStore = useSiteStore();

const closeNav = () => {
    siteStore.toggleNavbar()    
}
</script>