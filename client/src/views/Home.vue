<template>
  <div class="home">
    <section class="now-playing">
      <GalleryCarousel :controls="false"></GalleryCarousel>
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
      nowPlaying: {}
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
      data.results.forEach( d => {
        const obj = {
          image: d.backdrop_path,
          title: d.original_title,
          description: d.description,
          link: `/movie/${d.id}`
        }

        this.nowPlaying.push(obj)
      })
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
</style>
