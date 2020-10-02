<template>
  <div :style="{ backgroundColor: ratingBgColour }">
    <slot name="rating" :rating="ratingFormatted"> </slot>
    <slot name="extra-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  computed: {
    ratingBgColour() {
      if (!this.rating) return ''

      const rating = parseFloat(this.rating)
      if (rating >= 7.0) {
        return '#72CD3D'
      } else if (rating <= 6.9 && rating >= 5.0) {
        return '#FFA630'
      } else if (rating <= 4) {
        return '#ee2e31'
      } else {
        return ''
      }
    },
    ratingFormatted() {
      return this.rating ? this.rating.toFixed(1) : ''
    }
  },
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
}
</script>

<style></style>
