<template>
    <div>
        <PopularMovies />
        
    <div class="w-full text-center">
        <span class="text-lg font-thin p-5">Loading...</span>
    </div>

    </div>

</template>

<script>
    import PopularMovies from './PopularMovies.vue';
    export default {
        components:{
            PopularMovies
        }
    }
</script>