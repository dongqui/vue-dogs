<template>
  <div id="app">
    <Header/>
    <SideBar/>
    <Main/>
  </div>  
</template>

<script>
import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Main
  },  
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
  box-sizing: border-box;
}

li {
  list-style: none;
}
</style>
