<script setup>
    import CardsTemporary from '../components/CardsTemporary.vue';
    import NavBar from '../components/NavBar.vue'
  import Cards from '../components/Cards.vue';
    import axios from 'axios';

import { ref, onMounted } from 'vue';

let data = '';
let products = ref([]);

const userId = window.location.href.split('/').reverse()[0]

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `http://localhost:3000/users/${userId}`,
  headers: { },
  data : data
};

onMounted(async () => {
  try {
    const response = await axios.request(config);
    products.value = response.data.products;
    console.log(products.value);
  } catch (error) {
    console.log(error);
  }
});



</script>

<template>
    <NavBar></NavBar>
    <h1 style="margin-left: 30px;">My Products:</h1>
    <hr>
    <div class="card-container">
      <Cards :isDisplayed="'block'" v-for="product in products" :key="product.id" :product="product"></Cards>

        <!-- <CardsTemporary :isDisplayed="'block'"></CardsTemporary>
        <CardsTemporary :isDisplayed="'block'"></CardsTemporary>
        <CardsTemporary :isDisplayed="'block'"></CardsTemporary>
        <CardsTemporary :isDisplayed="'block'"></CardsTemporary> -->
    </div>
      
</template>