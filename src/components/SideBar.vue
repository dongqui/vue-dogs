<template>
  <aside>
    <section class="search-container">
      <input type="text"><fa-icon :icon="['fas', 'search']" />
    </section>
    <ul>
      <li
        @click="fetchDogsByBreed(breed)"         
        v-for="breed in breedList"
        :key="breed"
      >
        {{breed}}
      </li>
    </ul>
  </aside>  
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'SideBar',
  created() {    
    this.fetchBreeds()
  },
  computed: {
    ...mapState({
      breedList: state => state.dogs.breedList,
    })
  },
  methods: {
    ...mapActions('dogs', ['fetchBreeds', 'fetchDogsByBreed']),
  }
}
</script>

<style scoped>
  aside {
    width: 20%;
    height: 100vh;
    border-right: 1px solid black;
    float: left;
    overflow: auto;
  }

  li {
    text-align: center;
    padding: 20px;
    font-weight: 600;
  }

  li:hover {
    background-color: #f5f5f5;
  }

  .search-container {
    padding: 5px;
    border: 1px solid black;
    border-radius: 6px;
    margin: 10px auto;  
    width: 90%;
  }

  input {
    font-size: 1.4rem;
    padding: 2px;
    border: none;
    width: 90%;    
  }

  input:focus {
    outline: none;
  }
</style>
