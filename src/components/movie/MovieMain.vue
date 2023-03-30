<template>
  <div class="mx-5 my-10">
    <MovieDescription />
    <MovieCast />
  </div>
</template>

<script>
import MovieCast from './MovieCast.vue';
import MovieDescription from './MovieDescription.vue';

export default {
    name: "movie-main",
    components: { MovieDescription, MovieCast }
}
</script>
