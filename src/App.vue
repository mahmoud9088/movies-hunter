<template>
  <Header />
  <router-view />
</template>

<script>

import Header from './components/layout/header/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
