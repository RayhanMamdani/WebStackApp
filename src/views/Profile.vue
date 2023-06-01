<script setup>
    import NavBar from '../components/NavBar.vue'
    import axios from 'axios';
    import { ref } from 'vue';
    // // import Cards from '../components/Cards.vue'
    const userInfo = ref('');
    const userId = window.location.href.split('/').reverse()[0]


    userInfo.value = axios.get("http://localhost:3000/userById", {
          params: {
            id: userId
          }
        }).then(response => {
          userInfo.value = response.data;
          console.log(userInfo)

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

        <h2><i class="fa-solid fa-location-dot"> </i> &nbsp Toronto, ON</h2>
        <p id="ratingsLabel">Ratings</p>
        <h2>4.3 ★★★★</h2>
        <h2>Date Joined: October 5th 2022</h2>

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
        <!-- <div class="card-container"> -->
          <!-- <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards> -->
 
        <!-- </div> -->
    <!-- </div>
</div> -->

</template>

