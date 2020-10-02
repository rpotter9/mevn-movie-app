<template>
  <div>
    <h1>Search results for "{{ this.query }}"</h1>
    <Movies v-if="movies.length > 0" :movies="movies">
      <template #pagination>
        <Pagination @paginate="search" :pagination="pagination"></Pagination>
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
      movies: {},
      pagination: {}
    }
  },
  props: ['query'],
  methods: {
    async search(page) {
      const data = await this.$movieService.searchMovies(this.query, page)
      this.setPagination(data)
      this.movies = data.results
    },
    async setPagination(data) {
      this.pagination = {
        rows: data.total_results,
        perPage: 20
      }
    }
  },
  watch: {
    $route: 'search'
  },
  created() {
    this.search(1)
  },
  components: {
    Movies,
    Pagination
  }
}
</script>

<style></style>
