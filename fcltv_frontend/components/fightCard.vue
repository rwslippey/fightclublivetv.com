<template>
      <!-- Fight Card for Boxing Matches -->
<div class="lg:w-auto content-center">
<div class="grid grid-cols-5 gap-4 p-8 bg-gray-100 rounded-lg shadow-md">
    <!-- Fighter 1 Image -->
    <div class="col-span-1">
        <img src="../img/fighter1-image.jpg" alt="Fighter 1" class="w-full h-40 object-cover rounded">
    </div>

    <!-- Fighter 1 Details -->
    <div class="col-span-1">
        <h2 class="text-xl font-semibold mb-2">Fighter 1</h2>
        <p class="text-gray-600">Age: 28</p>
        <p class="text-gray-600">Location: City, Country</p>
        <!-- Add more details as needed -->
    </div>

    <!-- VS and Fight Type -->
    <div class="col-span-1 flex items-center justify-center">
        <div class="text-center">
            <p class="text-gray-700 text-xl font-semibold">VS</p>
            <p class="text-gray-500">Title Fight</p>
            <!-- Add more details as needed -->
        </div>
    </div>

    <!-- Fighter 2 Details -->
    <div class="col-span-1">
        <h2 class="text-xl font-semibold mb-2">Fighter 2</h2>
        <p class="text-gray-600">Age: 30</p>
        <p class="text-gray-600">Location: City, Country</p>
        <!-- Add more details as needed -->
    </div>

    <!-- Fighter 2 Image -->
    <div class="col-span-1">
        <img src="../img/fighter2-image.jpg" alt="Fighter 2" class="w-full h-40 object-cover rounded">
    </div>
</div>

</div>
</template>
<script setup>
</script>