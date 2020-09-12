<template>
  <b-card class="container-md">
    <b-row no-gutters>
      <b-col md="4">
        <b-img-lazy
          :src="`http://image.tmdb.org/t/p/w300/${movie.poster_path}`"
        ></b-img-lazy>
      </b-col>
      <b-col md="6">
        <b-card-body :title="movie.title" title-tag="h1" class="text-left">
          <b-card-text>
            {{ movie.overview }}
          </b-card-text>
          <b-card-text>
            {{ genres }}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
    <b-button variant="success" @click="getCredits">Get Credits</b-button>
    <b-container fluid="md">
      <b-col v-for="actor in credits" :key="actor.id">
        <b-img-lazy
          fluid
          :src="`http://image.tmdb.org/t/p/w185/${actor.profile_path}`"
        ></b-img-lazy>
      </b-col>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: 'MovieDetail',
  data() {
    return {
      movie: {},
      credits: {},
      genres: []
    }
  },
  computed: {},
  methods: {
    async getMovieDetails() {
      const id = this.$route.params.id

      if (id === null) {
        throw new Error('Must specify a ID!')
      }

      const data = await this.$movieService.getMovieDetails(id)
      this.movie = data

      let genres = []
      for (let genreId in data.genre_ids) {
        const genre = this.$store.getters.getGenreById(genreId)

        genres.push(genre.name)
      }
    },
    async getCredits() {
      const id = this.$route.params.id

      if (id === null) {
        throw new Error('Must specify a ID!')
      }

      const data = await this.$movieService.getMovieCredits(id)
      this.credits = data
    }
  },
  mounted() {
    this.getMovieDetails()
  }
}
</script>

<style></style>
