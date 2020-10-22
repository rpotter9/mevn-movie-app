<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from './views/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5fbef;
  background: rgb(30, 40, 49);
  background: linear-gradient(
    180deg,
    rgba(30, 40, 49, 1) 0%,
    rgba(49, 66, 77, 1) 72%,
    rgba(54, 73, 85, 1) 100%
  );
}
</style>
