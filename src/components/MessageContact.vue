<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ContactCards from './ContactCards.vue'
let user = ref(null); // Initialize with null or any default value
let names = ref([]);
let userid = ref([]);

onMounted(() => {
  axios.get("http://localhost:3000/currentUser", {
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
    .then(async response => {
      user.value = response.data; // Store the fetched user data in the user ref
      console.log(user)
  // console.log(user.value.messages.)
      for (let i = 0; i < user.value.user.messages.length; i++){
        console.log(user.value.user.messages[i].recipient);
        let res = await axios.get(`http://localhost:3000/users/${user.value.user.messages[i].recipient}`)
        // console.log(res.data)
        userid.value.push(res.data.name);
        console.log(res.data.name);
      }

    })
    .catch(error => {
    });
});

</script>

<template>
    <ContactCards v-if="userid.length > 0" v-for="name in userid" :username="name"></ContactCards>
    <h1 v-else>Send your first message!</h1>
</template>

<style>
    .username{
        font-weight: bold;
        font-size: 16px;
    }
    .message-card{
        margin: 0;
    }

    h1 {
      margin-left: 5%;
      font-size: 30px;
    }

</style>

<script >

</script>