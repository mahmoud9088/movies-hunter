<template>
    <div class="flex flex-col gap-5  py-16">
       <h2 class="capitalize text-3xl font-extrabold">Images</h2>
 
       <div class="grid grid-cols-5 gap-10">
         <div v-for="( image ,index ) in images" :key="index">
         <img :src="`https://image.tmdb.org/t/p/w500/${image?.file_path}`" class="hover:opacity-75 transition duration-150"  />
       </div>
     </div>
     </div>
 </template>
 
 <script>
 export default {
     name: "movie-images",
     props:["images"]
 }
 </script>