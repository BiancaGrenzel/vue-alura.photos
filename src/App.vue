<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos" v-bind:key="foto.id">
        <img v-bind:src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Cachorrinho",
      fotos:[]
    };
  },

  created(){
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);

    // promise.then(res => {
    //   res.json().then(fotos => this.fotos = fotos);
    // });
  }
};
</script>

<style></style>
