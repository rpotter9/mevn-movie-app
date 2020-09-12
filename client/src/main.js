import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { MovieService } from './services/movie.service'
import { GenreService } from './services/genre.service'

Vue.config.productionTip = false

/**
 * Services Singleton
 */
Vue.prototype.$movieService = new MovieService()
Vue.prototype.$genreService = new GenreService()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
