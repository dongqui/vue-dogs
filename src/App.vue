<template>
  <div id="app">
    <Header />
  </div>  
</template>

<script>
import Header from './components/Header.vue'
import { mapActions, mapState } from 'vuex';

import { FETCH_BREEDS } from './store/type.action';

export default {
  name: 'App',
  created() {
    this.FETCH_BREEDS()
  },
  components: {
    Header
  },
  computed: {
    ...mapState({
      breedList: state => state.dogs.breedList,
    })
  },
  methods: {
    ...mapActions('dogs', [FETCH_BREEDS]),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}
</style>
