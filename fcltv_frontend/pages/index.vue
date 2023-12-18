<template>
    <div>
            <hero />
    <div class="upcoming">
        <h3 class="text-6xl py-10 text-white">Live & Coming Soon</h3>
        <div class="grid sm:grid-cols-3 gap-7">
            <eventCard v-for="thisEvent in product" :product="thisEvent"/>
        </div>
    </div>
    <div class="past_events">
        <h3 class="text-3xl py-10 text-white">Past Events</h3>
        <div class="grid sm:grid-cols-3 gap-7">
            <eventCard v-for="thisEvent in pastProducts" :product="thisEvent"/>
        </div>
    </div>
    </div>
</template>

<script setup>
    const todayDate = new Date()
    console.log(todayDate.toISOString())
    const { find } = useStrapi()
    const { data: product} = await $fetch('http://localhost:1337/api/events/?filters[date][$gte]='+ todayDate.toISOString() + '&populate=*')
    
    const { data: pastProducts } = await $fetch('http://localhost:1337/api/events/?filters[date][lte]='+ todayDate.toISOString() + '&populate=*')

</script>

<style scoped>

</style>