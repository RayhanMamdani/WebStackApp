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
    .then(response => {
      user.value = response.data; // Store the fetched user data in the user ref
      console.log(user.value.user.messages)
      console.log(user.value.user.messages.length)
      for (let i = 0; i < user.value.user.messages.length; i++){
        console.log(user.value.user.messages[i].recipient.name);
        names.value.push(user.value.user.messages[i].recipient.name);
        userid.value.push(user.value.user.messages[i].recipient);
}

    })
    .catch(error => {
      console.log(error);
    });
});
</script>

<template>
    <ContactCards v-for="name of names" :username="name"></ContactCards>
</template>

<style>
    .username{
        font-weight: bold;
        font-size: 16px;
    }
    .message-card{
        margin: 0;
    }

</style>

<script >

</script>