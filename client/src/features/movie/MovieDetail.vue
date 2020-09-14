<template>
  <div>
    <section
      id="movie-image"
      :style="{ backgroundImage: `url(${backgroundImg})` }"
    ></section>
    <div id="movie-details" class="container-md">
      <div id="movie">
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
              <b-card-text>
                <!--{{ genres }}-->
              </b-card-text>
            </div>
              <div id="vote-average-box" :style="{ backgroundColor: ratingBgColor }">
                <h1>{{ movie.vote_average }}</h1>
                <p>Rating</p>
              </div>
           
          </div>
          <div id="movie-release-info" >
            <div>Release Date: {{ movie.release_date }}</div>
            <div>Runtime: {{ movie.runtime | toHoursMins }}</div>
          </div>
        </div>
      </div>
      <section>
        <div style="text-align: left;">
          <h1>Cast</h1>
        </div>
        <b-container fluid="md" class="d-md-flex flex-wrap row-cols-3">
          <b-col v-for="actor in credits" :key="actor.id" class="p-2">
            <MovieActor :actor="actor"></MovieActor>
          </b-col>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
import MovieActor from './MovieActor'
//import Rating from '@/views/Rating'

export default {
  name: 'MovieDetail',
  data() {
    return {
      movie: {},
      credits: {},
      genres: []
    }
  },
  computed: {
    backgroundImg() {
      return `https://image.tmdb.org/t/p/original/${this.movie.backdrop_path}`
    },
    ratingBgColor(){
      const rating = parseFloat(this.movie.vote_average)
      console.log(rating)
      if(rating >= 7.0){
        return 'green'
      }
      else if(rating <= 6.9 && rating >= 5.0){
        return 'orange'
      }
      else if(rating <= 4)
      {
        return 'red'
      }
      else {
        return ''
      }
    }
  },
  methods: {
    async getMovieDetails() {
      const id = this.$route.params.id

      if (id === null) {
        throw new Error('Must specify a ID!')
      }

      const data = await this.$movieService.getMovieDetails(id)
      this.movie = data

      

      await this.getCredits()
      /*let genres = []
      for (let genreId in data.genre_ids) {
        const genre = this.$store.getters.getGenreById(genreId)

        genres.push(genre.name)
      }*/

      this.movie.genres.forEach( g => {
        this.genres.push(g.name)
      })
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
  },
  components: {
    MovieActor,
    //Rating
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
      background-color: #ee2e31;
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
}
</style>
