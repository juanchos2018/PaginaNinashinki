<template>
  <div class="root">
    <v-container>
      <title-main
        :head="nombre"
        desc=" "
      />
    </v-container>
    <v-container class="fixed-width">
      <v-row class="spacing8 grid">
        <v-col md="4" cols="12">
          <div class="figure">
             <NuxtLink :to="{name:'EspacioFotos___en',params:{id:id_espacio}}" >
                   <a>
                  
                  <img src="/images/iconofotos.png" alt="hd-video" />
                   </a>
             </NuxtLink >
          </div>
          <h5 class="use-text-subtitle2">
           Fotos
          </h5>         
        </v-col>
        <v-col md="4" cols="12">
          <div class="figure">


              <NuxtLink :to="{name:'EspacioVideos___en',params:{id:id_espacio}}" >
                   <a>
                   <img src="/images/fotovideo.png" alt="presenter" />
                </a>
                </NuxtLink >
          </div>
          <h5 class="use-text-subtitle2">
            Videos
          </h5>      
        </v-col>
        <v-col md="4" cols="12">
          <div class="figure">
                <NuxtLink :to="{name:'EspacioNoticias___en',params:{id:id_espacio}}" >
                   <a>
                 <img src="/images/fotonoticia.png" alt="presenter" />
                   </a>
                </NuxtLink >
          </div>
          <h5 class="use-text-subtitle2">
          Noticias
          </h5>        
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script>
import Title from '../Title/Title'

export default {
  components: {
    'title-main': Title
  },
  
  props: {
    id_espacio: {
      type: Number,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
  }
}
</script>
