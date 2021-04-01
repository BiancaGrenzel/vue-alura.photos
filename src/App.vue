<template>
  <div id="app" class="corpo">
    <router-view></router-view>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel'
import ImagemResponsiva from './components/shared/imagem-responsiva/imagemResponsiva.vue'

export default {

  
};
</script>

<style>

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

</style>
