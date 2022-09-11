<template>
    <teleport to="body">
    <Transition mode="in-out"
    enter-active-class="animate__animated animate__fadeInRight zoomIn"
    leave-active-class="animate__animated animate__fadeOutRight zoomOut">    
    <div>
        <div class="relative z-10" role="dialog">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">

                <!-- Actual modal -->
                <Transition
                enter-active-class="animate__animated animate__fadeInRight zoomIn"
                leave-active-class="animate__animated animate__fadeOutRight zoomOut"> 
                <div class="grid min-h-full w-full place-items-end">
                    <div class="bg-weather-secondary text-white rounded-lg min-h-screen w-full">

                            <div class="flex justify-end m-2 md:m-4">
                                <span class="bg-weather-primary p-1 rounded-full flex items-center hover:cursor-pointer" @click="closeNav">
                                    <i class="material-icons-outlined text-4xl md:text-6xl">close</i>
                                </span>
                            </div>

                            <div class="grid justify-start items-center text-4xl content-height px-4">
                                <ul class="flex flex-col space-y-5">
                                    <li>
                                        <nuxt-link to="/" class="flex flex-row justify-center items-center">
                                            <span><i class="fa-solid fa-house"></i></span>
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