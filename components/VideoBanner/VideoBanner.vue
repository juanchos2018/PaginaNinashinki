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
          </div>
        </v-col>
        <v-col
          v-if="isTablet"
          md="6"
          cols="12"     
          class="pa-6"
        >
          <div class="video-wrap">
            <div class="video-figure">
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
      default:'./images/logonia.png'
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
        origin: 'http://localhost:8001'
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
              $tarea:'',
              fecha  :''  

      },
      yt: youtube,
      play: false,
      playCtrl: true,
      cover: imgAPI.agency[0]
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
