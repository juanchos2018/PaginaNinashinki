<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <square-parallax />

        <section id="home">
          <video-banner :img="url_base+ imgFotoEspacio" />
        </section>
  <section>
 

    <v-container> 
            <div class="">
                  <h4 class="title-primary">
                  Fotos
                  </h4>  
                </div>
     </v-container>
 
  <v-container :class="{ 'fixed-width': mdUp }">
        
        <!-- <u-animate-container>        -->
              <div class="massonry">
                <v-row   >
                  <v-col cols="6" lg="4"
                        sm="6"   class="pa-sm-6 pa-2"   v-for=" item in itemFotosEspacios"
                        :key="item.id_fotoeventoespacio"
                        >
                    <!-- <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    > -->
                      <div >                    
                          <card-galeria2
                          :bg="url_base+item.photo"                        
                          :title="item.nombre_foto"                          
                           size="mediun"                         
                          :show-img="() => showImg(item.id_fotoeventoespacio)"
                        />  
                      </div>
                    <!-- </u-animate> -->
              </v-col>  

                
               </v-row>
           </div>     
        

       <!-- </u-animate-container>         -->
  </v-container>
  

  </section>
  

  <br><br><br>

      

     

  <br><br><br>

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


  </div>
</template>

<style lang="scss" scoped>

@import './about-style.scss';
//@import '@/components/Title/title-style.scss';

</style>

<script>
import Header from '~/components/Header'
import SquareParallax from '~/components/Parallax/Square'
import VideoBanner from '~/components/VideoBanner'
import About from '~/components/About'
import CallAction from '~/components/CallAction'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
//import Notification from '~/components/Notification'
//import DotsParallax from '~/components/Parallax/Dots'
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'

import Title from '@/components/Title/Title'
import CardGaleria2 from '@/components/Cards/CardGaleria2'
import { mapState } from 'vuex'
import axios from  'axios';


export default {
  components: {
    'main-header': Header,
    SquareParallax,    
    VideoBanner,
    About,
      'title-main': Title,  
    CallAction,
    PageNav,
    Hidden,     
    CardGaleria2,
    'main-footer': Footer
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
      imgs() {
      const arr = []
      this.itemFotosEspacios.map(item => {
        arr.push(this.url_base + item.photo)
      })
      return arr
    },
  },
  data() {
    return {

       visible: false,
      loaded: false,
       index:0,
      idespacio:0,
      imgFotoEspacio:'',
      NombreEspacio:'',
      itemFotosEspacios:[],
      imgAPI: imgAPI,
      imagnes_uno: '/images/DSC00695.JPG',
      imagnes_dos: '/images/isc lima - Isaac Peñaherrera.jpg',
      objetivo:
        'Replantear los principios de las identidades juveniles hacia la toma de decisiones con respecto a la situación que atraviesa sus barrios, mediante  las prácticas y saberes de las culturas urbanas y ancestrales.'
    }
  },


  mounted() {
    this.loaded = true
  //  this.ListEspacios();
   this.idespacio =  this.$route.params.id
  
   if (this.idespacio) {
        this.ListFotos(this.idespacio)
        localStorage.setItem("idespacio",this.idespacio)  
       // this.SentVisitante(this.idespacio)
         this.InfoEspacio(this.idespacio)
          this.SentVisitante(this.idespacio)     
   }
 else  if (this.idespacio==undefined) {
        this.idespacio =   localStorage.getItem('idespacio')
        this.ListFotos(this.idespacio)
      //  this.SentVisitante(this.idespacio)
        this.InfoEspacio(this.idespacio)
         this.SentVisitante(this.idespacio)     
   }    
   
  },

  methods:{
     
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
     InfoEspacio(id_espacio ) {
        let me = this     
       let url = me.url_base+ "Control/espacioList.php?id_espacio=" + id_espacio;
      axios({
        method: 'GET',
        url: url
      })
        .then(function(response) {         
              me.imgFotoEspacio=response.data.result.photo;
              me.NombreEspacio = response.data.result.nombre_espacio
           //   me.VisionEspacio = response.data.result.vision
            //  me.MisonEspacio = response.data.result.mision
           //   me.ojetivo = response.data.result.objetivo
           //   me.historia = response.data.result.historia
        })
        .catch(error => {
          console.log(error)
        })
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
     ListFotos(id){
       let me = this;     
       var tipo="fotos";
       let url = this.url_base +"Control/PeticionesPagina.php?idespacio="+id+"&tipodatos="+tipo;
       
       axios({
            method: "GET",
            url: url,            
        }).then(function (response) {
           //  console.log(response)
             me.itemFotosEspacios = response.data.result;
        }).catch((erro) => {
                console.log(error);
        });
    },
  },
  head() {
    return {
      title: 'NinashunKu' + ' -Fotos'
    }
  }
}
</script>
