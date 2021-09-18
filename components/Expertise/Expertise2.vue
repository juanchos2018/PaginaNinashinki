<template>
<div>  
  <vue-easy-lightbox
       v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
  <fragment>
    <svg
      fill="#cccccc"
      width="845px"
      height="1099px"
      class="background base"
    >
      <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
    </svg>
    <svg
      fill="#cccccc"
      width="815px"
      height="1099px"
      class="background front"
    >
      <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
    </svg>
    <div class="root">
      <v-container>
        <v-row class="spacing1">
          <v-col cols="12" lg="1" v-if="isDesktop" />
          <v-col cols="12" md="4">
            <div class="title-deco">
              <svg
                v-if="isDesktop"
                fill="#cccccc"
                width="845px"
                height="1099px"
                class="decoration"
              >
                <use xlink:href="/images/agency/wave_decoration.svg#main" />
              </svg>
              <title-deco text="Galeria" />
            </div>
            <u-animate-container>
              <u-animate
                :offset="-100"
                name="zoomInShort"
                delay="0.1s"
                duration="0.3s"
                class="parallax-wrap"
              >
                <div class="parallax-wrap" v-if="loaded">
                  <kinesis-container
                     :duration="1500"
                     easing="cubic-bezier(0.23, 1, 0.32, 1)"
                  >
                    <kinesis-element
                      :strength="15"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-green" />
                    </kinesis-element>
                    <kinesis-element
                      :strength="10"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-violet" />
                    </kinesis-element>
                    <kinesis-element
                      :strength="30"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-blue" />
                    </kinesis-element>
                  </kinesis-container>
                </div>
              </u-animate>
                      </u-animate-container>
                    </v-col>
                          <v-col
                      cols="12"     
                      lg="7"
                  md="10"
                      
                    >             
                  <div class="massonry">
                    <v-row   >
           <v-col cols="12" sm="8" md="6" class="pa-3"   v-for=" item in data"
                        :key="item.id_fotoeventoesorga"
                        >
                  <u-animate-container>
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    >                     
                          <card-galeria
                          :bg="url_base+item.photo"                        
                          :title="item.nombre_foto"                          
                          :size="item.size"
                          
                          :show-img="() => showImg(item.id_fotoeventoesorga)"
                        />                      
                    </u-animate>
                     </u-animate-container>
                  </v-col> 
                 </v-row>     
                   </div>  
                </v-col>            
        </v-row>
      </v-container>
    </div> 
  </fragment>
  </div>
</template>

<style lang="scss" scoped>
@import './expertise-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
// coponete de Galeria
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import TitleDeco from '../Title/WithDecoration'
import Hidden from '../Hidden'
import axios from 'axios'
import { mapState } from 'vuex'
import CardGaleria from '@/components/Cards/CardGaleria'
export default {
  components: {
    TitleDeco,
    Hidden,
    KinesisContainer,
    KinesisElement,
    Slick: () => import('vue-slick'),
    CardGaleria
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      loaded: false,
      visible: false,
      index: 0,

      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true
      },
      itemFotosOranizaciones: [],
      expertiseList: [{ id_fotoeventoesorga: 1, nombre_foto: 'dsds' }]
    }
  },
  mounted() {
    this.loaded = true
    // this.ListFotosOrganizaciones();
  },
  computed: {
    ...mapState(['url_base']),
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    imgs() {
      const arr = []
      this.data.map(item => {
        arr.push(this.url_base + item.photo)
      })
      return arr
    }
  },
  methods: {
    showImg(idfoto) {
      // alert("clclc")
      this.index = this.data.findIndex(x => x.id_fotoeventoesorga == idfoto)
      this.visible = true
      // alert(this.index)
    },

    handleHide() {
      this.visible = false
    },
    
  }
}
</script>
