<template>
  <main>
    <section v-if="dogsIsLoading" class="loading">
      <fa-icon :icon="['fas', 'spinner']" size="4x" spin/>  
    </section>  
    <section class="contents">
      <Photo             
        v-for="url in dogsPhotoList" 
        :key="url"
        :photoUrl="url" 
      />
    </section>
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
  computed: {
    ...mapState({
      dogsPhotoList: state => state.dogs.dogsPhotoList,
      dogsIsLoading: state => state.dogs.dogsIsLoading,
    })
  },
  methods: {      
  }
}
</script>

<style scoped>
  .loading {
    display: inline-block; 
    position: absolute;
    left: 60%;
    top: 40%;
  }

  .contents {
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