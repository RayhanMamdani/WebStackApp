<script setup>
import NavBar from '../components/NavBar.vue'
// import Messages from '../components/Messages.vue'
</script>

<template>
    <NavBar></NavBar>
    <div class="container clearfix">
      <div class="people-list" id="people-list">
        <div class="search">
          <input type="text" placeholder="search" />
          <i class="fa fa-search"></i>
        </div>
        <ul class="list">
          <contact v-for="(contact, index) in contacts" :key="index" :name="contact.name" :avatar="contact.avatar" :status="contact.status" />
        </ul>
      </div>
  
      <chat :messages="messages" />
  
    </div> <!-- end container -->
  </template>
  
  <script>
  import Contact from '../components/Contact.vue';
  import Chat from '../components/Messages.vue';
  
  export default {
    components: {
      Contact,
      Chat,
    },
    data() {
      return {
        contacts: [
          { name: 'Vincent Porter', avatar: 'chat_avatar_01.jpg', status: 'online' },
          { name: 'Aiden Chavez', avatar: 'chat_avatar_02.jpg', status: 'offline' },
          { name: 'Mike Thomas', avatar: 'chat_avatar_03.jpg', status: 'online' },
          { name: 'Erica Hughes', avatar: 'chat_avatar_04.jpg', status: 'online' },
          { name: 'Ginger Johnston', avatar: 'chat_avatar_05.jpg', status: 'online' },
          { name: 'Tracy Carpenter', avatar: 'chat_avatar_06.jpg', status: 'offline' },
          { name: 'Christian Kelly', avatar: 'chat_avatar_07.jpg', status: 'offline' },
          { name: 'Monica Ward', avatar: 'chat_avatar_08.jpg', status: 'online' },
          { name: 'Dean Henry', avatar: 'chat_avatar_09.jpg', status: 'offline' },
          { name: 'Peyton Mckinney', avatar: 'chat_avatar_10.jpg', status: 'online' },
        ],
        messages: [
          { text: 'Hi Vincent, how are you? How is the project coming along?', isMe: false, time: '10:10 AM' },
          { text: 'Are we meeting today? Project has been already finished and I have results to show you.', isMe: true, time: '10:12 AM' },
          { text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?', isMe: false, time: '10:14 AM' },
          { text: 'Actually everything was fine. I\'m very excited to show this to our team.', isMe: true, time: '10:20 AM' },
          { text: '', isMe: false, time: '10:31 AM' },
        ],
      };
    },
  };
  </script>