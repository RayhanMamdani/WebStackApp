<script setup>
    import CardsTemporary from '../components/CardsTemporary.vue';
    import NavBar from '../components/NavBar.vue'
  import Cards from '../components/Cards.vue';
    import axios from 'axios';
    const userInfo = ref('');
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

userInfo.value = axios.get("http://localhost:3000/userById", {
      params: {
        id: userId
      }
    }).then(response => {
      userInfo.value = response.data;
      console.log(userInfo)

  })

</script>

<template>
    <NavBar></NavBar>
        <div class="container">
        <div class="columns">
            <div class="column is-one-third">
                <img src="../images/profile.png" alt="..."> 
            </div>
            <div class="column userInfo">
                <h1>{{ userInfo.user.name }}</h1>

                <h2><i class="fa-solid fa-location-dot"> </i> &nbsp {{ userInfo.user.address }}</h2>
                <RouterLink :to="{ path: `/Chatbox/${userInfo.user._id}` }">
                    <button class="button"><i class="fa-solid fa-message"></i> &nbsp Send message</button>
                </RouterLink>
            </div>
        </div>
    </div>
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