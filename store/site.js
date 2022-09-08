

import {defineStore} from 'pinia'

export const useSiteStore = defineStore({
    id: 'site-store',
    state: () => {
        return {
            showNavbar: false,
            showTooltip: false,
            showTransition: false
        }
    },
    actions: {
        toggleNavbar(){
            this.showNavbar = !this.showNavbar
        },
        toggleTooltip () {
            this.showTooltip = !this.showTooltip
        },
        toggleTransition () {
            this.showTransition = !this.showTransition
        }                 
    },
    getters: {}
})