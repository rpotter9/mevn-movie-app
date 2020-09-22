<template>
  <div>
      <h1>Search results for "{{ this.query }}"</h1>
      <Movies v-if="movies.length > 0" :movies="movies">
          <template #pagination>
              <Pagination></Pagination>
          </template>
      </Movies>
  </div>
</template>

<script>
import Movies from '@/features/movie/Movies'
import Pagination from './Pagination'

export default {
    name: 'Search',
    data() {
        return {
            movies: {}
        }
    },
    props: ['query'],
    methods: {
        async search(){
            const data = await this.$movieService.getPopularMovies()

            this.movies = data
        }
    },
    watch: {
        $route: "search"
    },
    created() {
        this.search()
    },
    components: {
        Movies,
        Pagination
    }
}
</script>

<style>

</style>