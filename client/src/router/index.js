import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../features/movie/Movies.vue'

import { movieRoutes } from '../features/movie'

Vue.use(VueRouter)

const appRoutes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const routes = [...appRoutes, ...movieRoutes]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
