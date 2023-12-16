<template>
    <div>
        <h1>Slider or hero here</h1>
        <h3 class="text-6xl py-10 text-white">Live & Coming Soon</h3>
        <eventCard v-for="thisEvent in product" :product="thisEvent"/>
        <h3>Recent Events</h3>
        {{ product }}

    </div>
</template>

<script setup>
    const { find } = useStrapi()


    const { data: product} = await $fetch('http://localhost:1337/api/events/?filters[date][$gte]=2023-12-15T23:00:00.000Z&populate=*')
    console.log(product)
</script>

<style scoped>

</style>