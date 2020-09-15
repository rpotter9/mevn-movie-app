<template>
  <div @click="viewMovieDetail">
    <div class="movie-image">
      <b-img-lazy fluid :src="imageUrl"></b-img-lazy>
      <Rating class="rating" :rating="movie.vote_average">
        <template #rating="{ rating }">
          <div>{{ rating }}</div>
        </template>
      </Rating>
    </div>

    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
import Rating from '@/views/Rating.vue'

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
  },
  components:{
    Rating
  }
}
</script>

<style lang="scss" scoped>
.movie {
  cursor: pointer;
  margin: 30px;

  .movie-image {
    transition: all 0.3s ease;
    -webkit-box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
    position: relative;

    &:hover {
      transform: translateY(-10px);
    }

    .rating {
      display: inline-block;
      position: absolute;
      bottom: 40px;
      background: red;
      padding: 10px;
      border-radius: 20px;
      right: -22px;
      //-webkit-box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
      //-moz-box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
      //box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
    }
  }
}
</style>
