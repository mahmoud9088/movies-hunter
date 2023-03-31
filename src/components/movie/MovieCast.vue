<template>
   <div class="flex flex-col gap-5  py-16 border-b-2 border-gray-500">
      <h2 class="capitalize text-3xl font-extrabold">Cast</h2>

      <div class="grid grid-cols-5 gap-10">
        <div v-for="actor in cast" :key="actor?.cast_id" v-show="actor?.profile_path">
        <img :src="`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`" class="rounded"/>
        <h4 class="capitalize text-lg py-3">{{ actor?.name }}</h4>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "movie-cast",
    props:["cast"],
}
</script>