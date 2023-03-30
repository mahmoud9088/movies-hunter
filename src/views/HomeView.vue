<template>
    <div class="home mt-5 font-bold">
        <HomeComponent />
    </div>
</template>

<script>
    import HomeComponent from '@/components/home/HomeComponent.vue';
    export default {
        name:"home-view",
        components:{
            HomeComponent
        }
    }
</script>