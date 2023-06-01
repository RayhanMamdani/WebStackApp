<template>
  <section class="msger">
  

    <main class="msger-chat">
      <div v-for="(msg, index) in messages" :key="index" :class="msg.type + '-msg'">
  <div class="msg-img" :style="{ backgroundImage: 'url(' + msg.avatar + ')' }"></div>

  <div v-if="msg.type === 'left'" class="msg-bubble">
    <div class="msg-info">
      <div class="msg-info-name">{{ msg.name }}</div>
      <div class="msg-info-time">{{ msg.time }}</div>
    </div>

    <div class="msg-text">{{ msg.text }}</div>
  </div>

  <div v-if="msg.type === 'right'" class="msg-bubble right-msg">
    <div class="msg-info">
      <div class="msg-info-name">{{ msg.name }}</div>
      <div class="msg-info-time">{{ msg.time }}</div>
    </div>

    <div class="msg-text">{{ msg.text }}</div>
  </div>
</div>
      
    </main>

    <form class="msger-inputarea" @submit.prevent="sendMessage">
      <input type="text" class="input msger-input" placeholder="Enter your message..." v-model="newMessage">
      <button type="submit" class="button msger-send-btn"><i class="fa-regular fa-paper-plane"></i></button>
    </form>
  </section>
</template>


<script setup>
import { ref, toRaw } from 'vue';
import axios from 'axios';

// const userInfo = ref([]);
// // const reciever = window.location.href.split('/').reverse()[0]
// userInfo.value = axios.get("http://localhost:3000/currentUser", {
//     headers: {
//         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
//       },
//   })




        
// userInfo.user = axios.get("http://localhost:3000/currentUser", {
//   headers: {
//       'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
//     },
// })

</script>

<script>
export default {


  data() {
    return {
      messages: [
        {
          type: 'left',
          avatar: 'https://image.flaticon.com/icons/svg/327/327779.svg',
          name: 'BOT',
          time: '12:45',
          text: 'Hi, welcome to SimpleChat! Go ahead and send me a message. 😄',
        },
      
      ],

      


      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        axios.get("http://localhost:3000/currentUser", {
          headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
          }).then(res =>{
            console.log("us")
            console.log(res)
              let fulfill = axios.post('http://localhost:3000/messages', {
                headers: {
                  'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                msg: {
                  sendId: res.data.user._id,
                  recId: window.location.href.split('/').reverse()[0],

                  time: currentTime,
                  text: this.newMessage
                },
                
              })
          })


        this.messages.push({
          type: 'right',
          avatar: 'https://image.flaticon.com/icons/svg/145/145867.svg',
          name: 'You',
          time: currentTime,
          text: this.newMessage,
        });


        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
:root {
  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  --msger-bg: #fff;
  --border: 2px solid #ddd;
  --left-msg-bg: #ececec;
  --right-msg-bg: #579ffb;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: var(--body-bg);
  font-family: Helvetica, sans-serif;
}

.msger {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 867px;
  margin: 25px 10px;
  height: calc(100% - 50px);
  border: var(--border);
  border-radius: 5px;
  background: var(--msger-bg);
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
}

.msger-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: var(--border);
  background: #eee;
  color: #666;
}

.msger-chat {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
.msger-chat::-webkit-scrollbar {
  width: 6px;
}
.msger-chat::-webkit-scrollbar-track {
  background: #ddd;
}
.msger-chat::-webkit-scrollbar-thumb {
  background: #bdbdbd;
}
.msg {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.msg:last-of-type {
  margin: 0;
}
.msg-img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background: #ddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}
.msg-bubble {
  max-width: 450px;
  padding: 15px;
  border-radius: 15px;
  background: var(--left-msg-bg);
}
.msg-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.msg-info-name {
  margin-right: 10px;
  font-weight: bold;
}
.msg-info-time {
  font-size: 0.85em;
}

.left-msg .msg-bubble {
  border-bottom-left-radius: 0;
  box-shadow: 1px 1px 0.25px black;


}

.right-msg {
  display: flex;
  flex-direction: row-reverse;
}

.right-msg .msg-bubble {
  background: var(--right-msg-bg);
  color: black;
  border-bottom-right-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-left: 60px;
  box-shadow: 1px 1px 0.1px black;
}

.right-msg .msg-img {
  margin: 0 0 0 0;
  margin-left: 10px;
  margin-right: 0;
}
.msger-inputarea {
  display: flex;
  padding: 10px;
  border-top: var(--border);
  background: white;
}
.msger-inputarea * {
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 1em;
}
.msger-input {
  flex: 1;
  background: white;
  border-color: black;
  outline: black;
}
.msger-send-btn {
  margin-left: 10px;
  background: rgb(0, 196, 65);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.23s;
}
.msger-send-btn:hover {
  background: rgb(0, 180, 50);
}

.msger-chat {
  background-color: #fcfcfe;
}

.msg-bubble {
  display: inline-block;
}
.msg-text {
  color: black;
}


</style>
