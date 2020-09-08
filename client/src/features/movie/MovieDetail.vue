<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <b-button variant="success" @click="getCredits" >Get Credits</b-button>
    <div class="d-flex p-2 bd-highlight flex-row">
      <div v-for="actor in credits" :key="actor.id">
          <b-img-lazy fluid :src="`http://image.tmdb.org/t/p/w185/${actor.profile_path}`"></b-img-lazy>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MovieDetail',
    data(){
      return{
        movie:{},
        credits: {}
      }
    },
    computed: {
    },
    methods: {
      async getMovieDetails(){
        const id = this.$route.params.id

        if(id === null)
        {
          throw new Error("Must specify a ID!")
        }

        const data = await this.$movieService.getMovieDetails(id)
        this.movie = data


      },
      async getCredits(){
        const id = this.$route.params.id

        if(id === null)
        {
          throw new Error("Must specify a ID!")
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

<style>

</style>