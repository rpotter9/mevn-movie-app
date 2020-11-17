<template>
  <b-container fluid="md">
    <b-row class="justify-content-center">
      <Movie
        class="movie"
        v-for="movie in movies"
        v-bind:key="movie.id"
        :movie="movie"
      ></Movie>
    </b-row>
    <slot name="pagination"></slot>
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
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  components: {
    Movie
  }
}
</script>

<style></style>
