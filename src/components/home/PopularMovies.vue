<template>
  <section class="mx-4">
    <h2 class="uppercase text-yellow-600 font-semibold text-xl">
      popular movies
    </h2>
    <div class="grid grid-cols-4 gap-10 py-5">
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" :genres="genres"/>
    </div>
  </section>
</template>

<script>
    import MovieCard from '../MovieCard.vue';
    // import client from '@/services/axiosClient';
import axios from 'axios';
export default {
    data:function(){
        return{
            movies:[],
            genres:[]
        }
    },
    components:{
        MovieCard
    },
    methods:{
        getPopularMovies: async function(){
            try {
                const {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=61c5f9dd2a10497373373801b47bc1c2")
                console.log(data)
                this.movies = data.results
            } catch (error) {
                console.log(error)
                
            }
        },
        getAllGenres: async function(){
            try {
                const {data} = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=61c5f9dd2a10497373373801b47bc1c2")
                console.log(data?.genres)
                this.genres = data?.genres
            } catch (error) {
                console.log(error)
                
            }
        }
    },
    mounted: function() {  
            // const res = await client.get("/movie/popular")
            this.getPopularMovies()
            this.getAllGenres()
        
    },
}
</script>
