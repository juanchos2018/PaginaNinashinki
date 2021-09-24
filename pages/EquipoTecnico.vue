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
                    <v-card class="" max-width="434" tile>
                      
                      <v-img
                        height="100%"
                        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                      >
                      
                        <v-row align="end" class="fill-height">

                          <v-col align-self="start" class="pa-0" cols="6">
                            <v-avatar
                              class="profile"
                              color="grey"
                              size="164"
                              tile
                            >
                              <v-img
                                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                                  alt="Avatar"
                              ></v-img>
                            </v-avatar>
                         
                          </v-col>

                          <v-col >
                            <v-list-item color="rgba(0, 0, 0, .4)" dark>
                              <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                  Marcus Obrien
                                </v-list-item-title>
                                <v-list-item-subtitle
                                  >Network Engineer</v-list-item-subtitle
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>
                          
                           <v-col  align-self="top"  >
                            <v-list-item color="rgba(0, 0, 0, .4)" dark>
                              <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                  Mdesdes
                                </v-list-item-title>
                                <v-list-item-subtitle
                                  >Network Engineer</v-list-item-subtitle
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>

                        </v-row>


                     

                      </v-img>
                      
                    </v-card>
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
    }
  },
  mounted() {
    this.$vuetify.theme.dark = true
  },

  head() {
    return {
      title: 'NinashunKu' + ' - Conocenos',
    }
  },
}
</script>
