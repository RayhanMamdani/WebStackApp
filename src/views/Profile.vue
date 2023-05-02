<script setup>
    import NavBar from '../components/NavBar.vue'
    import Cards from '../components/Cards.vue'

</script>

<style>
    h1{
        font-size: 30px;
    }
    .productsSelling{
        margin-left: 30px;
    }
</style>

<template>
 <NavBar></NavBar>
 <div class="columns">
    <div class="column is-one-third">
        <img src="../images/profile.png" alt="..."> 
    </div>
    <div class="column">
        <h1>Username</h1>
        <h2>City:</h2>
        <h2>Date Joined:</h2>
        <h2>Age</h2>
        <h2>Products Sold</h2>
    </div>
 </div>
 <h1 class="productsSelling">This User is selling:</h1>
 <div class="card-container">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
 
        </div>
</template>

