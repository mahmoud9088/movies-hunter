<template>
  <div class="mx-5 my-10">
    <MovieDescription :movie="movie" />
    <MovieCast :cast="movie?.credits?.cast" />
    <MovieImages :images="movie?.images?.backdrops" />
  </div>
</template>

<script>
import axios from 'axios';
import MovieCast from './MovieCast.vue';
import MovieDescription from './MovieDescription.vue';
import MovieImages from './MovieImages.vue';

export default {
    name: "movie-main",
    data:function(){
      return {
        movie:{}
      }
    },
    components: { MovieDescription, MovieCast, MovieImages },
    async mounted(){
      this.fetchMovie()
    },
    methods:{
      fetchMovie: async function(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?append_to_response=credits,videos,images&&api_key=61c5f9dd2a10497373373801b47bc1c2`)
        this.movie = data
      }
    },
    watch:{
      // '$route.params.id'() {
      //   this.fetchMovie()
      // }

      // another way
      '$route.params.id': {
        handler() {
          this.fetchMovie()
        }
      }
    }


}
</script>
