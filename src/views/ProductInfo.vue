<script setup>
// import { response } from 'express';
import CardInfo from '../components/CardInfo.vue'
import Navbar from '../components/NavBar.vue'
import axios from 'axios';
import { ref } from 'vue';
import {onMounted } from 'vue';

let params = new URLSearchParams(window.location.search);
let  searchParam = params.get('id');
console.log(searchParam);
const productInfo = ref([]);
const userInfo = ref([]);

let user = ref(null); // Initialize with null or any default value

onMounted(() => {
  axios.get("http://localhost:3000/currentUser", {
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
    .then(response => {
      user.value = response.data; // Store the fetched user data in the user ref
     user = JSON.parse(JSON.stringify(user));
     user = user._value.user.isAdmin
     console.log(user)

    })
    .catch(error => {
      console.log(error);
    });
});
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
      userInfo.user = axios.get("http://localhost:3000/userById", {
          params: {
            id: productInfo.value.user
          }
        }).then(response => {
          userInfo.value = response.data;
          // console.log("tkjsdhfk")
          // console.log(userInfo.value.user)
      })



    })
    .catch((error) => {
      console.log(error);
    });


}
performSearch();
console.log(productInfo)
console.log(productInfo.product_name)



</script>

<template>
    <Navbar></Navbar>
<CardInfo :redirect="user" :image="productInfo.product_image" :price="productInfo.price" :title="productInfo.product_name" :description="productInfo.description" :userId="productInfo.user" :name="userInfo.user.name"></CardInfo>

</template> 