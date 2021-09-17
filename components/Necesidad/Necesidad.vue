<template>
  <div class="root">

    <hidden point="smDown">
      <div class="deco" />
    </hidden>
    <v-container class="fixed-width">
      <div class="pa-md-8 pa-2">
        <title-main
          head="Cual es la necesidad ? "
          desc=""
          :align="isMobile ? 'center' : 'left'"
          color="secondary"
        />
      </div>
      <v-row :class="[isDesktop ? 'row-reverse' : '']">
        <v-col class="pa-md-8" md="6" cols="12">
          <div class="video-wrap">
            <div class="video-carousel" v-if="loaded">

              <slick ref="slick" :options="slickOptions">
                <v-card class="item">
                  <img :src="imagnes_uno" alt="cover" />
                  
                </v-card>

                <v-card class="item">
                  <img :src="imagnes_dos" alt="cover" />
                 
                </v-card>
                <v-card class="item">
                  <img :src="imagnes_tres" alt="cover" />
                  
                </v-card>
                <v-card class="item">
                  <img :src="imagnes_cuatro" alt="cover" />
                  
                </v-card>
              </slick>
            </div>
          </div>
        </v-col>

        <v-col class="pa-md-10 pa-4" md="6" cols="12">
          <div class="blog-list" v-if="loaded">
            <u-animate-container>
              <div v-for="(item, index) in blogData" :key="index">
                <u-animate
                  :offset="-200"
                  :delay="(index *0.2) + 's'"
                  name=" "
                  duration="0.6s"
                >
                  <blog-card
                    :category="item.category"
                    :title="item.title"

                  />
                </u-animate>
              </div>
            
            </u-animate-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-styleb.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../Title/Title'
import BlogCard from '../Cards/Blog'
import Hidden from '../Hidden'

const blogData = [
  {
    title: 'Observando la necesidad de nuestros jóvenes por construir espacios participativos y dignos para la libre expresión, formación y fomento a la participación juvenil dentro de las parroquias de la Administración Zonal la Delicia.',
    category: ' ',
   
  },
  {
    title: 'Creemos que es oportuno dirigir nuestros esfuerzos por medio de nuestras instituciones, que deberán ser visualizadas en proyectos objetivos hacia nuevas oportunidades brindando a los jóvenes espacios de libre deliberación',
    category: ' ',
  
  }  
]

export default {
  components: {
    'title-main': Title,
    Hidden,
    BlogCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
        loaded: false,
      dialog: false,
      imgAPI: imgAPI,
      blogData: blogData,
      slickOptions: {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 750,
        fade: true,
        arrows: false
      },
        imagenes:[],
        

      imagnes_uno:'/images/DSC04605.JPG',
      imagnes_dos:'/images/DSC04821.JPG',
      imagnes_tres:'/images/DSC05196.JPG',
      imagnes_cuatro:'/images/casa.jpeg',
      //DSC05196  casa
      itemVideoOrga:[]
    }
  },
  mounted() {
    this.loaded = true
   // this.listVideosOrga();
  },
  methods: {     
   
  },
 computed: {
    player() {
      return this.$refs.youtube.player
    },
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
