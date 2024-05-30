<template>
     <div class="text-white w-4/5 mx-auto md:w-1/2 text-center my-12">
       <h1 class="text-gray-900 font-bold text-2xl md:text-4xl mt-5">Signup</h1>
<form @submit.prevent="signUp">
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
        </template>


<script setup>
  const client = useSupabaseClient();
  const email = ref("")
  const password = ref(null)
  const errorMsg = ref(null);
  const successMsg = ref(null);
  
  async function signUp() {
    try {
      const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account";
  } catch (error) {
    errorMsg.value = error.message;
  }

  }
</script>
<style></style>