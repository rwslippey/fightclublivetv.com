<template>
     <div class="text-white w-4/5 mx-auto md:w-1/2 text-center my-12">
       <div v-show="error !== ''" class="text-white p-3 border">
         <p>{{ error }}</p>
       </div>
       <h1 class="text-gray-900 font-bold text-2xl md:text-4xl mt-5">Signup</h1>
<form @submit.prevent="onSubmit">
         <div class="text-gray-900" >
           <input
             v-model="email"
             class="p-3 my-5 border w-full"
             type="email"
             placeholder="email"
           />
         </div>
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
             Signup
           </button>

         </div>
</form>
     </div>
     <p class="text-white">{{ email }}, {{ password }}, {{ username }}</p>
        </template>


<script setup>
  const { register } = useStrapiAuth()
  const router = useRouter()
  const email = ref('')
  const username = ref('')
  const password = ref('')
  
  async function onSubmit(){
    try {
      await register({username: username.value, email: email.value, password: password.value})
    } catch (e){}
  }
</script>
<style></style>