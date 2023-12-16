// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss','@nuxtjs/strapi'],
  strapi: {
    entited: ['events','promoters'],
    url: 'http://localhost:1337'
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
