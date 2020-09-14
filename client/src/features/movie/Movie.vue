<template>
  <div @click="viewMovieDetail">
    <div class="movie-image">
      <b-img-lazy fluid :src="imageUrl"></b-img-lazy>
    </div>

    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['movie'],
  computed: {
    imageUrl() {
      return `http://image.tmdb.org/t/p/w185//${this.movie.poster_path}`
    }
  },
  methods: {
    viewMovieDetail() {
      this.$router.push({ name: 'MovieDetail', params: { id: this.movie.id } })
    }
  }
}
</script>

<style lang="scss">
.movie {
  cursor: pointer;
  margin: 30px;

  .movie-image {
    transition: all 0.3s ease;
    -webkit-box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);

    &:hover {
      transform: translateY(-10px);
    }
  }
}
</style>
