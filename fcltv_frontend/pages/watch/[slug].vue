<template>
    <div>

        <img :src="coverImage">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>Pay-Per-View Price ${{ product.price }}</p>
        
    </div>
</template>

<script setup>
    const { slug } = useRoute().params // Gets paramaters from theroute

    const { findOne } = useStrapi()

    const { data: product} = await findOne('events', '1',{populate:'*'})

    const coverImage = 'http://localhost:1337' + product.cover_image.url
    
</script>

<style scoped>

</style>