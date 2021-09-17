<template>
  <div class="root">
    
  <vue-easy-lightbox
       v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />

    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          
          <br><br>
  <br><br>  <br><br>
          <title-icon
            text="Eventos"
            icon="apps"
            extended
          />
         
        </div>
      </v-container>
    </div>

    
     <v-col cols="12"     
                      lg="7"
                  md="10"
                      
                    >             
                  <div class="massonry">
                    <v-row   >
                    
           <v-col cols="12" sm="8" md="6" class="pa-3"   v-for=" item in data"
                        :key="item.id_orgaevento"
                        >
                  <u-animate-container>
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    >                     
                          <card-galeria
                          :bg="url_base+item.photo"                        
                          :title="item.nombre_evento"                          
                          size="mediun"                         
                          :show-img="() => showImg(item.id_orgaevento)"
                        />                      
                    </u-animate>
                     </u-animate-container>
                  </v-col> 
                 </v-row>     
                   </div>  
                </v-col>


  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script>
// COMPONENTE DE EVENTOS

import CardGaleria from '@/components/Cards/CardGaleria'

import imgApi from '~/static/images/imgAPI'
import Card from '../Cards/Default'
import TitleIcon from '../Title/WithIcon'
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  components: {
    Card,
    TitleIcon,
    CardGaleria,
    Slick: () => import('vue-slick')
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
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      },
      itemEventos: [],
      servicesList: [
        {
          id_orgaevento: 1,
          nombre_evento: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          photo: imgApi.agency[2]
        },
        {
          id_orgaevento: 2,
          nombre_evento: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          photo: imgApi.agency[3]
        }
      ]
    }
  },

  computed: {
    ...mapState(['url_base']),
    imgs() {
      const arr = []
      this.data.map(item => {
        arr.push(this.url_base + item.photo)
      })
      return arr
    }
  },
  created() {
    // this.ListEventosOrganizacion()
  },
  mounted() {
    this.loaded = true
    const props = window.innerWidth > 1400 ? 1 : 2 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(4 + props - this.slickOptions.slidesToShow)
    setTimeout(() => {
      if (window.innerWidth > 1200 && !this.$vuetify.rtl) {
        console.log('lasd te ' + lastSlide)
        //  this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  methods: {
    showImg(idfoto) {
      ///alert("dfdfd")
      this.index = this.data.findIndex(x => x.id_orgaevento == idfoto)
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    },
    ListEventosOrganizacion() {
      let me = this
      //let url = this.url_base +"eventoesorgaList/";
      let url = me.url_base + 'Control/EventoOrganizacion.php'
      axios({
        method: 'GET',
        url: url
      })
        .then(function(response) {
          console.log(response)
          me.itemEventos = response.data.result
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
