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

Vue.filter('toHoursMins', function(value) {
  if (!Number.isInteger(value)) return ''

  value = parseInt(value)

  if (value < 60) return `${value} mins`

  const hours = Math.floor(value / 60)
  const mins = value - hours * 60

  return `${hours}h ${mins}m`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
