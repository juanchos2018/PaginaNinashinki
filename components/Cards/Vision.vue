<template>
  <div class="testimonial">
    <div class="icon" :style="coloricon">
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

.testimonial {
    height: 260px;
    overflow: visible;
    @include palette-background-paper;
    border-radius: $spacing1;
    border: 3px solid;
    @include palette-divider;
    padding: spacing(4, 2);
    @include breakpoints-up(sm) {
        padding: $spacing8
    }
    position: relative;
    .icon {
        border-Radius: 20px;
        transform: rotate(45deg);
        background: var(--background);
        width: 70px;
        height: 70px;
        top: -30px;
        @include left(32px);
        position: absolute;
        text-align: center;
        line-height: 100px;
        @include breakpoints-down(xs) {
            display: none
        }
        i {
            transform: rotate(-45deg);
            font-size: 70px;
            vertical-align: top;
            color: $palette-common-white;
        }
    }
    h6 {
        font-weight: $font-bold
    }
    .text {
        margin-bottom: $spacing4;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        height: $spacing9
    }
}

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
    },
    color: {
      type: String,
      default: '#2196f3'
    }
  },
  computed: {   
    coloricon(){
      return {        
         '--background':this.color       
      }
    }
    }
}
</script>
