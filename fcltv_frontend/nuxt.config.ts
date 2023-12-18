// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss','@nuxtjs/strapi'],
  strapi: {
    url: 'http://localhost:1337',
    version: 'v4',
    prefix: '/api'
  },
  app: {
    head: {
      title: "Fight Club Live TV",
      meta: [
        { name: 'description', content: "Pay Per View Live Stream Boxing, Kickboxing, Muay Thai"}
      ]
    }
  }
})
