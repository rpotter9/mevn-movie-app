<template>
  <div class="home">
    <section class="now-playing container-md">
      <GalleryCarousel :controls="false" :images="nowPlaying" :useBgImgHtml="true" :backgroundHeight="500" :darkOverlay="true" >
        <template #extra-html="{ slotProps }">
          <div class="slide-wrapper container-md">
            <h1>{{ slotProps.title }}</h1>
            <p>{{ slotProps.description }}</p>
            <b-button variant="primary" @click="viewMovie(slotProps.movieId)">View Movie ></b-button>
          </div>
        </template>
      </GalleryCarousel>
    </section>
    <section class="container-md text-left">
      <h1>Latest Popular Movies</h1>
      <Movies v-if="movies.length > 0" :movies="movies"></Movies>
    </section>
  </div>
</template>

<script>
import Movies from '@/features/movie/Movies'
import GalleryCarousel from './GalleryCarousel'

export default {
  name: 'Home',
  data() {
    return {
      movies: {},
      nowPlaying: []
    }
  },
  methods: {
    async initPage() {
      this.getPopularMovies()
      this.getTop5NowPlaying()
    },
    async getPopularMovies() {
      const data = await this.$movieService.getPopularMovies()
      this.movies = data.results
    },
    async getTop5NowPlaying() {
      const data = await this.$movieService.getMovieNowPlaying(5)
      data.results.forEach(d => {
        const obj = {
          image: `https://image.tmdb.org/t/p/original/${d.backdrop_path}`,
          title: d.original_title,
          description: d.overview,
          movieId: d.id
        }

        this.nowPlaying.push(obj)
      })
    },
    async viewMovie(id){
      this.$router.push({ name: 'MovieDetail', params: { id } })
    }
  },
  created() {
    this.initPage()
  },
  components: {
    Movies,
    GalleryCarousel
  }
}
</script>

<style lang="scss">
.search {
  height: 500px;
  background: #fff;
}

.now-playing {
  max-height: 500px;
}

.slide-wrapper {

  text-align: left;
  
}
</style>
