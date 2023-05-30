<template>

  <form class="example" action="">
    <div class="control">
      <input placeholder="&#xF002;" :style="{color: fontColor}" id="searchbar" class="input" type="text" />
        <button @click="addParameter" class="button is-circle"><i class="fa-solid fa-arrow-right"></i></button>
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
  },
// Inside your Vue component
methods: {
  addParameter(event) {
    event.preventDefault(); // Prevent form submission

let value = document.querySelector('#searchbar');
const search = value.value || 'default_value';
this.$emit('search', search); // Emit the 'search' event with the search term
this.$router.push('/PostSearch')  
}
}

};
</script>
