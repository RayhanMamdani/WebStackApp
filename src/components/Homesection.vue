
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

<template>
    <div class="bg">
        <center>
        <h1 id="home-header" style="" class="is-size-1">Find More For Less.</h1>
        <div class="control">
    <span><input class="input" type="text" placeholder="Search" ></span>
    <span> <RouterLink to="/PostSearch">
      <h1>
      <FontAwesomeIcon icon="search"></FontAwesomeIcon>
    </h1>
    </RouterLink>
  </span>

  </div>
    </center>
</div>
</template>