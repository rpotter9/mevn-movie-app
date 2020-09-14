<template> 
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    rating: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
