<template>
  <div>
    <div class="main-wrap">

      <!-- <main-header /> -->

      <fragment>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
    >
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo"
          >
            <v-btn
              v-if="isMobile"
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              text
              icon
              @click.stop="handleToggleOpen"
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div class="logo">
              <nuxt-link
                v-if="invert"
                :to="link.agency.home"
                
              >
                <!-- <img
                  :src="logo"
                  alt="logo"
                > -->
              NinashunKu
              </nuxt-link>
              <scrollactive
                v-if="!invert && loaded"
                tag="span"
              >
                <a
                  href="#home"
                  class="anchor-link scrollactive-item"
                >
                  <!-- <img
                    :src="logo"
                    alt="logo"
                  > -->
                  NinashunKu
                </a>
              </scrollactive>
            </div>
          </nav>
          <nav
            :class="{ invert: invert }"
            class="nav-menu"
          >
            <div v-if="isDesktop">
              <scrollactive
                v-if="loaded"
                :offset="navOffset"
                active-class="active"
                tag="ul"
              >
                   <li>
                    <NuxtLink to="/"
                     style="color: #FFFFFF;
    text-decoration: none;">
                 <v-btn
                      class="anchor-link "
                      href="#"                   
                      text                     
                    >
                     Inicio
                    </v-btn>
               </NuxtLink>

                    <NuxtLink to="/Conocenos"  style="color: #FFFFFF;
    text-decoration: none;">
                 <v-btn
                      class="anchor-link "
                      href="#"                   
                      text                     
                    >
                      Conocenos
                    </v-btn>
            </NuxtLink>        
                    <NuxtLink to="/Conocenos"  style="color: #FFFFFF;
    text-decoration: none;">
                 <v-btn
                      class="anchor-link "
                      href="#"                   
                      text                     
                    >
                         Otras Miradas
                    </v-btn>
            </NuxtLink>                        

                <NuxtLink to="/contact"  style="color: #FFFFFF;
    text-decoration: none;">
                  <v-btn  href="#home">Sumate a la Movida</v-btn>
                </NuxtLink>
                
                <v-menu open-on-hover offset-y>
                  <template v-slot:activator="{ on, attrs }">                         
                    <v-btn
                      href="#home"
                      class="anchor-link "
                        color="primary"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Espacios Culturales
                    </v-btn>                    
                 
                  </template>
                  <v-list>
                    <v-list-item
                      v-for=" item in itemEspacios"
                     :key="item.id_espacio"                     
                    >                   

                      <a
                  href="#"
                  style="color: #FFFFFF;
    text-decoration: none;"
                >
                      <v-list-item-title @click="RecargarPagina(item.id_espacio)">{{ item.nombre_espacio }}</v-list-item-title>
                           </a>
                      </v-list-item>
                  </v-list>
                </v-menu>              

               <NuxtLink to="/EquipoTecnico"  style="color: #FFFFFF;
    text-decoration: none;">
                  <v-btn  href="#home">Equipo Tecnico</v-btn>
                </NuxtLink>                 
                </li>   
              </scrollactive>
            </div>
            <!-- <setting-menu :invert="invert" /> -->
          </nav>
        </div>
      </v-container>

      
    </v-app-bar>
  </fragment>

      <div class="container-wrap">
        <square-parallax />

        <section id="home">
          <video-banner :img="url_base+ imgFotoEspacio" :ColorEspaciovideo="ColorEspacio"   :linkfacebook="linkfacebook" />
        </section>


           
      <section>
       
          <div class="root2" :style="colorEspaciocom">  
             
              <v-container class="fixed-width">        
                      <div class="massonry" >

                      
                          <u-animate-container>
                                <v-row>
                              <v-col md="6" cols="12" class="illu-wrap">
                                  <hidden point="smDown">
                                  <div class="illustration2 one" :style="colorEspacioIlustra" />
                                  <figure class="illustration2 two" :style="colorEspacioIlustra">
                                      <img :src="imagnes_uno" alt="about" />
                                  </figure>
                                  <br>
                                  <figure class="illustration2 three" :style="colorEspacioIlustra" >
                                      <img :src="imagnes_uno" alt="about"/>
                                  </figure>
                                  <br>
                                  <figure class="illustration2 four" :style="colorEspacioIlustra" >
                                      <img :src="imagnes_uno" alt="about">
                                  </figure>
                                  <div class="illustration2 five" :style="colorEspacioIlustra"  />
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
                                          <span>objetivo</span>
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
       <section>
           <mision :mision="MisonEspacio" :vision="VisionEspacio" /> 
      </section>
  <br><br><br>     
    
    <section>
       <center> 
          <u-animate-container>           
          <v-col md="6" cols="12">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
          <div class="blog-wrap">

            <article class="px-2">
              <h3 class="use-text-title2">
               Historia
              </h3>
              <p class="use-text-paragraph">
              {{historia}}            
                </p>
            </article>
          
          </div>
           </u-animate>
            </v-col>
          </u-animate-container>
       </center>   
    </section>
  <br><br><br>



  <v-container :class="{ 'fixed-width': mdUp }">
        <u-animate-container>

          <v-row class="spacing6">
            <v-col cols="12" md="3" class="pa-6">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="title-primary">
                  Galeria
                  </h4>  
                </div>
              </u-animate>
            </v-col>
             <v-col cols="12" md="9" class="pa-6">
              <div class="massonry">

                <v-row   no-gutters      >
                  <v-col cols="12" sm="4" md="4" class="pa-3"   v-for=" item in itemFotosEspacios"
                        :key="item.id_fotoeventoespacio"
                        >
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    >
                      <div >                    
                          <card-galeria
                          :bg="url_base+item.photo"                        
                          :title="item.nombre_foto"                          
                           size="mediun"                         
                          :show-img="() => showImg(item.id_fotoeventoespacio)"
                        />  
                      </div>
                    </u-animate>
              </v-col>  

                <v-col
                    cols="6"
                    sm="4" md="4" class="pa-3"
                  >
              <u-animate
                :delay="(itemFotosEspacios.length * 0.2) + 's'"
                name="fadeInUpShort"
                duration="0.4s"
              >
                <div class="card-wrap">
                  <span class="fold"></span>
                
                  <card-galeria
                          bg="/images/iconofotos.png"                 
                          title="mdsas fotos"                          
                          size="mediun"
                          :simple="false"
                          :show-img="() => IraTodasFotos()"
                        />
                         <span class="property">
                      <span class="title-category">Todos los Fotos</span>
                      <v-icon>mdi-arrow-right</v-icon>
                    </span>
                </div>
              </u-animate>
            </v-col>  
               </v-row>
           </div>
       </v-col>
         </v-row>
         
          <!-- videsos we -->

           <v-row class="spacing6">
            <v-col cols="12" md="3" class="pa-6">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="title-primary">
                  Videos
                  </h4>  
                </div>
              </u-animate>
            </v-col>
             <v-col cols="12" md="9" class="pa-6">
              <div class="massonry">
                <v-row   no-gutters      >
                  <v-col cols="12" sm="4" md="4" class="pa-3"   v-for=" item in itemvideos"
                        :key="item.id_videoventoespacio"
                        >
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    >
                      <div >                    
                          <card-galeria
                           bg="/images/youtubeone.png"                        
                          :title="item.nombre_video"                          
                           size="mediun"                         
                          :show-img="() => handleVideoOpen(item.idvideo)"
                        />  
                      </div>
                    </u-animate>
              </v-col>  
                 <v-col
                    cols="6"
                    sm="4" md="4" class="pa-3"
                  >
              <u-animate
                :delay="(itemvideos.length * 0.2) + 's'"
                name="fadeInUpShort"
                duration="0.4s"
              >
                <div class="card-wrap">
                  <span class="fold"></span>                
                  <card-galeria
                          bg="/images/youtubeone.png"                 
                          title="mdsas fotos"                          
                          size="mediun"
                          :simple="false"
                          :show-img="() => IraVideos()"
                        />
                         <span class="property">
                      <span class="title-category">Todos los Videos</span>
                      <v-icon>mdi-arrow-right</v-icon>
                    </span>
                </div>
              </u-animate>
            </v-col>  
               </v-row>
           </div>
       </v-col>
           </v-row>

      <!-- Noticias -->

  <v-row class="spacing6">
            <v-col cols="12" md="3" class="pa-6">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="title-primary">
                  Noticias
                  </h4>  
                </div>
              </u-animate>
            </v-col>
             <v-col cols="12" md="9" class="pa-6">
              <div class="massonry">
                <v-row   no-gutters      >
                  <v-col cols="12" sm="4" md="4" class="pa-3"   v-for=" item in itemNoticias"
                        :key="item.id_noticiaeventoespacio"
                        >
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    >
                      <div >                    
                          <card-galeria
                          :bg="url_base+item.photo"                        
                          :title="item.titulo"                          
                           size="mediun"                         
                          :show-img="() => showImg2(item.id_noticiaeventoespacio)"
                        />  
                      </div>
                    </u-animate>
              </v-col>  

                <v-col
                    cols="6"
                    sm="4" md="4" class="pa-3"
                  >
              <u-animate
                :delay="(3 * 0.2) + 's'"
                name="fadeInUpShort"
                duration="0.4s"
              >
                <div class="card-wrap">
                  <span class="fold"></span>
                
                  <card-galeria
                          bg="/images/iconofotos.png"                 
                          title="mdsas fotos"                          
                          size="mediun"
                          :simple="false"
                          :show-img="() => IraTodasNoticias()"
                        />
                         <span class="property">
                      <span class="title-category">Todos las Noticias</span>
                      <v-icon>mdi-arrow-right</v-icon>
                    </span>
                </div>
              </u-animate>
            </v-col>  
         </v-row>
           </div>
       </v-col>
         </v-row>
         

        

       </u-animate-container>        
  </v-container>



  <br><br>
 

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
  <vue-easy-lightbox
       v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />    
  <vue-easy-lightbox
       v-if="loaded2"
      :visible="visible2"
      :imgs="imgs2"
      :index="index2"
      @hide="handleHide2"
    />

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
@import './about-style.scss';
@import '@/components/Title/title-style.scss';
@import '@/components/Header/header-style.scss';

.root2 {
    background: url($pattern) repeat var(--background);
    background-size: 10%;
    position: relative;
    color: $palette-common-white;
    padding: spacing(10, 0);
    @include breakpoints-down(xs) {
        text-align: center;
        padding: spacing(3, 0);
    }
    p {
        margin-bottom: $spacing5
    }
    .v-btn.white {
        min-width: 180px;
        font-size: 18px;
        color: $palette-primary-dark !important;
    }
}
.illustration2 {
    margin-top: 20px;
    box-shadow: 0 0px 18px 0 rgba(0, 0, 0, 0.17);
    position: absolute;
    border: 15px  var(--border);
    background: var(--background2);
    border-radius: 25px;
    transform: rotate(45deg);
    overflow: hidden;
    img {
        height: 105%;
        .v-application--is-ltr & {
            transform: translateX(-20%)rotate(-45deg) scale(1.3);
        }
        .v-application--is-rtl & {
            transform: translateX(20%)rotate(-45deg) scale(1.3);
        }
    }
    &.one {
        border-radius: 15px;
        width: 60px;
        height: 60px;
        top: -10px;
        @include left(100px);
    }
    &.two {
        width: 180px;
        height: 180px;
        top: -10px;
        @include left(300px);
    }
    &.three {
        width: 160px;
        height: 160px;
        top: 130px;
        @include left(50px);
        left: 50px
    }
    &.four {
        width: 210px;
        height: 210px;
        bottom: -40px;
        @include left(250px);
        left: 250px
    }
    &.five {
        border-radius: 15px;
        width: 60px;
        height: 60px;
        bottom: -30px;
        @include right(10px);
    }
}
</style>

<script>

import axios from 'axios'

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
import CardGaleria from '@/components/Cards/CardGaleria'
import { mapState } from 'vuex'
import youtube from '@/youtube'

export default {
  components: {
    'main-header': Header,
    SquareParallax,
    DotsParallax,
    VideoBanner,
    About,
    Services,
    CallAction,
    PageNav,
    Hidden, 
    Mision,
CardGaleria,
    'main-footer': Footer
  },
   props: {
    invert: {
      type: Boolean,
      default: false
    },
  
  },
  computed: {
    ...mapState(['url_base']),
    colorEspaciocom(){
      return {        
         '--background': "repeat "+this.ColorEspacio       
      }
    },
    colorEspacioIlustra(){
      return {        
         '--border': "solid "+this.ColorEspacio2,
          '--background2': this.ColorEspacio2         
      }
    },
     colorbackground(){
      return {        
         '--backgroundsss': this.ColorEspacio2       
      }
    },
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
    imgs() {
      const arr = []
      this.itemFotosEspacios.map(item => {
        arr.push(this.url_base + item.photo)
      })
      return arr
    },
     imgs2() {
      const arr = []
      this.itemNoticias.map(item => {
        arr.push(this.url_base + item.photo)
      })
      return arr
    }
  },
  data() {
    return {
      visible: false,
      loaded: false,


      visible2: false,
      loaded2: false,
     
      dialog: false,
      yt: youtube,
      loaded: false,
      videoId: '6p0VM-yUpGk',
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8001'
      },
      imgAPI: imgAPI,
      imagnes_uno: '/images/DSC00695.JPG',
      imagnes_dos: '/images/isc lima - Isaac Peñaherrera.jpg',
      objetivo:
        'Replantear los principios de las identidades juveniles hacia la toma de decisiones con respecto a la situación que atraviesa sus barrios, mediante  las prácticas y saberes de las culturas urbanas y ancestrales.',
      idespacio:0,
      NombreEspacio: '',
      MisonEspacio:'',  
      VisionEspacio:'',
      linkfacebook:'',

      ColorEspacio:'#2196f3',
      ColorEspacio2:'#2196f3',
      ojetivo:' La problemática que se desea trabajar es la falta de oportunidades que tiene la juventud en todos los ámbitos del desarrollo personal, con la desvalorización de la cultura, la falta de formación, experiencia laboral, desarrollo de habilidades y destrezas',
      historia:'lorem  lorem lorem lorem ',
      imgFotoEspacio:'',
      itemvideos:[],
      itemFotosEspacios: [],
      itemNoticias:[],
      index:0,
      index2:0, 
       itemEspacios:[],
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      
   
   }
  },
  mounted(){
    this.$vuetify.theme.dark = true;
    this.ListEspacios();
      this.loaded = true   
      this.loaded2= true   
      this.idespacio =  this.$route.params.id;
     if (this.idespacio) {           
            localStorage.setItem("idespacio",this.idespacio)          
            this.InfoEspacio(this.idespacio)
            this.fotos(this.idespacio);
            this.videos(this.idespacio)     
            this.noticias(this.idespacio)      
            this.SentVisitante(this.idespacio)     
    }
    else  if (this.idespacio==undefined) {
            this.idespacio =   localStorage.getItem('idespacio')         
            this.InfoEspacio(this.idespacio)
            this.fotos(this.idespacio);
            this.videos(this.idespacio);
            this.noticias(this.idespacio) 
            this.SentVisitante(this.idespacio)         
    } 
  },
   watch: {
    $route() {
      this.getRows()
    }
  },
  methods:{
    RecargarPagina(idespacio){
            this.InfoEspacio(idespacio)
            this.fotos(idespacio);
            this.videos(idespacio)     
            this.noticias(idespacio)      
            this.SentVisitante(idespacio)   
    },
     ListEspacios() {
      let me = this
      let url = me.url_base + 'Control/espacioList.php'
      axios({
        method: 'GET',
        url: url
      })
        .then(function(response) {
          me.itemEspacios = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
     handleVideoOpen(id) {
      this.videoId = id
      this.dialog = true
      if (this.yt.use) {
        setTimeout(() => {
          this.player = this.$refs.youtube.player
          this.player.playVideo()
        }, 100)
      }
    },
     handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    },
    showImg(idfoto) {     
      this.index = this.itemFotosEspacios.findIndex(
        x => x.id_fotoeventoespacio == idfoto
      )
      this.visible = true
    },


     handleHide() {
      this.visible = false
    },


    showImg2(idfoto) {     
      this.index2 = this.itemNoticias.findIndex(
        x => x.id_noticiaeventoespacio == idfoto
      )
      this.visible2 = true
    },


     handleHide2() {
      this.visible2 = false
    },

    SentVisitante(idpescio) {
      let me = this;
      let model ={id_espacio:idpescio}
      const data = model;     
      let url =  me.url_base+"Control/Visitante.php";    
      axios({
        method: "POST",
        url: url,
        data: data,
      })
        .then(function(response) {
             console.log(response)
        })
        .catch((error) => {
          console.log(error);
        });
    }, 

    showVideo(id){

    },
    IraTodasFotos(){
      this.$router.push({name: 'EspacioFotos___en',params:{id:this.idespacio}});
    },
    IraVideos(){
     // alert("hjola") 
       this.$router.push({name: 'EspacioVideos___en',params:{id:this.idEspacio}});
    },

    IraTodasNoticias(){
      this.$router.push({name: 'EspacioNoticias___en',params:{id:this.idespacio}});
    },
    InfoEspacio(id_espacio ) {
        let me = this     
       let url = me.url_base+ "Control/espacioList.php?id_espacio=" + id_espacio;
      axios({
        method: 'GET',
        url: url
      })
        .then(function(response) {         
          console.log(response)
              me.imgFotoEspacio=response.data.result.photo;
              me.NombreEspacio = response.data.result.nombre_espacio
              me.VisionEspacio = response.data.result.vision
              me.MisonEspacio = response.data.result.mision
              me.ojetivo = response.data.result.objetivo
              me.historia = response.data.result.historia
              me.ColorEspacio=response.data.result.color;
              me.ColorEspacio2= response.data.result.color2
              me.linkfacebook=response.data.result.linkfacebook
        })
        .catch(error => {
          console.log(error)
        })
    },

    fotos(id){
           let me = this;
           let tipo="fotos";           
          let url = this.url_base +"Control/Peticiones2.php?idespacio="+id+"&tipo="+tipo;
        axios({
            method: "GET",
            url: url,            
        }).then(function (response) {
//console.log(response)
             me.itemFotosEspacios = response.data.result;
        }).catch((error) => {
                console.log(error);
        });
    },
    videos(id){
         let me = this;
           let tipo="videos";           
          let url = this.url_base +"Control/Peticiones2.php?idespacio="+id+"&tipo="+tipo;
        axios({
            method: "GET",
            url: url,            
        }).then(function (response) {
//console.log(response)
             me.itemvideos = response.data.result;
        }).catch((error) => {
                console.log(error);
        });
    },
    noticias(id){
         let me = this;
           let tipo="noticias";           
          let url = this.url_base +"Control/Peticiones2.php?idespacio="+id+"&tipo="+tipo;
        axios({
            method: "GET",
            url: url,            
        }).then(function (response) {
        console.log(response)
             me.itemNoticias = response.data.result;
        }).catch((error) => {
                console.log(error);
        });
    },
      handleScroll: function() {
        if (window.scrollY > 80) {
          return (this.fixed = true)
        }
        return (this.fixed = false)
      },
      setOffset: function(offset) {
        this.navOffset = offset
      },
      handleToggleOpen: function() {
        this.openDrawer = !this.openDrawer
      }
  },
  head() { 

    return {
      title: 'Red-G.-Juvenil' + '-' +this.NombreEspacio
    }
  }
}
</script>
