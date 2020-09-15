<template>
  <div class="movie-actor" @click="viewActorProfile">
    <b-img-lazy
      fluid
      :src="`http://image.tmdb.org/t/p/w185/${actor.profile_path}`"
    ></b-img-lazy>
    <div class="movie-character-actor">
      <p>{{ actor.name }}</p>
      <p>{{ actor.character }}</p>
    </div>
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

<style lang="scss">
.movie-actor {
  cursor: pointer;
  color: #239e80;

  .movie-character-actor {
    font-weight: bold;
  }
}
</style>
