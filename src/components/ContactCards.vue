<script>
import { ref, onMounted} from 'vue';
import axios from 'axios';
let user = ref(null); // Initialize with null or any default value


export default {
  name: 'ContactCards',
    props: {
    username: {
      type: Object,
      default: 'none'
    }, methods: {
      handleId(event){
        console.log("Wsfkjs;lkadj afkl;sda sldkfj kljasdlkfjalks jdflkajsldkjflkasjd fllaskd jfl;kjsdlkfjl akjaslkdjf lkasdlkfjaslkd jkliajskljfjweiof haweiouhfgashndkjlfh aiushef hakjsdhf ahuiserhfiahweiufghakj hdf")
        // console.log(id)
      }
    }
  }
}

</script>


<template>
    <RouterLink :to="{ path: `/Chatbox/${username._id}` }">
    <div class="card message-card" style="width: fit-content !important; height: fit-content !important;">
        <div class="card-content">
          <div class="columns">
        <div class="column is-one-fifth">
            <img src="../images/profile.png" alt="..." style="width:50px;"> 
        </div>
        </div>
            <p class="username">{{username.name}}</p>
            <p>{{ username.address }}</p>
        </div>
    </div>
  </RouterLink>
</template>