<template>
   <div class="card-wrap"  @click="showImg">
    <span class="fold" />
    <v-btn class="category-card"  >
      <span class="figure">
        <img
          :src="bg"
           alt="img"
        >
      </span>     
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import './card-styleee2';
</style>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: ''
    },  
  
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium'
    },   
    showImg: {
      type: Function,
      default: function() {
        return false
      }
    }
  },
  computed: {
    setSize: function() {
      switch (this.size) {
        case 'small':
          return 'small'
        case 'big':
          return 'big'
        default:
          return 'medium'
      }
    }
  }
}
</script>
