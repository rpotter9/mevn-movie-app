<template>
  <b-container fluid="md">
    <b-row>
      <Movie
        class="movie"
        v-for="movie in movies"
        v-bind:key="movie.id"
        :movie="movie"
      ></Movie>
    </b-row>
  </b-container>
</template>

<script>
import Movie from './Movie'

export default {
  name: 'Movies',
  computed: {
    chunkedMovies() {
      const chunkSize = 3

      const arrayChunks = Array(Math.ceil(this.movies.length / chunkSize))
        .fill()
        .map((_, index) => index * chunkSize)
        .map(begin => this.movies.slice(begin, begin + chunkSize))

      console.log(arrayChunks)

      return arrayChunks
    }
  },
  data() {
    return {
      movies: {}
    }
  },
  async mounted() {
    const data = await this.$movieService.getPopularMovies()
    this.movies = data
  },
  components: {
    Movie
  }
}
</script>

<style></style>
