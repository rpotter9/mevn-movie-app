<template>
  <b-pagination
    pills
    v-model="currentPage"
    :total-rows="pagination.rows"
    :per-page="pagination.perPage"
    @input="change"
    align="center"
    class="mt-4"
  >
  </b-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      rows: 0,
      currentPage: 1
    }
  },
  props: {
    pagination: {
      type: Object,
      required: true
    }
  },
  methods: {
    change(val) {
      this.$emit('paginate', val)
    }
  }
}
</script>

<style></style>
