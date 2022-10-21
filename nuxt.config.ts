// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // we can have any runtime config here that is available in the server and client
    // publicRuntimeConfig: {
    //     WEATHER_APP_SECRET_KEY: process.env.WEATHER_APP_SECRET_KEY,
    // },

    // // we can have any runtime config here that is only available in the server
    // privateRuntimeConfig: {
    //     PRIVATE_MSG: 'This is a private message in the server not available in the client',
    // },
    css: ["assets/css/tailwind.css"],
    modules: [
        '@nuxtjs/tailwindcss',
        // '@pinia/nuxt',
    ],
    meta: {
        title: 'TODO App with Nuxt3',
    },
    // server: {
    //     port:3333,
    // },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        }
    },
})