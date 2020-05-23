
<template>
  <section>
      <input type="text"><fa-icon :icon="['fas', 'search']" />
  </section>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    padding: 5px;
    border: 1px solid black;
    border-radius: 6px;
    margin: 60px auto 0 auto;    
    width: 40%;
  }

  input {
    font-size: 1.4rem;
    padding: 2px;
    border: none;
    width: 95%;
    height: 40px;
  }

  input:focus {
    outline: none;
  }
</style>
