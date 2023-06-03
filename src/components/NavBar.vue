
<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/">
        <a id="navlogo" class="navbar-item">
          <img src="../images/vendozalogo2.png" width="190" height="190">
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
  <RouterLink to="/PostSearch?search=auto">
    <a @click="navigate" class="navbar-item">
      Auto
    </a>
  </RouterLink>


        <RouterLink to="/PostSearch?search=tech">
          <a @click="navigate" class="navbar-item">
            Tech
          </a>
        </RouterLink>

        <RouterLink to="/PostSearch?search=music">
          <a  @click="navigate" class="navbar-item">
            Music
          </a>
        </RouterLink>

        <RouterLink to="/PostSearch?search=sports">
          <a  @click="navigate" class="navbar-item">
            Sports
          </a>
        </RouterLink>

        <RouterLink to="/PostSearch?search=vintage">
          <a @click="navigate" class="navbar-item">
            Vintage
          </a>
        </RouterLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- <a class="button">
              <RouterLink to="/Cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </RouterLink>
            </a> -->
            <template v-if="localStorageToken === null">
              <a class="button is-light">
                <RouterLink to="/SignUp">
                  <a>Sign up</a>
                </RouterLink>
              </a>
              <RouterLink to="/Login">
                <a class="button is-light">
                  Log in
                </a>
              </RouterLink>
            </template>
            <template v-else>
              <a class="button is-light">
                <RouterLink to="/MyProfile">
                  <i class="fa-solid fa-user"></i>
                  <a>
                    My Profile
                  </a>
                                </RouterLink>
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
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
  
},
data() {
    return {
      localStorageToken: localStorage.getItem("token")
    }
  },

  methods: {
    navigate() {
      this.$router.push("/");
    }
  }
} 
</script>

<style scoped>

</style>