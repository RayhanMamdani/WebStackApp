<script setup>
import CardInfo from '../components/CardInfo.vue'
import Navbar from '../components/NavBar.vue'
import axios from 'axios';
import { ref } from 'vue';
let params = new URLSearchParams(window.location.search);
let  searchParam = params.get('id');
console.log(searchParam);
const productInfo = ref([]);

const performSearch = () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/products/productInfo',
    headers: { 
      'Content-Type': 'application/json'
    },
    params: {
      searchTerm: searchParam
    }
  };
  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      productInfo.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
performSearch();

</script>

<template>
    <Navbar></Navbar>
<CardInfo :price="productInfo.price" :title="productInfo.product_name" :description="productInfo.description"></CardInfo>

</template>