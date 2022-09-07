import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
                rel: "stylesheet",
            },
            {
                href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
                rel: "stylesheet",
            },            
        ],
        },    
    modules: [ '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    css: ['animate.css/animate.min.css'],
    buildModules: ['@pinia/nuxt',]
})