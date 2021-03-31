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
      fotos:[
        {
        id:1,
        url:
          "https://i.pinimg.com/564x/5d/09/46/5d0946d429f6d37f9f3bd668a30fc071.jpg",
        titulo: "cachorro"
      },
      {
        id:2,
        url:
          "https://i.pinimg.com/564x/9c/4f/ff/9c4fff9011d9eabfe07e84fe8153ce6c.jpg",
        titulo: "cachorro"
      }
      ]
    };
  }
};
</script>

<style></style>
