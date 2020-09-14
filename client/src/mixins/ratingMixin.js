export const ratingMixin = {
  data() {
    return {
      rating: 0
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing
    }
  }
}
