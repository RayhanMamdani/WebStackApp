<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
let user = ref(null); // Initialize with null or any default value

export default {
  name: 'ContactCards',
    props: {
    username: {
      type: String,
      default: 'none'
    }
  },
}

</script>


<template>
    <div v-on="" class="card message-card" style="width: fit-content !important; height: fit-content !important;">
        <div class="card-content">
            <p class="username">{{username}}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, accusantium.</p>
        </div>
    </div>
</template>