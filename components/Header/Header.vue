<template>
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
                    <NuxtLink to="/">
                 <v-btn
                      class="anchor-link "
                      href="#"                   
                      text                     
                    >
                     Inicio
                    </v-btn>
               </NuxtLink>

                    <NuxtLink to="/Conocenos">
                 <v-btn
                      class="anchor-link "
                      href="#"                   
                      text                     
                    >
                      Conocenos
                    </v-btn>
            </NuxtLink>        
                    <NuxtLink to="/Conocenos">
                 <v-btn
                      class="anchor-link "
                      href="#"                   
                      text                     
                    >
                         Otras Miradas
                    </v-btn>
            </NuxtLink>                        

                <NuxtLink to="/contact">
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
                    <NuxtLink  :to="{name:'Espacio___en',params:{id:item.id_espacio}}" >

                      <a href="">
                           <v-list-item-title>{{ item.nombre_espacio }}</v-list-item-title>
                      </a>
                     
                  </NuxtLink>                   
                
                    </v-list-item>
                  </v-list>
                </v-menu>              

               <NuxtLink to="/EquipoTecnico">
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
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import logo from '~/static/images/agency-logo.svg'
import link from '~/static/text/link'
import brand from '~/static/text/brand'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'
import axios from  'axios';
import { mapState } from 'vuex'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    },
  
  },
  data() {
    return {
      logo: logo,
      link: link,
      loaded: false,
      brand: brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40)
      ],
      itemEspacios:[]
    }
  },
  mounted() {
    this.loaded = true
    this.ListEspacios();
  },
  methods: {
     ListEspacios(){
         let me = this;       
           let url = me.url_base+"Control/espacioList.php";
        axios({
            method: "GET",
            url: url,            
        }).then(function (response) {           
             me.itemEspacios = response.data;
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
  computed: {

      ...mapState(["url_base"]),
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    mdUp() {
      return this.$mq === 'md' || this.$mq === 'lg' || this.$mq === 'xl'
    }
  }
}
</script>
