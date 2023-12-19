<template>
    <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto flex flex-wrap justify-between">
        <!-- Column 1 -->
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
            <h3 class="text-xl font-semibold mb-3">Company</h3>
            <ul class="list-none">
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                <li><NuxtLink to="/terms">Terms Of Service</NuxtLink></li>
                <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
                <!-- Add more links or content as needed -->
            </ul>
        </div>

        <!-- Column 2 -->
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
            <h3 class="text-xl font-semibold mb-3">Products</h3>
            <ul class="list-none">
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
                <!-- Add more links or content as needed -->
            </ul>
        </div>

        <!-- Column 3 -->
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
            <h3 class="text-xl font-semibold mb-3">Connect</h3>
            <ul class="list-none">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <!-- Add more social media links or content as needed -->
            </ul>
        </div>
    </div>
</footer>
</template>