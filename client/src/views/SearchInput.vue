<template>
  <div>
    <b-form-input v-model="search" placeholder="Search" debounce="500"></b-form-input>
    <div class="mt-2">You searched: "{{ search }}"</div>
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    data() {
      return {
        search: ''
      }
    },
    watch: {
        search(){
            console.log(`you search ${this.search}`)
            this.$router.push({ name: 'Search', query: { q: this.search } })
        }
    }
  }
</script>

<style>

</style>