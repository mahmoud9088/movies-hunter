<template>
    <div v-show="openModal" class="absolute top-1/2 left-1/2 translate-x-[-50%] bg-gray-700">
        <div class="relative p-10">
            <button @click="handleCloseModal" class="absolute top-1 right-3">&times;</button>
            <iframe class="w-full h-full" :src="media"></iframe>
        </div>

    </div>

</template>

<script>
    export default {
        name: "media-modal",
        props:["openModal" , "media"],
        methods:{
            handleCloseModal: function () {
                this.$emit("closeModal" , false)
            }
        }
    }
</script>