<template>
     <b-pagination
     pills
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="mt-4">
      </b-pagination>
</template>

<script>
export default {
    name: 'Pagination',
    data() {
      return {
        rows: 100,
        perPage: 10,
        currentPage: 1
      }
    }
  }
</script>

<style>

</style>