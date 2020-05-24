<template>
  <main>
    <Photo             
      v-for="url in dogsPhotoList" 
      :key="url"
      :photoUrl="url" 
    />
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Photo from './Photo';

export default {
  name: 'Main',
  components: {
    Photo
  },
  created() {    
  },
  computed: {
    ...mapState({
      dogsPhotoList: state => state.dogs.dogsPhotoList,
    })
  },
  methods: {      
  }
}
</script>

<style scoped>
  main {
    overflow: auto;
    float: left;
    height: 100vh;
    width: 80%;
    display: grid;    
    grid-template-columns: repeat(3, 1fr);    
    grid-auto-rows: auto;    
    justify-content: center;
  }
</style>