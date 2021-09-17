<template>
  <div class="mobile-nav">
    <div
      :class="{ 'menu-open': open }"
      class="menu"
    >
      <v-list
        dense
        tag="nav"
      >
         <v-list-item>
        <v-list-item-content>
            <NuxtLink to="/">
             <v-list-item-title class="menu-list">Inicio</v-list-item-title>
            </NuxtLink>
        </v-list-item-content>
        
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
           <NuxtLink to="/Conocenos">
          <v-list-item-title class="menu-list">Conocenos</v-list-item-title>
             </NuxtLink>
        </v-list-item-content>
      </v-list-item>

       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="menu-list">Otras Miradas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="menu-list">Sumate ala Movida</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
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
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="menu-list">Equipo tecnico</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
        <!-- <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          :href="'#' + item"
          link
          :style="{ animationDuration: index * 0.15 + 's' }"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
              {{ $t('agencyLanding.header_'+item) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :href="link.agency.contact"
          link
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
              {{ $t('agencyLanding.header_contact') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         -->
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './header-style';
</style>

<script>
import navMenu from './menu'
import link from '~/static/text/link'
import axios from  'axios';
import { mapState } from 'vuex'
export default {
  data() {
    return {
      link: link,
      navMenu: navMenu,
       itemEspacios:[]
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
   mounted() {
    
    this.ListEspacios();
  },
  methods:{
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
  },
  computed: {
     ...mapState(["url_base"]),  
  }
}
</script>
