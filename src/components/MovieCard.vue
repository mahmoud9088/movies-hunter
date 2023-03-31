<template>
    <div>
        <router-link :to="`/movie/${this.movie?.id}`">
            <img :src="movieImageSrc" class="rounded-md hover:opacity-75 transition duration-150" />
        </router-link>

        <div class="py-2">
          <h4 class="capitalize text-lg pb-2">{{movie?.title}}</h4>
          <div class="flex gap-1 pb-1">
            <svg class="fill-current text-yellow-500 w-4" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star"
                />
              </g>
            </svg>

            <span class="font-normal"> {{movie?.vote_average * 10}}% | {{movie?.release_date}} </span>
          </div>
          <p class="text-sm text-gray-400 font-thin">
            <span v-for="(genreId , index) in movie.genre_ids" :key="genreId">{{ movieGenresByIds(genreId , index) }}</span>          
          </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "movie-card",
//         data:function(){
// return{
//   movieGenres:[]
// }
//         },
        props:["movie" , "genres"],
        computed:{
          movieImageSrc: function(){
            return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
          },
       
          // movieGenresByIds:function(){
          //   console.log(genreId)

          //   return genreId
          // }
          
        },
        methods:{
          movieGenresByIds:function(genreId , index){
            const movieGenre = this.genres.find(({id})=>id === genreId)
            // console.log("hejjjjj", this.genres)
            return index === this.movie.genre_ids.length -1 ? `${movieGenre?.name}`:`${movieGenre?.name}, `
          }
        },
        mounted(){
          console.log(this.genres , 'genresgenresgenresgenres')
        }
    }
</script>