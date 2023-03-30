<template>
  <section class="mx-4">
    <h2 class="uppercase text-yellow-600 font-semibold text-xl">
      popular movies
    </h2>
    <div class="grid grid-cols-4 gap-10 py-5">
            <MovieCard />

     <MovieCard />
     <MovieCard />
     <MovieCard />
    </div>
  </section>
</template>

<script>
    import MovieCard from '../MovieCard.vue';
export default {
    components:{
        MovieCard
    }
}
</script>
