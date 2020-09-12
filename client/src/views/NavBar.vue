<template>
  <div class="bg-info">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      sticky
      class="container"
    >
      <b-navbar-brand to="/">Movie App</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style></style>
