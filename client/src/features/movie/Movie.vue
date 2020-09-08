<template>
  <div @click="viewMovieDetail">
      
      <div>
        <b-img-lazy fluid :src="imageUrl"></b-img-lazy>
      </div>
      
      <p>{{ movie.title }}</p>
  </div>

</template>

<script>
export default {
    name: 'Movie',
    props: ['movie'],
    computed:{
      imageUrl(){
        return `http://image.tmdb.org/t/p/w185//${this.movie.poster_path}`
      }
    },
    methods: {
      viewMovieDetail(){
        this.$router.push({name: 'MovieDetail', params: {id: this.movie.id}})
      }
    }
}
</script>

<style lang="scss">
.movie {
  cursor: pointer;

  &:hover{
    border: 1px solid red;
  }
}
</style>