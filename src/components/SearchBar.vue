<template>
     <form class="example" action="">
        <div class="control">
<input placeholder="&#xF002;" :style="{color: fontColor}" id="searchbar" class="input" type="text" >
  <RouterLink to="/PostSearch">
      <button class="button is-circle"><i class="fa-solid fa-arrow-right"></i></button>
    </RouterLink>
  </div>
</form>
</template>
<script>
export default {
  name: 'SearchBar',
  props: {
    fontColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>