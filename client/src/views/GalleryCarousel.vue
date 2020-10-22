<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      :controls="controls"
      :indicators="indicators"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    
    >
      <template  v-if="!useBgImgHtml">
        <b-carousel-slide v-for="(obj, index) in images" 
          :key="index"
          :img-src="imgSrc(obj)" 
        >
        </b-carousel-slide>
  
      </template>
      <template v-else> 
        <b-carousel-slide 
          v-for="(obj, index) in images" 
          :key="index"
          
          class="slide-background-img"
            :class="{ 'dark-overlay': darkOverlay }"
          :style="{ backgroundImage: `url('${obj.image}')`, height: `${backgroundHeight}px` }"
        >
          <slot name="extra-html" :slotProps="obj"></slot>
        </b-carousel-slide>
      </template>

    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    controls: {
      type: Boolean,
      required: false
    },
    indicators: {
      type: Boolean,
      required: false
    },
    useBgImgHtml: {
      type: Boolean,
      required: false,
      default: false
    },
    backgroundHeight: {
      type: String,
      required: false
    },
    darkOverlay: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
     imgSrc(obj){
        return obj.image != null ? obj.image : obj
    }
  }
}
</script>

<style lang="scss" scoped>
.dark-overlay{
  &::after {
    content: '';
    display: block;
    // position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0);
    opacity: 0.4;
  }
}

.slide-background-img
{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
