// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [

            ]
        }
    },
    devtools: { enabled: true },
    components: true,
    css: [
        '~/assets/css/reset.css'
    ]
})
