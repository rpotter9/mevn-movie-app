<template>
  <div class="home">
    <section class="search bg-primary">
      <SearchInput></SearchInput>
    </section>
    <section class="container-md text-left">
      <h1>Latest Popular Movies</h1>
        <Movies v-if="movies.length > 0" :movies="movies"></Movies>
    </section>
    <section>
      <Movies :movies="nowPlaying"></Movies>
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
      movies: {},
      nowPlaying: {}
    }
  },
  methods: {
    async initPage(){
      this.getPopularMovies()
      this.getTop5NowPlaying()
    },
    async getPopularMovies(){
      const data = await this.$movieService.getPopularMovies()
      this.movies  = data.results
    },
    async getTop5NowPlaying(){
      const data = await this.$movieService.getMovieNowPlaying(5)
      this.nowPlaying = data.results
    }
  },
  created(){
    this.initPage()
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
