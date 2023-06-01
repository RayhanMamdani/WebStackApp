<script setup>
    import CardsTemporary from '../components/CardsTemporary.vue';
    import NavBar from '../components/NavBar.vue'

</script>

<template>
    <NavBar></NavBar>
    <h1 style="margin-left: 30px;">My Products:</h1>
    <hr>
    <div class="card-container">
        <CardsTemporary :isDisplayed="'block'"></CardsTemporary>
        <CardsTemporary :isDisplayed="'block'"></CardsTemporary>
        <CardsTemporary :isDisplayed="'block'"></CardsTemporary>
        <CardsTemporary :isDisplayed="'block'"></CardsTemporary>
    </div>
      
</template>