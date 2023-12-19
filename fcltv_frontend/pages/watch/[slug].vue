<template>
    <div class="text-white">

      <div v-if="!!user">
        <ClientOnly>
            <videoPlayer :product="product" class="my-50"></videoPlayer>
        </ClientOnly>
      </div>
  <div class=" inline-block grid grid-cols-1 h-screen md:grid-cols-2 gap-8">
    <img :src="coverImage" alt="Event Image" class="w-full md:w-auto h-auto md:h-200 rounded-lg">
    <!-- Right Column (Event Details) -->
    <div class="lg:pl-10 lg:max-w-2xl lg:h-auto lg:mt-40">
      <h1 class="text-3xl font-bold mb-4">{{ productDetails.name }} Live Stream</h1>
      <p class="mb-2 text-2xl">Brought to you by: {{ productDetails.promoter.promoter_name }}</p>
      <p class="mb-2 text-2xl">Date: {{ buildDisplayDate(productDetails.date)[0] }}</p>
      <p class="mb-2 text-2xl">Start Time: {{ buildDisplayDate(productDetails.date)[1]}}</p>
      <div class="content-center w-auto buy-button py-10">
        <span class="mb-2 text-2xl pr-3">Live Stream! ${{ productDetails.price }}</span>
      <button class="inline-block text-xl px-4 py-2 m-auto leading-none border rounded text-red-500 border-white hover:border-red hover:text-red-900 hover:bg-white mt-4 lg:mt-0">Buy Now</button>
      
      </div>
    </div>
  </div>
<fightCard/>


    </div>
</template>

<script setup>
  

    const { slug } = useRoute().params // Gets paramaters from the route
    const { findOne } = useStrapi()
    const user = useStrapiUser()

    const { data: product} = await $fetch("http://localhost:1337/api/events/?filters[slug][$eq]=" + slug)
    const { data: productDetails } = await findOne('events', product[0].id, { populate: '*'})

    const coverImage = 'http://localhost:1337' + productDetails.cardImage.formats.medium.url
    const backgroundImage = 'background:url(' + coverImage + ');'

    function buildDisplayDate(eventDate){
        const eventDateObj = new Date(eventDate)
        const displayDate = eventDateObj.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'})
        const displayTime = eventDateObj.toLocaleString('en-US',{hour:'numeric', minute:'numeric', timeZoneName:'short'})
      return [displayDate, displayTime]
    }

    function extractCategoryTitles(data) {
    if (!data || !data.categories || !Array.isArray(data.categories)) {
        return []; // Return an empty array if data is invalid or categories array is missing
    }

    return data.categories.map(category => category.categoryTitle);

    }

    const categoryTitles = extractCategoryTitles(productDetails);


    let i
    let catDisplay = ""
    for (i = 0; i < categoryTitles.length; i++){
        catDisplay = categoryTitles[i] + " " + catDisplay
    }


  useSeoMeta({
    title: productDetails.categories[0].categoryTitle + ' Live Stream | ' + productDetails.name,
    description: productDetails.meta_description ,
    path: productDetails.slug,
  })
  
  useSchemaOrg([
    defineEvent({
      name: productDetails.name,
      location: [
        {'@type':'VirtualLocation',
        url:'https://localhost:3000/' + slug},
        {
        '@type':'place',
        name: productDetails.venue.locationName,
        address: [{
          streetAddress: productDetails.venue.streetAddress,
          addressLocality: productDetails.venue.addressLocality,
          postalCode: productDetails.venue.postalCode,
          addressRegion: productDetails.venue.addressRegion,
          addressCountry: productDetails.venue.addressCountry,
        }]
        }],
      image: [
        coverImage
      ],
      organizer: {
          name: productDetails.promoter.promoter_name,
          url: productDetails.promoter.promoter_url
      },
      offers: {
        price: productDetails.price,
        url: 'http://localhost:3000/' + productDetails.slug,
        validFrom: productDetails.publishedAt,
      },
      description: productDetails.Description,
      startDate: productDetails.date,
      eventStatus: 'EventScheduled',
      eventAttendanceMode: 'MixedEventAttendanceMode',
      isAccessibleForFree: false
    })
  ])

</script>

<style scoped>

</style>