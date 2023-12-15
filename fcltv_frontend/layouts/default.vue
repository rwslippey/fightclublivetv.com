<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav>
                <NuxtLink to="/">Logo</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/watch">Watch</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!--- Output the page content -->
        <div>
            <slot />
        </div>
    </div>
</template>
<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>