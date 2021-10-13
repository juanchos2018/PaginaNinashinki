<template>
  <v-container class="max-lg footer">
    <v-row class="spacing4">
      <v-col
        class="pa-4"
        md="3"
        cols="12"
      >
        <div class="logo">
          <img
            :src="logo"
            alt="logo"
          >
          <h6 class="title">
            {{titulo }}
          </h6>
        </div>
        <p class="footer-desc pb-2">
          {{ subTitle}}
        </p>
        <p class="body-2" v-if="isDesktop">
          &copy;&nbsp;
          {{ fottercopyright}}
        </p>
      </v-col>
      <v-col
        class="pa-6"
        md="6"
        cols="12"
      >
        <!-- <v-expansion-panels v-if="isMobile" class="accordion-root">
          <v-expansion-panel
            v-for="(footer, index) in footers"
            :key="index"
            class="accordion-content"
          >
            <v-expansion-panel-header>
              <h6 class="title mb-4">
                {{ footer.title }}
              </h6>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li
                  v-for="(item, index) in footer.description"
                  :key="index"
                >
                  <nuxt-link :to="footer.link[index]">
                    {{ item }}
                  </nuxt-link>
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

         -->
        <v-row justify="space-around" v-if="isDesktop">
          <v-col
            v-for="(footer, index) in footers"
            :key="index"
            sm="3"
            cols="12"     
            class="px-lg-4 px-0 site-map-item"
          >
            <h6 class="title-nav">
              {{ footer.title }}
            </h6>
            <ul>
              <li
                v-for="item in footer.description"
                 :key="item.id_espacio"
              >
                <nuxt-link to="/">
                  {{ item.nombre_espacio }}
                </nuxt-link>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        md="3"
        cols="12"
        class="pa-4"
      >
        <div class="socmed">
         <a href="https://www.facebook.com/Red-de-Gesti%C3%B3n-Juvenil-106975174854927" target="_blank">   <v-btn
            text
            icon
            class="button"            
            
          >
        
            <span class="ion-social-facebook icon" />
          </v-btn>
          </a>
          <v-btn
            text
            icon
            class="button"
          >
            <span class="ion-social-twitter icon" />
          </v-btn>
         
          <v-btn
            text
            icon
            class="button"
            
          >
            <span class="ion-social-linkedin icon" />
          </v-btn>
        </div>        
      </v-col>
    </v-row>
    <p class="body-2 text-center" v-if="isMobile">
      &copy;&nbsp;
      {{ fottercopyright }}
    </p>
  </v-container>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/logonia.png'
import brand from '~/static/text/brand'
import axios from  'axios';
import { mapState } from 'vuex'

export default {
  data: () => ({
    titulo:'NinaShunku',
    subTitle:'Al momento que un joven administra un espacio el espacio se vuelve de jóvenes',
    fottercopyright:'Juan-LEYDI-Edgar',
    logo: logo,
    brand: brand, 
    footers: [
      {
        title: 'Espacios',
        description: [],
        link: ['#team', '#history', '#contact-us', '#locations']
      },

    
    ]
  }),
  computed: {
          ...mapState(["url_base"]),
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },   
  },
  mounted() {
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
             me.footers[0].description = response.data;
        }).catch((error) => {
                console.log(error);
        });
    },
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
