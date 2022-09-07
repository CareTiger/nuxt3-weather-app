<template>
    <div class="grid min-h-full place-items-end p-0">
        <div class="bg-gray-50 rounded-lg min-h-screen w-3/5 md:w-1/3">
                <!--
                    Modal panel, show/hide based on modal state.
                    Entering: "ease-out duration-300"
                    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    To: "opacity-100 translate-y-0 sm:scale-100"
                    Leaving: "ease-in duration-200"
                    From: "opacity-100 translate-y-0 sm:scale-100"
                    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                -->
                <div class="flex justify-end m-5 md:m-9">
                    <span class="bg-gray-200 p-2 rounded-full flex items-center" @click="closeNav">
                        <i class="material-icons-outlined text-4xl md:text-6xl">close</i>
                    </span>
                </div>

        </div>        
    </div>    
</template>

<script setup>
import { useSiteStore } from '~~/store/site';
const siteStore = useSiteStore();

const closeNav = () => {
    siteStore.toggleNavbar()    
}
</script>