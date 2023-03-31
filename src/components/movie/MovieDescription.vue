<template>
  <div class="flex gap-40 py-16 border-b-2 border-gray-500">
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="max-w-md" />

    <div class="flex flex-col gap-5">
      <h2 class="capitalize text-2xl font-extrabold">{{ movie?.title }}</h2>

      <div>
        <div class="flex gap-1 pb-1">
          <svg class="fill-current text-yellow-500 w-4" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          <span class="font-normal"> 47% | {{movie?.release_date}} </span>
        </div>
        <span class="text-sm text-gray-400 font-thin">
          <span v-for="(genre , index) in movie.genres" :key="genre.id">{{ genre?.name }}
          <span v-if="(index != movie.genres.length-1)">, </span>
          </span>
        </span>
      </div>

      <p>
       {{ movie?.overview }}
      </p>

      <div>
        <h4 class="capitalize text-lg font-semibold">Featured cast</h4>

        <div class="flex gap-10 pt-3">
          <div class="flex flex-col">
            <h5 class="text-md">Mahmoud salman</h5>
            <span class="text-sm text-gray-300"> producer </span>
          </div>
          <div class="flex flex-col">
            <h5 class="text-md">Mahmoud salman</h5>
            <span class="text-sm text-gray-300"> producer </span>
          </div>
        </div>
      </div>

      <div class="flex gap-5 mt-7">
        <button
          class="inline-flex gap-2 rounded px-10 py-5 bg-yellow-500 text-black font-semibold"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>

          <span> play trailer </span>
        </button>
        <button
          class="inline-flex gap-2 rounded px-10 py-5 bg-yellow-500 text-black font-semibold"
        >
          <img src="@/assets/images/heart-white.png" alt="" />
          <span> favourite </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie-description',
  props:["movie"]
}
</script>
