<template>
    <div>
        <router-link to="/movie/11">
            <img src="@/assets/images/joker.jpg" class="rounded-md hover:opacity-75 transition duration-150" />
        </router-link>

        <div class="py-2">
          <h4 class="capitalize text-lg pb-2">movie name</h4>
          <div class="flex gap-1 pb-1">
            <svg class="fill-current text-yellow-500 w-4" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star"
                />
              </g>
            </svg>

            <span class="font-normal"> 47% | 2020-05-10 </span>
          </div>
          <p class="text-sm text-gray-400 font-thin">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "movie-card"
    }
</script>