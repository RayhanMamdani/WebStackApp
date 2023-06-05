


<template>

    <div class="card">
  <nav>
    <RouterLink to="/PostSearch">
    <svg class="arrow" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " stroke="#727272"/></svg>
    Back to Products
  </RouterLink>
    <svg class="heart" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" stroke="#727272" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" stroke="#727272"/></svg>
  </nav>
  <div class="container">
  <div class="photo">
    <img  style="margin-top: 50px;" :src="image">
    
  </div>
  <div class="description">
    <h2>{{ title }}</h2>
    <h1>${{ price }}</h1>
    <p>{{ description }}</p>
    <button>Add to Cart</button>
    <button>Wishlist</button>
    <div class="columns">
      <div class="column">
          <h4 @click="redirectToProfile">
            {{ name }}
          </h4>

</div>
<div class="column seller">
    
    <!-- <figure class="image is-64x64">
  <img class="is-rounded" src="../images/pfp.png">
</figure> -->
</div>
</div>


 
</div>
</div>
</div>

</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300,500,700);

* {
  box-sizing: border-box;
}

body {
  background: #aedaa6;
  font-family: "Raleway";
}

.Map--front {
  position: relative;
  z-index: 1;
}

.card {
  width: 650px;
  position: absolute;
  background: white;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card nav {
  width: 100%;
  color: #727272;
  text-transform: uppercase;
  padding: 20px;
  border-bottom: 2px solid #efefef;
  font-size: 12px;
}

.card nav svg.heart {
  height: 24px;
  width: 24px;
  float: right;
  margin-top: -3px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card nav svg.heart:hover {
  fill: red;
}

.card nav svg.arrow {
  float: left;
  height: 15px;
  width: 15px;
  margin-right: 10px;
}

.card .photo {
  padding: 30px;
  width: 45%;
  text-align: center;
  float: left;
}

.card .photo img {
  max-height: 240px;
}

.card .description {
  padding: 30px;
  float: left;
  width: 55%;
  border-left: 2px solid #efefef;
}

.card .description h1 {
  color: #515151;
  font-weight: 300;
  padding-top: 15px;
  margin: 0;
  font-size: 30px;
  font-weight: 300;
}

.card .description h2 {
  color: #515151;
  margin: 0;
  text-transform: uppercase;
  font-weight: 500;
}

.card .description h4 {
  margin: 0;
  color: #727272;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
}

.card .description h4:hover {
  color: #aedaa6;
  cursor: pointer;
}


.card .description p {
  font-size: 12px;
  line-height: 20px;
  color: #727272;
  padding: 20px 0;
  margin: 0;
}

.card .description button {
  outline: 0;
  border: 0;
  background: none;
  border: 1px solid #d9d9d9;
  padding: 8px 0px;
  margin-bottom: 30px;
  color: #515151;
  text-transform: uppercase;
  width: 125px;
  font-family: inherit;
  margin-right: 5px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.card .description button:hover {
  border: 1px solid #aedaa6;
  color: #aedaa6;
  cursor: pointer;
}

button{
  transition: 0.5s;
}
button:hover {
  transition: 0.5s;
  border: 1px solid #aedaa6;
  color: #aedaa6;
  cursor: pointer;
}

@media only screen and (max-width: 566px) {
    .card{
        height: 750px !important;
    }
       

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .photo, .description{
        width: 200px !important;
        border: none !important;
    }

    *{
        text-align: center;
    }
    nav{
      text-align: left !important;
    }
    .card{
        margin-top: 100px;
    }

    .seller{
      display: flex;
      justify-content: center;
    }
 
}
</style>

<script>
import { ref, onMounted } from 'vue';

let user = ref(null); // Initialize with null or any default value

onMounted(() => {
  axios.get("http://localhost:3000/currentUser", {
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
    .then(response => {
      user.value = response.data; // Store the fetched user data in the user ref
     user = JSON.parse(JSON.stringify(user));
     user = user._value.user.isAdmin
     console.log(user)

    })
    .catch(error => {
      console.log(error);
    });
});
export default {
  name: 'App',
  components: {
    Map
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    
    price:{
      type: Number,
      required: true
    },
    redirect:{
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showComponent() {
      this.show = !this.show    },

   redirectToProfile() {
      const userId = this.userId; // Extract userId from the component's data or props
      console.log(userId)
      if (this.redirect){
        this.$router.push({ path: `ManageProducts/${userId}` });
  }else{
      this.$router.push({ path: `Profile/${userId}` });
  }
    }
      }
  }
</script>

