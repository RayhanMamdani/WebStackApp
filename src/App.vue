<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue';
import NavBar from './components/NavBar.vue';
import Cards from './components/Cards.vue';
import Home from './views/Home.vue';
</script>
<template>
  <header>
    <NavBar></NavBar>
  </header>

  <RouterView />
</template>
<style scoped>

</style>
