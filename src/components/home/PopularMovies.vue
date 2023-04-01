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
            genres:[],
            currentPage: 1,
            scrollTimer: null
        }
    },
    components:{
        MovieCard
    },
    methods:{
        getPopularMovies: async function(){
            try {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${this.currentPage}&&api_key=61c5f9dd2a10497373373801b47bc1c2`)
                console.log(data)
                // this.movies = [...this.movies , ...data.results]
                // or you can use push method
                this.movies.push(...data.results)
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
        },
        handleScroll() {
    clearTimeout(this.scrollTimer);
    this.scrollTimer = setTimeout(() => {
      let bottomOfPage = false;
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        bottomOfPage = true;
      }
      // Do something if you've reached the bottom of the page
      if (bottomOfPage) {
        console.log('You have reached the bottom of the page!');
        this.currentPage += 1
      }
    }, 200); // Set a delay of 200 milliseconds
  }
      
    },
    mounted: function() {  
            // const res = await client.get("/movie/popular")
            this.getPopularMovies()
            this.getAllGenres()
            window.addEventListener('scroll', this.handleScroll);
    },
    watch:{
        currentPage: function () {
            this.getPopularMovies()
        }
    },
    beforeUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
  clearTimeout(this.scrollTimer);
},
}
</script>
