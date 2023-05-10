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