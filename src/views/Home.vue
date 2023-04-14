<script setup>
import Cards from '../components/Cards.vue';
import Homesection from '../components/Homesection.vue';
import NavBar from '../components/NavBar.vue';

</script>

<template>
      <NavBar></NavBar>
      <div class="background">
   <Homesection></Homesection>
</div>
<br>
   <div class="cards">
<Cards></Cards>

</div>
</template>