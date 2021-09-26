<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <square-parallax />

        <section id="home">
          <video-banner :img="defaulimg" />
          <!-- <video-banner /> -->
        </section>

        <section>
          <div class="">
            <v-container class="fixed-width">
              <div class="massonry">
                <u-animate-container>
                  <v-row>
                       <v-col cols="6" lg="4"
                        sm="6"   class="pa-sm-6 pa-2"   v-for="item in itemequiopos"
                        :key="item.id_equipo"
                        >
                   <v-card                  
                    max-width="350"
                    outlined
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                      
                        <v-list-item-title class="text-h5 mb-1">
                          {{item.nombre}}
                        </v-list-item-title>

                        <v-list-item-subtitle>{{item.descripcion}}</v-list-item-subtitle>
                      </v-list-item-content>

                        <v-avatar
                        color="primary"
                        size="100"
                         class="ma-3"
                      >
                      <v-img :src="url_base+item.photo"></v-img>

                      </v-avatar>
                      <!-- <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      >
                      
                      
                      </v-list-item-avatar> -->
                    </v-list-item>

                    <v-card-actions>
                      
                    </v-card-actions>
                  </v-card>
                     </v-col>  
                  </v-row>
                </u-animate-container>
              </div>
            </v-container>
          </div>


         
        </section>

        <br /><br /><br />

        <br /><br /><br />

        <br /><br />

        <!-- <section
          id="about"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <about />
        </section> -->
      </div>

      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import Header from '~/components/Header'
import SquareParallax from '~/components/Parallax/Square'
import VideoBanner from '~/components/VideoBanner'
import About from '~/components/About'
//import Services from '~/components/Services'
import CallAction from '~/components/CallAction'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
//import Notification from '~/components/Notification'
import DotsParallax from '~/components/Parallax/Dots'
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
//import Mision from '@/components/Mision/Mision'
//import Necesidad from '@/components/Necesidad/Necesidad'
//import TestiCard from '@/components/Cards/Vision'
import { mapState } from 'vuex'
import axios from  'axios';

export default {
  components: {
    'main-header': Header,
    SquareParallax,
    DotsParallax,
    VideoBanner,
    About,
    CallAction,
    PageNav,
    Hidden,

    'main-footer': Footer,
  },
  computed: {
    ...mapState(["url_base"]),
    isTablet() {
      return (
        this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown'
      ) // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    },
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    isDesktop() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
  },
  data() {
    return {
      defaulimg: './images/logojuvenil.png',
      imgAPI: imgAPI,
      imagnes_uno: '/images/DSC00695.JPG',
      imagnes_dos: '/images/isc lima - Isaac Peñaherrera.jpg',
      objetivo:
        'Replantear los principios de las identidades juveniles hacia la toma de decisiones con respecto a la situación que atraviesa sus barrios, mediante  las prácticas y saberes de las culturas urbanas y ancestrales.',
      itemequiopos:[]
    }
  },
  mounted() {
    this.$vuetify.theme.dark = true
    this.listEquipos();
  },
  methods:{
    
    listEquipos(){
      let me = this;       
      let url =me.url_base+ "Control/Equipo.php";
      axios({
        method: "GET",
        url: url,
      })
        .then(function(response) {
          me.itemequiopos = response.data;
        ///  console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  head() {
    return {
      title: 'Red-G.-Juvenil' + ' - Equipo',
    }
  },
}
</script>
