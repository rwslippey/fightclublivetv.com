<template>
<div>
  <!--
<ClientOnly>
  <ClientMobileMenu />
</ClientOnly>
-->
<nav class="sticky top-0 backdrop-filter backdrop-blur-lg flex items-center justify-between flex-wrap bg-gray-10 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Fight Club Live TV</span>
  </div>
  <div class="block lg:hidden">
    <button class="burger flex items-center px-3 py-2 border rounded text-white-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Login</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
        <NuxtLink to="/" class="links block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-400 mr-4">Home</NuxtLink>
        <NuxtLink to="/watch" class="links block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-400 mr-4">Watch</NuxtLink>
        <NuxtLink to="/about" class="links block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-400 mr-4">About</NuxtLink>
        <NuxtLink to="/contact" class="links block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-400 mr-4">Contact</NuxtLink>
    </div>
    
    <div v-if="user == null">
      <NuxtLink to="../signup" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-gray-500 mt-4 lg:mt-0">Signup</NuxtLink>
      <NuxtLink to="../login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-gray-500 mt-4 lg:mt-0">Login</NuxtLink>
    </div>
    <div class="text-white" v-else>
      <p>Hi <NuxtLink to="./user/me/"> {{ user.username }}</NuxtLink> </p>
      <button @click="onClick()" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-gray-500 mt-4 lg:mt-0">Logout</button>
    </div>
    
  </div>

</nav>
</div>
</template>
<script setup>
import ClientMobileMenu from "./clientMobileMenu.vue";

const user = useStrapiUser()


const { logout } = useStrapiAuth()
const router = useRouter()

const onClick = () => {
  logout()

  router.push('/')
}
</script>