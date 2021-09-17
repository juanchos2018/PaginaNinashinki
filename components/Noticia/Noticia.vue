<template>
  <div class="">
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
     :src="imgs"
    ></v-img>

    <v-card-title>  {{ name }} </v-card-title>
      <v-divider class="mx-4"></v-divider>   
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >             
      </v-row>
      <div class="my-4 text-subtitle-1">

          <a :href="title" target="_blank">  {{title}}</a>

      
      </div>

      <div>{{text}}</div>
    </v-card-text>
  

    <v-card-actions>
      <!-- <v-btn
        color="deep-purple lighten-2"
        text     
      >
        Reserve
      </v-btn> -->
    </v-card-actions>
  </v-card>
    <!-- <div class="icon">
      <v-icon>mdi-format-quote-close</v-icon>
    </div>
    
    <h6 class="title">
      {{ name }}
    </h6>
    <p class="caption-title">
      {{ title }}
    </p>
    <p class="text">
      {{ text }}
    </p>
    <img :src="imgs" width="300"
       height="200" alt=""> -->
  </div>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imgs: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      selection: 1
    }
  }
}
</script>
