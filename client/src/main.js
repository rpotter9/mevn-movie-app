import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MovieService } from "./services/movie.service";

Vue.config.productionTip = false;

/**
 * Services Singleton Instatiaton
 */
Vue.prototype.$movieService = new MovieService();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
