<template>
  <div class="item-container">
    <img :src="photoUrl" loading="lazy" />
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photoUrl: String,
  },
  method: {

  } 
}
</script>

<style scoped>
  div {
    flex: 1;
    height: 200px;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
</style>