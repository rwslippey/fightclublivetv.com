<template>

    <div class="text-white">
        <Head>
            <Title>{{ product.name }} {{ catDisplay }} Live Stream | Fight Club Live TV</Title>
            <Meta name="description" :content="product.meta_description"/>
        </Head>

        <img :src="coverImage">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description[0].children[0].text }}</p>
        <p>Pay-Per-View Price ${{ product.price }}</p>


        
    </div>
</template>

<script setup>

    const { slug } = useRoute().params // Gets paramaters from theroute

    const { findOne } = useStrapi()
    

    //const { data: product } = await $fetch("http://localhost:1337/api/events?filters[slug][$eq]=Gut-Check-Championship-Series&populate='*'")
    const { data: product } = await findOne('events', slug)
    console.log(product)
    const coverImage = 'http://localhost:1337' + product.cover_image.url





    function extractCategoryTitles(data) {
    if (!data || !data.categories || !Array.isArray(data.categories)) {
        return []; // Return an empty array if data is invalid or categories array is missing
    }

    return data.categories.map(category => category.categoryTitle);

    }

    const categoryTitles = extractCategoryTitles(product);


    let i
    let catDisplay = ""
    for (i = 0; i < categoryTitles.length; i++){
        //console.log((i+1) + ": " + categoryTitles[i])
        catDisplay = categoryTitles[i] + " " + catDisplay
    }


</script>

<style scoped>

</style>