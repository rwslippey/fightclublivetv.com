<template>
    <div>

        <div class="max-w-sm rounded overflow-hidden shadown-lg">

            <a :href="productLink"><img class="w-full rounded-lg " :src="coverImage" alt="Sunset in the mountains"></a>

            <div class="px-6 py-4">
                <div class="text-white font-bold text-xl mb-2">{{ product.name }} </div>
                <div class="text-white font-bold text-lg mb-2">{{ displayDate }} | {{ displayTime }}</div>
                
                <div class="text-white text-md mb-2">
                    <span>Kickboxing </span>
                    <span>Muay Thai</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const { product } = defineProps(['product'])

    const coverImage = 'http://localhost:1337' + product.cover_image.url
    const eventDate = new Date(product.date)
    const displayDate = eventDate.toLocaleDateString('en-US', {month:'short', day:'numeric'})

    const displayTime = eventDate.toLocaleString('en-US',{hour:'numeric', minute:'numeric', timeZoneName:'short'})
    const productLink = 'http://localhost:3000/watch/' + product.slug
</script>