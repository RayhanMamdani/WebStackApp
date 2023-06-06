<script setup>
    import NavBar from '../components/NavBar.vue'
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
 import Cards from '../components/Cards.vue'
    const userInfo = ref('');
    const userId = window.location.href.split('/').reverse()[0]

    let products = ref([]);

    let data = '';

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
      })
      
      

</script>


<style scoped>
    h1{
        font-size: 30px;
    }
    .productsSelling{
        margin-left: 30px;
    }
    #ratingsLabel{
        color: gray;
        font-size: 12px;
    }
    .container{
        padding: 10px;
    }
    @media (max-width: 800px) {
        .userInfo{
            text-align: center;
        }
    }
</style>

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
 <!-- <div class="columns">
    <div class="column is-one-third">
    </div>
    <div class="column"> -->
        <h1 class="productsSelling">{{ userInfo.user.name }} is selling:</h1>
        <hr>
        <div class="card-container">
        <Cards v-for="product in products" :noBtn="false" :key="product.id" :product="product"></Cards>
    </div>
        <!-- <div class="card-container"> -->
          <!-- <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards> -->
 
        <!-- </div> -->
    <!-- </div>
</div> -->

</template>

