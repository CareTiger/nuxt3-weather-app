<template>
    <div class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
        <div class="p-4 bg-white self-start mt-32 max-w-md">

            <slot />
            <button class="text-white mt-8 bg-weather-primary py-2 px-6" @click="closeTooltip">Close</button>

        </div>
    </div>
</template>

<script setup>
import  { useSiteStore } from '~/store/site'
const siteStore = useSiteStore ()

const closeTooltip = () => {
        siteStore.toggleTooltip()
    }    

defineProps ({
    
})
</script>