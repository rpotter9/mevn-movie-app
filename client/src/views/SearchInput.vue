<template>
  <div>
    <b-form-input v-model="search" placeholder="Search" debounce="1000"></b-form-input>
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