<template>
    <div class="text-white">
        {{ user.username }}
        {{ user.email }}
    </div>
</template>
<script setup>
const user = useStrapiUser()

</script>