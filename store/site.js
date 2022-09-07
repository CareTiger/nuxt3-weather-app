

import {defineStore} from 'pinia'

export const useSiteStore = defineStore({
    id: 'site-store',
    state: () => {
        return {
            showNavbar: false
        }
    },
    actions: {
        toggleNavbar(){
            this.showNavbar = !this.showNavbar
        }        
    },
    getters: {}
})