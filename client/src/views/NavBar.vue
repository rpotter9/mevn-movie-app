<template>
  <div class="bg-primary">
    <b-navbar toggleable="lg" type="dark" sticky class="container">
      <b-navbar-brand to="/">Movie App</b-navbar-brand>
      <div>
        <SearchInput v-if="$route.name != 'Home'" ></SearchInput>
      </div>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import SearchInput from './SearchInput'

export default {
  name: 'NavBar',
  components:{
    SearchInput
  }
}
</script>

<style></style>
