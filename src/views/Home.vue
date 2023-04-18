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
<div class="cards">
   <Cards></Cards>
</div>


</div>
</template>