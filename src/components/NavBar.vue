<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/">

      <a id="navlogo" class="navbar-item">
        <img src="../images/vendozalogo.png" width="150" height="150">
      </a>
    </RouterLink>

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
            Auto
          </a>
        </RouterLink>

        <RouterLink to="/">
          <a class="navbar-item">
            Tech
          </a>
        </RouterLink>

        <RouterLink to="/">
          <a class="navbar-item">
            Music
          </a>
        </RouterLink>

        <RouterLink to="/">
          <a class="navbar-item">
            Sports 
          </a>
        </RouterLink>

        <RouterLink to="/">
          <a class="navbar-item">
            Vintage
          </a>
        </RouterLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button">
              <RouterLink to="/Cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </RouterLink>
            </a>
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
export default {
  mounted() {
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
  }
}
</script>

<style scoped>

</style>