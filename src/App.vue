<template>
  <div id="app" class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos" v-bind:key="foto.id">
        <meu-painel :titulo="foto.titulo">
          <img
            class="img-responsiva"
            v-bind:src="foto.url"
            :alt="foto.titulo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel'

export default {

  components:{
    'meu-painel' : Painel
  },

  data() {
    return {
      titulo: "Projeto Inicial",
      fotos: []
    };
  },

  created() {
    //fetch pode ser usado
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(
        fotos => (this.fotos = fotos),
        err => console.log(err)
      );

    // promise.then(res => {
    //   res.json().then(fotos => this.fotos = fotos);
    // });
  }
};
</script>

<style>
.centralizado {
  text-align: center;
}

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.img-responsiva {
  width: 100%;
  height: 150px;
}
</style>
