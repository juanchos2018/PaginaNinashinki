<template>
  <div class="hero-content">
    <hidden point="smUp">
      
    </hidden>
    <v-container :class="{ 'fixed-width': mdUp }">
      <v-row>
        <v-col cols="12" md="6">
          <div class="banner-text">
             <div class="title">
               <div class="logo">
                  <img
                    :src="img"
                    alt="logo"
                  >
                  </div>
            </div>
           
            <v-btn
              outlined
              large
              color="secondary"
              class="button"
            >
             Mensaje
              <v-icon class="icon">mdi-send</v-icon>
            </v-btn>
 <a :href="linkfacebook" target="_blank" style="margin-left:7px">   
  <v-btn
              outlined
              large
              color="secondary"
              class="button"
            >
             Facebook
             <span class="ion-social-facebook icon" />
            </v-btn>
            </a>  
           
          </div>
        </v-col>
        <v-col
          v-if="isTablet"
          md="6"
          cols="12"     
          class="pa-6"
        >
          <div class="video-wrap">
            <div class="video-figure" :style="colorEspacio">
              <div class="inner-figure">
                <hidden point="mdDown">
                  <v-btn
                    v-if="play"
                    fab
                    text
                    class="btn-play"
                    @click="togglePause()"
                  >
                    <v-icon v-if="playCtrl">mdi-pause</v-icon>
                    <v-icon v-else>mdi-play</v-icon>
                  </v-btn>
                </hidden>
               
                <div class="overlay" />
                <div
                  v-if="yt.use"
                  class="video"
                >
                  <youtube
                    v-if="isDesktop"
                    :video-id="modeliPordata.id_video"
                    :player-vars="playerVars"
                    :width= "1080"
                    :height="720"
                    ref="youtube"
                    @playing="playing"
                    @ended="ended"
                  />
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
.video-figure {
    border-radius: 80px;
    overflow: hidden;
    position: absolute;
    width: 1040px;
    height: 840px;
    top: 0;
    @include left(0);
    .v-application--is-rtl & {
        box-shadow: 30px 20px 0px 0px $palette-primary-main;
    }
    .v-application--is-ltr & {
        box-shadow: var(--box-shadow); 
    }
    @include breakpoints-up(sm) {
        top: -920px;
        @include left(-110px);
        .v-application--is-rtl & {
            transform: rotate(75deg);
        }
        .v-application--is-ltr & {
            transform: rotate(-75deg);
        }
    }
    @include breakpoints-up(md) {
        .v-application--is-rtl & {
            transform: rotate(45deg);
        }
        .v-application--is-ltr & {
            transform: rotate(-45deg);
        }
        width: 1200px;
        top: -650px;
        @include left(-200px);
    }
}

</style>

<script>
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  components: {
    Hidden
  },
  props: {
    TituloPagina: {
      type: String,
      default: 'NinashunKu'
    },  
    UrlVideo: {
      type: String,
      default: 'YlUKcNNmywk'
    },   
    img:{
      type:String,
      default:'./images/logojuvenil.png'
    },
    ColorEspaciovideo:{
      type:String,
      default:'#2196f3'
    },
    linkfacebook:{
      type: String,
      default: 'https://www.facebook.com/Red-de-Gesti%C3%B3n-Juvenil-106975174854927'
    }  
   
  },
  data() {
    return {
      videoId: 'WRCB2QSrQQU',
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'https://identidadesjuveniles.org'
      },
        modeliPordata:{ 
             id_portada:0,
              id_espacio        :'',
              nombre_espacio       :'',
              id_eventoespacio   :'',
              nombre_evento       :'',
              id_videoventoespacio :'',
              nombre_video       :'',
              id_video        :'',             
              tarea:'',
              fecha  :''  

      },
      yt: youtube,
      play: false,
      playCtrl: true,
      cover: imgAPI.agency[0],
      colorDefault:'#C93E25',
    }
  },
   mounted() {  
    this.FirtVideoPortada();   
  },
  methods: {
    playing() {
      this.play = true
      this.playCtrl = true
    },
    ended() {
      this.player.playVideo()
    },
    togglePause() {
      this.playCtrl = !this.playCtrl
      if (this.playCtrl) {
        this.player.playVideo()
      } else {
        this.player.pauseVideo()
      }
    },
     FirtVideoPortada(){
      let me = this;    
      let url = me.url_base + "Control/VideoPortada.php";     
      axios({
        method: "GET",
        url: url,
      })
        .then(function(response) {        
           me.modeliPordata=response.data.result;
       //    console.log(response);
        })
        .catch((error) => {
          console.log(error);
       });
    }
  },
  computed: {
     ...mapState(["url_base"]),
   colorEspacio() {
      return {        
         '--box-shadow': "-30px 20px 0px 0px "+this.ColorEspaciovideo       
      }
    },
    player() {
      return this.$refs.youtube.player
    },
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
