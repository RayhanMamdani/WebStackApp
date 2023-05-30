
<template>
  <form class="example" action="">
    <div class="control">
      <input v-model="searchTerm" placeholder="&#xF002;" :style="{color: fontColor}" id="searchbar" class="input" type="text" />
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
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    addParameter(event) {
      event.preventDefault(); // Prevent form submission
      const search = this.searchTerm || 'default_value';
      this.$emit('search', search);
      // this.$router.push({ name: 'PostSearch', params: { searchTerm: search } });
      this.$router.push({ path: '/PostSearch', query: { search } });
    }
  }
};
</script>
