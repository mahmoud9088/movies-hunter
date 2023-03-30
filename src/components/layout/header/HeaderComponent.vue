<template>
    <header class="flex justify-between items-center mx-5 border-b-2 border-gray-500">
        <img src="@/assets/images/logo.png" />
        <ul class="flex gap-5">
            <li>

                <router-link to="/">
                
                        Home
                 
                </router-link>
            </li>
            <li>
            <router-link to="/movies">
                    Movies
                </router-link>
            </li>
            <li>
            <router-link to="/profile">
                    Profile
                </router-link>
            </li>
        </ul>

        <div class="flex gap-5 items-center">
            <div class="relative">

                <div class="inline-flex items-center gap-2 rounded-full h-[35px] px-3 bg-gray-600 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input placeholder="search..." class="bg-transparent focus:outline-none" />
                </div>
                <div v-if="false" class="absolute top-10 rounded bg-gray-800 left-0 p-3 w-full">
                   <ul class="flex flex-col divide-y-2 divide-gray-500">
                    <li class="inline-flex gap-4 items-center py-2">
                        <img src="@/assets/images/joker.jpg" class="h-[50px] w-auto" />
                        <h4>Joker</h4>
                    </li>
                    <li class="inline-flex gap-4 items-center py-2">
                        <img src="@/assets/images/joker.jpg" class="h-[50px] w-auto" />
                        <h4>Joker</h4>
                    </li>
                    <li class="inline-flex gap-4 items-center py-2">
                        <img src="@/assets/images/joker.jpg" class="h-[50px] w-auto" />
                        <h4>Joker</h4>
                    </li>
                   </ul>
                </div>
            </div>
            <img src="@/assets/images/avatar.jpg" class="rounded-full w-[40px] h-[40px]" />
        </div>
    </header>
</template>

<script>
    export default {
    }
</script>