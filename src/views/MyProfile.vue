<script setup>
import NavBar from '../components/NavBar.vue';
import Cards from '../components/Cards.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

let user = ref();
let cards = ref([]);
let userName = ref('');
let addressRef = ref('');
const nameUpdate = ref('');
const addressUpdate = ref('');

onMounted(() => {
  axios.get("https://vendozaserver.onrender.com/currentUser", {
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
    .then(response => {
      user.value = response.data; // Store the fetched user data in the user ref
      cards.value = JSON.parse(JSON.stringify(user.value.user.products));
      // console.log(cards.value);
    userName = user.value.user.name 
    addressRef = user.value.user.address
    })
    .catch(error => {
      // console.log(error);
    });
});

function combineArrays(arrayOfArrays) {
  const combinedArray = arrayOfArrays.reduce((result, currentArray) => {
    return result.concat(currentArray);
  }, []);
  return combinedArray;
}

  const productName = ref('');
const productPrice = ref('');
const productDescription = ref('');
const productQuantity = ref('');
const productImage = ref('');


    const postProduct = (event) => {
  event.preventDefault();
  // Access the values from the textboxes here
  const name = productName.value;
  const price = productPrice.value;
  const description = productDescription.value;
  const quantity = productQuantity.value;
let data = JSON.stringify({
  "product_name": name,
  "price": price,
  "description": description,
  "quantity": quantity,
  "product_image": productImage.value
});



let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://vendozaserver.onrender.com/products',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  
  },
  data : data
};

axios.request(config)
.then((response) => {
  // console.log(JSON.stringify(response.data));
})
.catch((error) => {
  // console.log(error);
});

  // Perform the necessary actions with the values (e.g., send a POST request)
  // ...
};
const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        productImage.value = reader.result; // Save the base64 image string
        // console.log(reader.result);
        
      };
    }
  };

const updateUser = async (event) => {
  let data = JSON.stringify({
    "name": nameUpdate.value,
    "address": addressUpdate.value
  });

let currentUser;
  await axios.get("https://vendozaserver.onrender.com/currentUser", {
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
    .then(response => {
      currentUser = response.data; 
     console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
console.log(currentUser.user._id);
  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'https://vendozaserver.onrender.com/users/' + currentUser.user._id,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}
</script>





<style>
    h1{
        font-size: 30px;
    }
    .productsSelling{
        margin-left: 30px;
    }

    .uploadLabel{
        display: inline-block;
        background-color: #209cee;
        color: white;
        padding: 0.5rem;
        font-family: sans-serif;
        border-radius: 0.2rem;
        cursor: pointer;
       
    }

    #ratingsLabel{
        color: gray;
        font-size: 12px;
    }

    .editPic{
        height: 100px;
    }

    .editHeading{
        font-size: 24px;
    }
    .editUnlist{
        
    }

    .container{
        padding: 10px;
    }

    /* .unlist-button{
        display: block !important;
    } */

    .card-content{
        width: 100%;
      }

</style>

<template>
 <NavBar></NavBar>
 <div class="container">
        <div class="columns">
            <div class="column is-one-third">
                <img src="../images/profile.png" alt="..."> 
            </div>
            <div class="column userInfo">
                <h1>{{ userName }}</h1>  
                <p>{{ addressRef }}</p>              
            </div>
        </div>
    </div>
 <div class="container">
 <h1>Edit Profile</h1>
 <div class="columns">
  <div class="column is-one-half">
       
        <br>
        <div class="card edit-info">
            <div class="card-content">
                <p class="editHeading">User Info</p>
                <label for="">First Name</label>
                <input v-model="nameUpdate" type="text" class="input" placeholder="John">
                <label id="addressUpdate" for="">City</label>
                <input v-model="addressUpdate" type="text" class="input" placeholder="Toronto, ON"> <!--Location Selector-->
                <br>
                <br>
                <button class="button is-info" @click="updateUser">Save Changes</button>
            </div>
        </div>

    </div>
    <div class="column addItem">
      <br>
        <div class="card edit-info">
            <div class="card-content">
                <h1>Sell new item</h1> 

                <form>
                    <label for="">Product Name</label>
                        <input v-model="productName"  class="input" type="text" >
                    <label for="">Product Price</label>
                        <input v-model="productPrice" class="input" type="number" >
                    <label for="">Product Description</label>
                        <input v-model="productDescription" class="input" type="text" >
                        <label for="">Quantity</label>
                        <input v-model="productQuantity" class="input" type="number" min="1" >
                    <!-- <label>
                        <i class="fa-solid fa-arrow-up-from-bracket"> </i>
                        Upload File
                    </label> -->
                    <br>
                    <br>
                    <label class="uploadLabel">
      Choose file
      <input ref="fileInput" type="file" id="upload" accept="image/png, image/jpeg" style="display: none;" @change="handleFileChange" />
    </label>
                    <!-- <input type="file" id="upload" name="filename" >
                    <label class="uploadButton" for="upload">Choose File</label> -->
                    <input @click="postProduct" type="submit" class="button">
          </form>
            </div>

        </div>
        
    </div>

 </div>
 <h1 class="productsSelling">Your products</h1>
 <hr>
 <div class="column">
        <div class="card-container">
          <Cards v-for="product in cards" :noBtn="false" :key="product.id" :product="product"></Cards>
        </div>
      </div>
 <!-- <div class="card-container">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
 
        </div> -->

        <!--Fix to use card container later this is a placeholder-->
        <!-- <div class="card-container">
            <Cards :isDisplayed="'block'"></Cards>
            <Cards :isDisplayed="'block'"></Cards>
            <Cards :isDisplayed="'block'"></Cards>
            <Cards :isDisplayed="'block'"></Cards>

        </div> -->
            <!-- <div class="control">
            </div> -->
    

        <!-- <div class="columns">
            <div class="column">
                <Cards></Cards>
                <div class="field has-addons" style="margin-left: 52px">
                    <div class="control">
                        <button class="button" style="width: 380px;">Unlist</button>
                    </div>

                </div>
            </div>
            <div class="column">
                <Cards></Cards>
                <div class="field has-addons" style="margin-left: 52px">
                    <div class="control">
                        <button class="button" style="width: 380px;">Unlist</button>
                    </div>
                </div>
            </div>
            <div class="column">
                <Cards></Cards>
                <div class="field has-addons" style="margin-left: px">
                    <div class="control">
                        <button class="button" style="width: 380px;">Unlist</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

