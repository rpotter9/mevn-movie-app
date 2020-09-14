<template>
  <div class="movie-actor" @click="viewActorProfile">
    <b-img-lazy
      fluid
      :src="`http://image.tmdb.org/t/p/w185/${actor.profile_path}`"
    ></b-img-lazy>
  </div>
</template>

<script>
export default {
  name: 'MovieActor',
  props: {
    actor: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewActorProfile() {}
  }
}
</script>

<style>
.movie-actor {
  cursor: pointer;
}
</style>
