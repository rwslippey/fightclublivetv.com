<template>
     <div class="text-white w-4/5 mx-auto md:w-1/2 text-center my-12">
       <h1 class="text-gray-900 font-bold text-2xl md:text-4xl mt-5">Signup</h1>
<form @submit.prevent="signIn">
         <div class="text-gray-900">
           <input
             v-model="email"
             class="p-3 my-5 border w-full"
             type="text"
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
             Login
           </button>

         </div>
</form>
     </div>
        </template>


<script setup>
  const client = useSupabaseClient();
  const router = useRouter();

  const email = ref('')
  const password = ref('')
  
  async function signIn(){
    try {
      const { error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      router.push("/user/me");
    } catch (error) {
      errorMsg.value = error.message;
    }
  }
</script>
<style></style>