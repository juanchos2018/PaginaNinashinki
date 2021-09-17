<template>
  <div class="testimonial">
    <div class="icon">
      <v-icon>mdi-format-quote-close</v-icon>
    </div>
    <h6 class="title">
      {{ name }}
    </h6>
   
    <p class="text">
      {{ text }}
    </p>
    
  </div>
</template>

<style lang="scss" scoped>
@import './card-stylev.scss';
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
   
    text: {
      type: String,
      required: true
    }
  }
}
</script>
