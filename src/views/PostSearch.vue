
<script setup>
import NavBar from '../components/NavBar.vue';
import Cards from '../components/Cards.vue';
import SearchBar from '../components/SearchBar.vue';
import axios from 'axios';
import { onMounted, onUnmounted } from 'vue';
import router from '../router';
import { ref } from 'vue';
const showDiv = ref(false);
const toggleDiv = () => (showDiv.value = !showDiv.value);
// Remove the existing code for reading searchParam and config
let searchTerm = ref('');
let params = ref('');
let searchParam = ref('')
 params = new URLSearchParams(window.location.search);
 searchParam = params.get('search');
searchTerm = searchParam;
console.log(searchTerm)
const products = ref([]);

const performSearch = () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://vendozaserver.onrender.com/products',
    headers: { 
      'Content-Type': 'application/json'
    },
    params: {
      searchTerm: searchTerm
    }
  };
  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      products.value = response.data;
      console.log(products);
    })
    .catch((error) => {
      console.log(error);
    });
}
performSearch();

// Listen for the 'search' event emitted by SearchBar component
const handleSearch = (search) => {
  searchTerm = search;
  console.log('Search term:', search);
  performSearch();
  
}
// Register the event listener for the 'search' event on the component
// onMounted(() => {
//   const searchHandler = (event) => handleSearch(event.detail);
//   // Register the event listener on the component
//   document.querySelector('#searchbar').addEventListener('search', searchHandler);
  
//   // Cleanup: Remove the event listener when the component is unmounted
//   onUnmounted(() => {
//     document.querySelector('#searchbar').removeEventListener('search', searchHandler);
//   });
// });
</script>


<style scoped>
  
  .filter{
    color: black;
    border-style: solid;
    border-radius: 10px;
  }
  .filterTitle{
    font-size: 25px;
      text-align: center;
    color: black;
  }
  hr {
    margin: 5px;  
  }
  /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.alignleft{
  float: left;
}
.alignright{
  float: right
}
.filterSection{
  margin: 20px;
  margin-left: 50px;
  height: 30px;
}
.filter{
  color:black;
  height: 500px;
}
.button-filter{
    padding: 20px;
    bottom : 20px;
}
.moveup{
  margin-top:-200px;
}
</style>

<template>
    <NavBar></NavBar>
    <SearchBar  @search="handleSearch" :font-color="'black'" style="margin-top: -20px;"></SearchBar>
    <br>
    <div>
        
        <div class="columns">
  
      <div class="column">
        <div class="card-container">
          <Cards v-for="product in products" :key="product.id" :product="product"></Cards>
        </div>
      </div> 
      </div> 
    </div>

   
</template>
