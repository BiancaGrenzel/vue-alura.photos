import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueResource, VueRouter);

const router = new VueRouter({
  routes:routes
  //ou só routes também funciona, já que é o mesmo nome
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
