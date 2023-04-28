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
<br>
<div style="margin-left: 50px;">
<h1 style="font-weight:500;" class="is-size-3">Listed Recently</h1>
<br>
<div class="center">
<div class="card-container">
   <Cards></Cards>
   <Cards></Cards>
   <Cards></Cards>
   <Cards></Cards>
</div>
</div>

</div>
</template>