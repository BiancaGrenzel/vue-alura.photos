<template>
  <img class="img-responsiva" v-bind:src="url" :alt="titulo" />
</template>

<script>
export default{
    props:['url', 'titulo']
}
</script>

<style scoped>
.img-responsiva {
  width: 100%;
  height: 150px;
}
</style>
