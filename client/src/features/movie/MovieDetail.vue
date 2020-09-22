<template>
  <div>
    <section
      id="movie-image"
      :style="{ backgroundImage: `url(${backgroundImg})` }">
    
    </section>

    <div id="movie-details" class="container-md">

      <div id="movie" class="container-md row p-3">

        <div>
          <b-img-lazy
            :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`"
          ></b-img-lazy>
        </div>

        <div class="d-flex flex-column">
          <div class="d-flex">

            <div class="container-md text-left">
              <h1>{{ movie.title }}</h1>

              <p>
                <i>{{ movie.tagline }}</i>
              </p>

              <div id="movie-genres">
                <div class="movie-genre" v-for="genre in genres" :key="genre" >
                  <h5><b-badge variant="primary">{{ genre }}</b-badge></h5>
                </div>
              </div>


              <b-card-text>
                {{ movie.overview }}
              </b-card-text>
            </div>

            <Rating v-if="movie.vote_average" id="vote-average-box" :rating="movie.vote_average">
              <template #rating="{ rating }">
                <h1>{{ rating }}</h1>
              </template>
              <template #extra-text>
                <p>Rating</p>
              </template>
            </Rating>

          </div>
          <div id="movie-release-info" >
            <div>Release Date: {{ movie.release_date }}</div>
            <div>Runtime: {{ movie.runtime | toHoursMins }}</div>
          </div>
        </div>
      </div>

      <section class="movie-cast container-md row p-3">
        <div style="text-align: left;">
          <h1>Cast</h1>
        </div>
        <b-container fluid="md" class="d-md-flex flex-wrap row-cols-6 row p-3">
          <b-col v-for="actor in credits" :key="actor.id" class="p-2">
            <MovieActor :actor="actor"></MovieActor>
          </b-col>
        </b-container>
      </section>

      <section v-if="trailer != ''"  class="movie-trailer container-md row p-3">
        <h1>Trailer</h1>
        <b-embed
              type="iframe"
              aspect="16by9"
              :src="`https://www.youtube.com/embed/${trailer}`"
              allowfullscreen
        ></b-embed>
      </section>

      <section v-if="images.length > 0" class="movie-gallery container-md row p-3">
        <h1>Gallery</h1>
        <GalleryCarousel :images="images"></GalleryCarousel>
      </section>

      <section class="movie-gallery container-md row p-3">
        <h1>Recommended Movies</h1>
        <Movies v-if="recommendedMovies.length > 0" :movies="recommendedMovies"></Movies>
      </section>


    </div>
  </div>
</template>

<script>
import MovieActor from './MovieActor'
import Rating from '@/views/Rating'
import GalleryCarousel from '@/views/GalleryCarousel'
import Movies from './Movies'

export default {
  name: 'MovieDetail',
  data() {
    return {
      movie: {},
      trailer: '',
      images: [],
      credits: {},
      genres: [],
      recommendedMovies: {},
      tmdbImageUrl: 'https://image.tmdb.org/t/p/original/'
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    backgroundImg() {
      return this.tmdbImageUrl + this.movie.backdrop_path
    }
  },
  methods: {

    async getMovieDetails() {
      Object.assign(this.$data, this.$options.data())

      const id = this.id

      if (id === null) {
        throw new Error('Must specify a ID!')
      }

      const data = await this.$movieService.getMovieDetails(id)
      this.movie = data


      await this.getCredits()
      await this.getMovieTrailer()
      await this.getMovieImages()

      this.movie.genres.forEach( g => {
        this.genres.push(g.name)
      })
      
    
      await this.getMovieRecommendations()
      

    },
    async getCredits() {
      const id = this.$route.params.id

      if (id === null) {
        throw new Error('Must specify a ID!')
      }

      const data = await this.$movieService.getMovieCredits(id)
      this.credits = data
    },
    async getMovieImages(){
      const imageResults = await this.$movieService.getMovieImages(this.id)

      if (imageResults)
      {
   
        for (let i=0; i < imageResults.length; i++) {
          let image = imageResults[i]
          if (image.file_path &&  image.file_path != '') {
            this.images.push(this.tmdbImageUrl + image.file_path)
          }
        }
      }
    },
    async getMovieTrailer(){
      const trailerObj = await this.$movieService.getMovieTrailer(this.id)

      this.trailer = trailerObj[0].key

    },
    async getMovieRecommendations(){
      const res = await this.$movieService.getMovieRecommendations(this.id)

      this.recommendedMovies = res.results
    }
  },
  watch: {
    $route: "getMovieDetails"
  },
  created() {
    this.getMovieDetails()
  },
  components: {
    Movies,
    MovieActor,
    Rating,
    GalleryCarousel
  }
}
</script>

<style lang="scss">
#movie-image {
  height: 750px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    display: block;
    // position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      #1e2831a8 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}

#movie-details {
  position: relative;
  top: -200px;
  color: #f5fbef;

  #movie {
    display: grid;
    grid-template-columns: 200px 1fr;

    #movie-genres {
      display: flex;
      margin-left: -5px;

      .movie-genre{
        margin: 0 5px;
      }
    }

    #vote-average-box {
      padding: 30px;
      height: 140px;
    }

    #movie-release-info {
      padding: 10px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-around;
    }
  }

  .movie-cast{
    background: #f5fbef;
    color: rgba(54, 73, 85, 1);
  }

  .movie-trailer{
    background: black
  }

  .movie-gallery {
    background: #f5fbef;
    color: rgba(54, 73, 85, 1);
  }
}
</style>
