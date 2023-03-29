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
            <input placeholder="search..." class="rounded-full h-[35px] px-3 bg-gray-600 focus:outline-none" />
            <img src="@/assets/images/avatar.jpg" class="rounded-full w-[40px] h-[40px]" />
        </div>
    </header>
</template>

<script>
    export default {
    }
</script>