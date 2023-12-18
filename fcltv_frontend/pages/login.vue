<template>
     <div class="text-white w-4/5 mx-auto md:w-1/2 text-center my-12">
       <div v-show="error !== ''" class="text-white p-3 border">
         <p>{{ error }}</p>
       </div>
       <h1 class="text-gray-900 font-bold text-2xl md:text-4xl mt-5">Signup</h1>
<form @submit.prevent="onSubmit">
         <div class="text-gray-900">
           <input
             v-model="username"
             class="p-3 my-5 border w-full"
             type="text"
             placeholder="username"
           />
         </div>
         <div class="text-gray-900">
           <input
             v-model="password"
             class="p-3 my-5 border w-full"
             type="password"
             placeholder="password"
           />
         </div>
         <div>
           <button type="submit">
             Login
           </button>

         </div>
</form>
     </div>
        </template>


<script setup>
  const { login } = useStrapiAuth()
  const router = useRouter()
  const email = ref('')
  const username = ref('')
  const password = ref('')
  
  async function onSubmit(){
    try {
      await login({identifier: username.value, password: password.value})
      const user = useStrapiUser()
      const token = useStrapiToken()
      user.username
    } catch (e){}
    router.push('/watch')
  }
</script>
<style></style>