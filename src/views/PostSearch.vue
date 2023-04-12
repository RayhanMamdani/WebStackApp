<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
    <NavBar></NavBar>
<form v-on:submit="">
    <div class="columns">
    <div class="column">
      <h1>Filter:</h1>
    </div>
    <div class="column">
      Location <input type="range" min="0" max="100" value="50" class="slider" /> 
    </div>
    <div class="column">
      <div class="field"> 
        <label for="">Reviews</label>
      <p class="control has-icons-left">
        <span class="select">
          <select>
            <option>✭✭✭✭✭</option>
            <option>✭✭✭✭</option>
            <option>✭✭✭</option>
            <option>✭✭</option>
            <option>✭</option>
          </select>
        </span>
      </p>
    </div>
  </div>
    <div class="column">
      <div class="field">
        <label for="">Condition</label>
      <p class="control has-icons-left">
        <span class="select">
          <select>
            <option>New</option>
            <option>Gently Used</option>
            <option>Used</option>
          </select>
        </span>
        <span class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </span>
      </p>
    </div>
    </div>
    <div class="column">
      <label for="">Price</label>
        <div class="field has-addons">
         <div class="control">
         <input class="input" type="text" placeholder="Min">
         </div>
         <div class="control">
         <input class="input" type="text" placeholder="Max">
         </div>
         <div class="control">
           <a class="button is-info">
             Search
           </a>
         </div>
       </div>
    </div>
    <div class="column">
      <a href="" class="button-is-primary">Submit</a>
    </div>
    </div>
  </form>
</template>
