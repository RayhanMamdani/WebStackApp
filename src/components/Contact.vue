<template>
    <li class="clearfix">
      <img :src="'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/' + avatar" :alt="name" />
      <div class="about">
        <div class="name">{{ name }}</div>
        <div class="status">
          <i :class="'fa fa-circle ' + statusClass"></i> {{ status }}
        </div>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      avatar: String,
      status: String,
    },
    computed: {
      statusClass() {
        return this.status === 'online' ? 'online' : 'offline';
      },
    },
  };
  </script>

  <style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  background: #C5DDEB;
  font: 14px/20px "Lato", Arial, sans-serif;
  padding: 40px 0;
  color: white;
}

.container {
  margin: 0 auto;
  width: 750px;
  background: #444753;
  border-radius: 5px;
}

.people-list {
  width:260px;
  float: left;
}

.people-list .search {
  padding: 20px;
}

.people-list input {
  border-radius: 3px;
  border: none;
  padding: 14px;
  color: white;
  background: #6A6C75;
  width: 90%;
  font-size: 14px;
}

.people-list .fa-search {
  position: relative;
  left: -25px;
}

.people-list ul {
  padding: 20px;
  height: 770px;
}

.people-list ul li {
  padding-bottom: 20px;
}

.people-list img {
  float: left;
}

.people-list .about {
  float: left;
  margin-top: 8px;
  padding-left: 8px;
}

.people-list .status {
  color: #92959E;
}

.chat {
  width: 490px;
  float:left;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;
}

.chat .chat-header {
  padding: 20px;
  border-bottom: 2px solid white;
}

.chat .chat-header img {
  float: left;
}

.chat .chat-header .chat-about {
  float: left;
  padding-left: 10px;
  margin-top: 6px;
}

.chat .chat-header .chat-with {
  font-weight: bold;
  font-size: 16px;
}

.chat .chat-header .chat-num-messages {
  color: #92959E;
}

.chat .chat-header .fa-star {
  float: right;
  color: #D8DADF;
  font-size: 20px;
  margin-top: 12px;
}

.chat .chat-history {
  padding: 30px 30px 20px;
  border-bottom: 2px solid white;
  overflow-y: scroll;
  height: 575px;
}

.chat .chat-history .message-data {
  margin-bottom: 15px;
}

.chat .chat-history .message-data-time {
  color: #92959E;
  padding-left: 6px;
}

.chat .chat-history .message {
  color: white;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 30px;
  width: 90%;
  position: relative;
}

.chat .chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #86BB71;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .my-message {
  background: #86BB71;
}

.chat .chat-history .other-message {
  background: #94C2ED;
}



</style>