<template>
    <div>
       <eventCard v-for="thisEvent in product" :product="thisEvent"/>
    </div>
</template>

<script setup>
    const { find } = useStrapi()

    const { data: product} = await find('events',{populate:'*'})

</script>

<style scoped>

</style>