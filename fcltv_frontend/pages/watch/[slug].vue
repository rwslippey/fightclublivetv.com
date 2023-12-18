<template>
    <div class="text-white">
        <Head>
            <Title>{{ product.name }} {{ catDisplay }} Live Stream | Fight Club Live TV</Title>
            <Meta name="description" :content="product.meta_description"/>
        </Head>

      <div v-if="!!user">
        <ClientOnly>
            <videoPlayer :product="product" class="my-50"></videoPlayer>
        </ClientOnly>
      </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Left Column (Image) -->
    <div>
      <img :src="coverImage" alt="Event Image" class="w-full md:w-auto h-auto md:h-200 rounded-lg">
      <!-- Adjust the width (w-) and height (h-) classes as needed -->
    </div>
    
    <!-- Right Column (Event Details) -->
    <div class="max-w-md">
      <h2 class="text-3xl font-bold mb-4">{{ product.name }}</h2>
      <p class="mb-2 text-xl">Description: {{ product.description[0].children[0].text }}</p>
      <p class="mb-2 text-xl">Date: January 1, 2024</p>
      <p class="mb-2 text-xl">Start Time: 7:00 PM</p>
      <p class="mb-2 text-xl">Live Stream ${{ product.price }}</p>
    </div>
  </div>

  <!-- Fight Card for Boxing Matches -->
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4">Fight Card</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Sample Fight Card Item -->
      <div class="border rounded p-4">
        <h3 class="text-lg font-semibold mb-2">Match 1</h3>
        <p class="text-gray-700 mb-2">Boxer A vs. Boxer B</p>
        <p class="text-gray-700 mb-2">Venue: Stadium Arena</p>
        <p class="text-gray-700 mb-2">Time: 8:00 PM</p>
      </div>

      <!-- Repeat the above structure for additional fight card items -->
      <!-- Add more <div> elements with fight details as needed -->
    </div>
  </div>
 
    </div>
</template>

<script setup>

    const { slug } = useRoute().params // Gets paramaters from theroute

    const { findOne } = useStrapi()
    const user = useStrapiUser()

    //const { data: product } = await $fetch("http://localhost:1337/api/events?filters[slug][$eq]=Gut-Check-Championship-Series&populate='*'")
    const { data: product } = await findOne('events', slug)

    const coverImage = 'http://localhost:1337' + product.cover_image.url
    const backgroundImage = 'background:url(' + coverImage + ');'






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