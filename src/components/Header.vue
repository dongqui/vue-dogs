<template>  
  <header>
    <h2>Dogs</h2>        
  </header>  
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    height: 60px;
    border-bottom: 1px solid #898989    
  }

  h2 {  
    font-size: 2rem;
    font-weight: 900;
    margin-left: 30px;
    line-height: 60px;      
  }
</style>
