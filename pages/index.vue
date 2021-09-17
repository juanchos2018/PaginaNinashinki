<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <square-parallax />
        <section id="home">
          <video-banner />
        </section>
        <!-- <section
          id="about"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <about />
        </section> -->
        
        <section
          id="services"
          class="space-top"
        >
          <services  :data="itemEventos"/>
        </section>

        <br><br><br>
        <section
          id="our-expertise"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <expertise v-bind:data="itemFotosOranizaciones" />
        </section>
        <section
          id="testimonials"
        :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <testimonials />
        </section>

        <br><br><br>
        <br>
    
        <section
          id="conocenos"
         
        >
        <div    v-for="item in itemEspacios"       :key="item.id_espacio">
            <Espacios2 :nombre="item.nombre_espacio" :id_espacio="item.id_espacio"/>
              <!-- <Espacios :nombre="item.nombre_espacio" :id_espacio="item.id_espacio"/>  -->
             <blockquote>
                        _____________________________________________________________________________________________________
          </blockquote>
        </div>
        
        </section>
        <!-- <section id="case-studies">
          <case-studies />
        </section> -->

        <!-- <section class="space-top-short" id="call-to-action">
          <call-action />
        </section> -->
        <!-- <dots-parallax />       -->
        <section class="space-top-short" id="address">
          <map-address />
        </section>
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <main-footer />
      <!-- <hidden point="mdDown">
        <notification />
      </hidden> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-top: section-margin(6px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin($spacing1 / 2);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 / 2);
}
.space-top-short {
  margin-top: section-margin($spacing1 / 2);
}
.container-wrap {
  @include breakpoints-up(md) {
    margin-top: $spacing6;
  }
  section {
    position: relative;
  }
}
</style>



<script>
import Header from '~/components/Header'
import SquareParallax from '~/components/Parallax/Square'
import VideoBanner from '~/components/VideoBanner'
import About from '~/components/About'
import Services from '~/components/Services'
import Expertise from '~/components/Expertise'
import Testimonials from '~/components/Testimonials'
import CaseStudies from '~/components/CaseStudies'
import CallAction from '~/components/CallAction'
import MapAddress from '~/components/MapAddress'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
//import Notification from '~/components/Notification'
import DotsParallax from '~/components/Parallax/Dots'
import brand from '~/static/text/brand'
 import Espacios2 from '~/components/Espacios/Espacios2'


import { mapState, mapGetters, mapActions } from 'vuex'
import axios from  'axios';


export default {
  components: {
    'main-header': Header,
    SquareParallax,
    DotsParallax,
    VideoBanner,
    About,
    Services,
    Expertise,
    Testimonials,
    CaseStudies,
    CallAction,
    MapAddress,
    PageNav,
    Hidden,   
    Espacios2,
    'main-footer': Footer
  },
  data(){
    return{
      itemEventos:[],
              itemEspacios:[],
      itemFotosOranizaciones:[]
    }
  },
  computed: {
    ...mapState(["url_base"]),
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    }
  },
  mounted(){
    this.ListEventosOrganizacion();
    this.ListFotosOrganizaciones();
    this.ListEspacios();
    this.$vuetify.theme.dark = true;
  },
  methods:{
     ListEventosOrganizacion(){
       let me = this;          
          //let url = this.url_base +"eventoesorgaList/";
           let url = me.url_base+ "Control/EventoOrganizacion.php";      
        axios({
            method: "GET",
            url: url,            
        }).then(function (response) {
            /// console.log(response)
             me.itemEventos = response.data.result;
        }).catch((error) => {
                console.log(error);
        });
    },
    ListFotosOrganizaciones(){
           let me = this;
           let tipo="Fotos";
          let url = this.url_base +"Control/PeticionesPagina.php?tipo="+tipo;
      //   let url = "organizacionListPhotos/"+id_organizacion;
        axios({
            method: "GET",
            url: url,
            
        }).then(function (response) {
          ///  console.log(response)
             me.itemFotosOranizaciones = response.data.result;
        }).catch((error) => {
                console.log(error);
        });
    },
     ListEspacios(){
         let me = this;       
           let url = me.url_base+"Control/espacioList.php";
      //   let url = "organizacionListPhotos/"+id_organizacion;
        axios({
            method: "GET",
            url: url,            
        }).then(function (response) {           
             me.itemEspacios = response.data;
        }).catch((error) => {
                console.log(error);
        });
    }
  },
  head() {
    return {
      title: 'NinashunKu'+ ' - Inicio'
    }
  }
}
</script>
