


<template>
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <RouterLink to="/">
      <a class="navbar-item">
     
        Home
      
      </a>
    </RouterLink>
     

      <div class="navbar-item field">
  <div class="control">
    <span><input class="input" type="text" placeholder="Search" ></span>
    <span> <RouterLink to="/PostSearch">
      <a class="button">
        <i class="fas fa-search"></i>      
      </a>
    </RouterLink>
  </span>

  </div>
</div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <RouterLink to="/SignUp">

            <strong>Sign up</strong>
            </RouterLink>
          </a>
          <RouterLink to="/Login">
          <a class="button is-light">
            Log in
          </a>
        </RouterLink>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Add a click event on each of them
$navbarBurgers.forEach( el => {
  el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');

  });
});

});
</script>
<style scoped>

</style>