<template>
  <div class="root">
  <square-parallax :loaded="loaded"/>
           <v-col
               cols="12"     
                lg="5"
                  md="12"                      
                    >             
                  <div class="massonry">
                    <v-row   >

                      <!-- cols="12" sm="8" md="6" class="pa-3"  -->
           <v-col cols="12" sm="8" md="6" class="pa-3"   v-for=" item in itemvideos"
                        :key="item.id_fotoeventoesorga"
                        >
                  <u-animate-container>
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    >                     
                          <card-galeria
                          :bg="urlFotoUotube"                        
                          :title="item.nombre_video"                          
                          size="medium"
                          :simple="false"
                          :show-img="() => showImgVide(item.idvideo)"
                        />                      
                    </u-animate>
                     </u-animate-container>
                  </v-col> 
                 </v-row>     
                   </div>  
                </v-col>
    <div class="floating-title">
      <v-container class="fixed-width">
         <br><br><br> <br>
        <div class="title">
          <title-icon
            text="Videos"
            icon="mdi-format-quote-close"
          />
        </div>
      </v-container>
    </div>
    


      <v-dialog
      v-model="dialog"
      max-width="690"
    >
   
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="title-main">
             video
            <v-btn icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </v-card-title>
        <div class="text-center" v-if="yt">
          <youtube
            :video-id="videoId"
            :player-vars="playerVars"
            :width= "640"
            :height="360"
            ref="youtube"
          />
             <!-- <iframe    v-if="isDesktop"    id="youtube"  ref="youtube" type="text/html" width="640" height="360"
  :src="'https://www.youtube.com/embed/' +videoId +'?autoplay=0&origin=http://example.com'"
  frameborder="0"   />   -->
        </div>
      </v-card>
    </v-dialog>

  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import TestimonialCard from '../Cards/Testimonial'
import TitleIcon from '../Title/WithIcon'
import SquareParallax from '../Parallax/SingleSquare'
import axios from 'axios'
import { mapState, mapGetters, mapActions } from 'vuex'

import CardGaleria from '@/components/Cards/CardGaleria'
import youtube from '~/youtube'

export default {
  components: {
    TestimonialCard,
    TitleIcon,
    CardGaleria,
    SquareParallax,
    Slick: () => import('vue-slick')
  },
  data() {
    return {


      videoId: '6p0VM-yUpGk',
      dialog: false,
      yt: youtube,

      urlFotoUotube: '/images/youtubeone.png',
      loaded: false,
      itemvideos: [],
      testiContent: [
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Chief Digital Officer',
          rating: 5
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Chief Digital Officer',
          rating: 4
        }
      ],
        playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8001'
      },
      slickOptions: {
        dots: true,
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
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(['url_base'])
  },
  mounted() {
    this.videos()
    this.loaded = true
    const props = window.innerWidth > 1400 ? 0 : 1 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(
      this.testiContent.length + props - this.slickOptions.slidesToShow
    )
    setTimeout(() => {
      if (window.innerWidth > 1279 && !this.$vuetify.rtl) {
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  methods: {
      handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    },
    showImgVide(id) {
        this.videoId = id
      this.dialog = true
      if (this.yt.use) {
        setTimeout(() => {
          this.player = this.$refs.youtube.player
          this.player.playVideo()
        }, 100)
      }
    },
    videos() {
      let me = this
      let tipo = 'videos'
      let url = this.url_base + 'Control/Peticiones2.php?'
      axios({
        method: 'GET',
        url: url
      })
        .then(function(response) {
          //console.log(response)
          me.itemvideos = response.data.result
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
