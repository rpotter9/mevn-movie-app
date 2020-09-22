import MovieDetail from './MovieDetail.vue'

const routes = [
  {
    path: '/movies/:id',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true
  }
]

export default routes
