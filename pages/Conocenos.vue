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
              <div class="root1">  
              <v-container class="fixed-width">        
                      <div class="massonry" >
                          <u-animate-container>
                                <v-row>
                              <v-col md="6" cols="12" class="illu-wrap">
                                  <hidden point="smDown">
                                  <div class="illustration one" />
                                  <figure class="illustration two">
                                      <img :src="imagnes_uno" alt="about" />
                                  </figure>
                                  <br>
                                  <figure class="illustration three">
                                      <img :src="imagnes_uno" alt="about"/>
                                  </figure>
                                  <br>
                                  <figure class="illustration four">
                                      <img :src="imagnes_uno" alt="about">
                                  </figure>
                                  <div class="illustration five" />
                                  </hidden>
                              </v-col>
                              <v-col md="6" cols="12">
                                  <u-animate
                                  :offset="-100"
                                  delay="0.2s"
                                  name="fadeInRight"
                                  duration="0.6s"
                                  >
                                  <div>
                                  <div class="title-about">
                                      <h3 class="use-text-title">
                                          <span>Problematica</span>
                                      </h3>
                                      </div>
                                      <p class="use-text.paragraph">
                                      La problemática que se desea trabajar es la falta de oportunidades que tiene la juventud en todos los ámbitos del desarrollo personal, con la desvalorización de la cultura, la falta de formación, experiencia laboral, desarrollo de habilidades y destrezas.
                                      </p>                            
                                  </div>                            
                                  </u-animate>
                              </v-col>
                              </v-row>
                          </u-animate-container>
                    </div>              
                </v-container>

                
            </div>
      </section>

  <br><br><br>

        <section >
         <mision/>

        </section>    

       <section id="blog" class="space-top-short">
          <necesidad />
        </section>

  <br><br><br>

  <br><br>
   <section  class="space-top-short">        
            <v-container>
          <div class="item">
          <testi-card
              :text="objetivo"
              name="Objetivo General"
          
            />
             </div>
               </v-container>
        </section>

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
import Services from '~/components/Services'
import CallAction from '~/components/CallAction'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
//import Notification from '~/components/Notification'
import DotsParallax from '~/components/Parallax/Dots'
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import Mision from '@/components/Mision/Mision'
import Necesidad from '@/components/Necesidad/Necesidad'
import TestiCard from '@/components/Cards/Vision'

export default {
  components: {
    'main-header': Header,
    SquareParallax,
    DotsParallax,
    VideoBanner,
    About,
    Services,
    Necesidad,
    CallAction,
    PageNav,
    Hidden,
    Mision,
    TestiCard,

    'main-footer': Footer
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
    }
  },
  data() {
    return {
      defaulimg:'./images/logonia.png',
      imgAPI: imgAPI,
      imagnes_uno: '/images/DSC00695.JPG',
      imagnes_dos: '/images/isc lima - Isaac Peñaherrera.jpg',
      objetivo:
        'Replantear los principios de las identidades juveniles hacia la toma de decisiones con respecto a la situación que atraviesa sus barrios, mediante  las prácticas y saberes de las culturas urbanas y ancestrales.'
    }
  },
  mounted(){
     this.$vuetify.theme.dark = true;
  },

  head() {
    return {
      title: 'NinashunKu'+ ' - Conocenos'
    }
  }
}
</script>
