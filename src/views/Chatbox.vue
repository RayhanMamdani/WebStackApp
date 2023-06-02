<script setup>
import NavBar from '../components/NavBar.vue'
import Messages from '../components/Messages.vue'
import MessageContact from '../components/MessageContact.vue'


</script>


<template>
  <NavBar></NavBar>
  <div>
  </div>
  <div class="columns">
    <div class="column is-one-third">
      <MessageContact></MessageContact>

    </div>
    <div class="column">
      <div class="containercenter"> 
        <Messages></Messages>
      </div>
    </div>
  </div>

  </template>