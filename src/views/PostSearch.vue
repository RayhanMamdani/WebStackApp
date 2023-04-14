<script>
import NavBar from '../components/NavBar.vue'
import Cards from '../components/Cards.vue';
export default {
  data() {
    return {
      showDiv: false
    }
  },
  methods: {
    toggleDiv() {
      this.showDiv = !this.showDiv
    }
  }
}
</script>

<template>
    <NavBar></NavBar>
    <div>
        <button @click="toggleDiv">Toggle div</button>
        <div v-if="showDiv" class="column is-one-fifth">
          <div><h1>Filters</h1></div>
          <div>Location <input type="range" min="0" max="100" value="50" class="slider" /> </div>
        <div class="field">   
        <label for="">Reviews</label>
      <p class="control">
        <span class="select">
          <select>
            <option>★★★★★</option>
            <option>★★★★</option>
            <option>★★★</option>
            <option>★★</option>
            <option>★</option>
          </select>
        </span>
      </p>
    </div>
    <label for="">Price</label>
        <div class="field has-addons">
         <div class="control">
         <input class="input" type="text" placeholder="Min" style="width:200px">
         </div>
         <div class="control">
         <input class="input" type="text" placeholder="Max" style="width:200px">
         </div>
         <div class="control">
           <a class="button is-info">
             Apply
           </a>
         </div>
       </div>
      </div>
   </div>
<!-- <form v-on:submit="">
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
      <p class="control">
        <span class="select">
          <select>
            <option>★★★★★</option>
            <option>★★★★</option>
            <option>★★★</option>
            <option>★★</option>
            <option>★</option>
          </select>
        </span>
      </p>
    </div>
    <div class="field">
        <label for="">Condition</label>
      <p class="control">
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
      <div class="field">
        <label for="">Condition</label>
      <p class="control">
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
         <input class="input" type="text" placeholder="Min" style="width:200px">
         </div>
         <div class="control">
         <input class="input" type="text" placeholder="Max" style="width:200px">
         </div>
         <div class="control">
           <a class="button is-info">
             Apply
           </a>
         </div>
       </div>
    </div>
    <div class="column">
      <div class="field"> 
        <label for=""> ㅤ</label>
      <p class="control">
          <button class="button">Submit</button>
      </p>
    </div>
  </div>
    </div>
  </form> -->

  <div>
    <h1>Results:</h1>
  </div>

  <div class="cards">
    <Cards></Cards>
  </div>

</template>
