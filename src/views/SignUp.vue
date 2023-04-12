<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
    <div class="background">
    <NavBar></NavBar>
    <section class="hero is-fullheight">
  <div class="hero-body">
    <div id="signinform" class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
            <center><h1 class="is-size-4 has-text-white	">Sign Up</h1></center>
            <div class="field">
              <label for="" class="label has-text-white">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label has-text-white">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input has-text-white" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label has-text-white"> Confirm Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              
            </div>
            <div class="field">
              <button class="button is-success">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>