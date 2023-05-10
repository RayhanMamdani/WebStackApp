<script setup>
import NavBar from '../components/NavBar.vue';
import Cards from '../components/Cards.vue';
import { ref } from 'vue';
const showDiv = ref(false);
const toggleDiv = () => (showDiv.value = !showDiv.value);
</script>

<style>
  
  .filter{
    background-color: lightslategray;
  }
  .filterTitle{
    font-size: 25px;
      text-align: center;
    color: white;
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
  height: 30px;
}
.filter{
  color:white;
  height: 100vh;
}
</style>


<template>
    <NavBar></NavBar>
    
    <div>
        <button @click="toggleDiv" class="button">Filter</button>
        <br>
        <br>
        <div class="columns">
        <div v-if="showDiv" class="column is-one-quarter filter">
          <h1 class="filterTitle">Filters</h1>
          <hr>
          <!-- Rounded switch -->
          <div class="filterSection">             
            <p class="alignleft">In person pickup</p>
            <label class="switch alignright">
            <input type="checkbox">
            <span class="slider round"></span>
            </label>
          </div>

          <div class="filterSection">
            <div class="field">   
              <label for="" class="alignleft">Reviews</label>
              <span class="select alignright">
              <select>
                <option>★★★★★</option>
                <option>★★★★</option>
                <option>★★★</option>
                <option>★★</option>
                <option>★</option>
              </select>
              </span>
           </div> 
         </div>

         <div class="filterSection">
            <div class="field">   
              <label for="" class="alignleft">Condition</label>
              <span class="select alignright">
              <select>
                <option>New</option>
                <option>Gently Used</option>
                <option>Used</option>
              </select>
              </span>
           </div> 
         </div>


         <div class="filterSection">
            <div class="field">   
              <label for="" class="alignleft">Date Posted</label>
              <span class="select alignright">
              <select>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
              </span>
           </div> 
         </div>

         <div class="filterSection">
          <label for="" class="alignleft">Price</label>
          <div class="field has-addons alignright ">
            <div class="control alignright">
              <input class="input" type="text" placeholder="Min" style="width:100px">
            </div>
            <div class="control alignright">
                <input class="input" type="text" placeholder="Max" style="width:100px">
            </div>

          </div>
        </div>

        <div class="filterSection">
            <div class="field">   
              <span class="select alignright">
              <select>
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              </span>
           </div> 
         </div>

        <div class="filterSection">
          <input type="submit" class="button alignright is-info"> 
        </div>

      </div>
      <div class="column">
        <div class="card-container">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>

      </div>

   </div>
  </div>


   

</template>
