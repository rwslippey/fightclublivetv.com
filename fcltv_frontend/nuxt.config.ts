// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss','@nuxtjs/strapi','@nuxtseo/module'],
  strapi: {
    url: 'http://localhost:1337',
    version: 'v4',
    prefix: '/api'
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://fcltv.com',
    name: 'Fight Club Live TV',
    description: 'Combat sports at your fingertips',
    language: 'en-US'
  }
})
