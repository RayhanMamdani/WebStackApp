<script setup>
import CardInfo from '../components/CardInfo.vue'
import Navbar from '../components/NavBar.vue'
import axios from 'axios';

let params = new URLSearchParams(window.location.search);
let  searchParam = params.get('id');
console.log(searchParam);
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
    })
    .catch((error) => {
      console.log(error);
    });
}
performSearch();
</script>

<template>
    <Navbar></Navbar>
<CardInfo></CardInfo>

</template>