<template>
<div>
<Head>
    <Link rel="stylesheet" href="https://vjs.zencdn.net/7.20.3/video-js.css"/>
    <Script type="text/javascript" src="https://vjs.zencdn.net/7.20.3/video.min.js"/>
</Head>
<div>
<video
    id="my-video" class="video-js vjs-16-9" data-setup='{"controls": true, "autoplay": true, "preload": "auto"}'>
    <source src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" type="application/x-mpegURL">
</video>
</div>
</div>

</template>
<script setup>
    const { findOne } = useStrapi()
    const { product } = defineProps(['product'])
   // console.log(product)

    //const response = await findOne('video', )
    //console.log(response.cdnUrl)
    


</script>