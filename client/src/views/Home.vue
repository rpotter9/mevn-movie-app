<template>
  <div class="home">
    <section class="search bg-primary">
      <SearchInput></SearchInput>
    </section>
    <section class="container-md text-left">
      <h1>Popular Movies</h1>
        <Movies v-if="movies.length > 0" :movies="movies"></Movies>
    </section>
  
  </div>
</template>

<script>
import Movies from '@/features/movie/Movies'
import SearchInput from './SearchInput'

export default {
  name: 'Home',
  data(){
    return {
      movies: {}
    }
  },
  methods: {
    async getPopularMovies(){
      const res = await this.$movieService.getPopularMovies()
      this.movies  = res
    }
  },
  created(){
    this.getPopularMovies()
  },
  components: {
    Movies,
    SearchInput
  }
}
</script>

<style lang="scss">
.search {
  height: 500px;
  background: #fff;
}
</style>
