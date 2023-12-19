<template>
<body class="bg-gray-950 lg:px-10 font-mono">

    <div>

        <Navbar />
        <!--- Output the page content -->
        <div>
            <slot />
        </div>
    </div>

    </body>
    <Footer/>
    
</template>
<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>