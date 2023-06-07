<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ContactCards from './ContactCards.vue'
let user = ref(null); // Initialize with null or any default value
let names = ref([]);
let userid = ref([]);
let msgedUser = ref({});


onMounted(() => {
  axios.get("http://localhost:3000/currentUser", {
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  }).then(async response => {
      user.value = response.data; // Store the fetched user data in the user ref
      console.log(user)
      for (let i = 0; i < user.value.user.messages.length; i++){
        let res = await axios.get(`http://localhost:3000/users/${user.value.user.messages[i].recipient}`)
        userid.value.push(res.data);
      }
    }).catch(error => {
    });
});

</script>

<template>
  <br>
      <h1 id="newMessage" v-if="userid.length <= 0">Send your first message!</h1>
    <ContactCards v-else v-for="users in userid" :username="users"></ContactCards>
</template>

<style>
    .username{
        font-weight: bold;
        font-size: 16px;
    }
    .message-card{
        margin: 0;
    }

    #newMessage {
      margin-left: 5%;
      font-size: 30px;
    }

    .card-content{
      width:500px;
    }

</style>
<script>
export default {
  methods:{
    changeID(event) {
      event.preventDefault();
      this.$emit()
  }
}
}

</script>