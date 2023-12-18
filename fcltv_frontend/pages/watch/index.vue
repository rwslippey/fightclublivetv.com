<template>
<div>
    <div class="grid sm:grid-cols-4 gap-7">
       <eventCard v-for="thisEvent in product" :product="thisEvent"/>
       <eventCard v-for="thisEvent in product" :product="thisEvent"/>
    </div>
</div>
</template>

<script setup>
    const { find } = useStrapi()

    //const { data: product} = await find('events',{populate:'*'})
    const { data: product } = await $fetch('http://localhost:1337/api/events?sort[0]=date:desc&populate=*')

    useHead({
        title:"Watch | Fight Club Live TV",
        meta: [
            {name: 'description', content:'Watch Live combat sports including Live Boxing, Kickboxing, and Muay Thai'}
        ]
    })

</script>

<style scoped>

</style>