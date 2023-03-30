<template>
  <div class="mx-5 my-10">
    <MovieDescription />
    <MovieCast />
    <MovieImages />
  </div>
</template>

<script>
import MovieCast from './MovieCast.vue';
import MovieDescription from './MovieDescription.vue';
import MovieImages from './MovieImages.vue';

export default {
    name: "movie-main",
    components: { MovieDescription, MovieCast, MovieImages }
}
</script>
