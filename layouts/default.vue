<template>
    <div class="bg-weather-primary min-h-screen">
        <!--navbar-->
        <div class="flex flex-row items-center justify-between p-2">
            <h1 class="text-4xl md:text-6xl">Weather</h1>                     
            <div v-if="siteStore.showNavbar">
                <ModalContainer>
                    <SiteNavigation />
                </ModalContainer>
            </div>
            <div>
                <span @click="showNav"><i class="material-icons-outlined text-4xl md:text-6xl">menu</i></span>
            </div>
        </div>
        <!--Content-->
        <slot />

        <!--Footer-->

    </div>
</template>

<script setup>
    import { useSiteStore } from '~~/store/site';
    const siteStore = useSiteStore();
    const showNav = () => {
        siteStore.toggleNavbar()
    }
</script>