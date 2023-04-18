
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
<template>
    <div class="bg">
        <center>
        <h1 id="home-header" style="" class="is-size-1">Find More For Less.</h1>
        <div class="control">
    <span><input id="searchbar" class="input" type="text" placeholder="Search" ></span>
    <span> <RouterLink to="/PostSearch">
      <h1>
        <font-awesome-icon icon="fa-sharp fa-light fa-magnifying-glass" />
        </h1>
    </RouterLink>
  </span>

  </div>
    </center>
</div>
</template>