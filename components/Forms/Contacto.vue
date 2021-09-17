<template>
  <div class="form-page">
    <div class="page-wrap">
      <v-snackbar
        :timeout="4000"
        top
        right
        v-model="snackbar"
        class="notification"
      >
        <div class="action">
          Message Sent
        </div>
        <v-btn
          text
          icon
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
      <hidden point="mdUp">
        <div class="logo logo-header">
             <nuxt-link :to="routeLink.agency.home">
            <img :src="logo" alt="logo">
          </nuxt-link>
        </div>
      </hidden>
      <v-container class="inner-wrap max-md">
        <v-btn
          :href="routeLink.agency.home"
          icon
          class="backtohome"
        >
          <i class="ion-ios-home-outline" />
          <i class="ion-ios-arrow-thin-left" />
        </v-btn>
        <v-card class="card form-box fragment-fadeUp">
          <div class="full-form-wrap">
            <h3 class="use-text-title title-contact pb-3 text-center">
              {{TitleForm }}
            </h3>
            <p class="desc use-text-subtitle2 text-center">
              {{ Subtitle }}
            </p>
            <div class="form">
              <v-form
                ref="form"
                v-model="valid"
              >
                <v-row class="spacing6">
                  <v-col cols="12" sm="6" class="px-6">
                    <v-text-field
                      v-model="modelo.nombre"
                      
                      label="Cual es tu nombre"
                      color="white"
                      class="input light"
                      filled
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="6" class="px-6">
                    <v-text-field
                      v-model="modelo.correo"
                   
                      label="Cuales tu correo"
                      class="input light"
                      color="white"
                      filled
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="6" class="px-6">
                    <v-text-field
                      
                      label="Cual es tu telefono"
                      color="white"
                      class="input light"
                      filled
                    />
                  </v-col>
                
                  <v-col cols="12" class="px-6">
                    <v-textarea
                      v-model="modelo.mensaje"
                      rows="6"
                      color="white"
                      class="input light"
                      filled
                      label="Escribe tu mensaje"
                    />
                  </v-col>
                </v-row>
                <div class="btn-area flex">
                 
                  <v-btn
                    :block="isMobile"
                    color="secondary"
                    @click="validate"
                    large
                  >
                   Enviar Mensaje
                  </v-btn>
                </div>
              </v-form>
            </div>
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './form-stylecontac.scss';
@import '../Title/title-style.scss';
</style>

<script>
import logo from '~/static/images/logoempresa.png'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import Hidden from '../Hidden'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  components: {
    Hidden
  },
  data() {
    return {

      TitleForm:'Dejanos tus datos',
      Subtitle:'¿Tiene usted alguna pregunta?  ¿O simplemente quieres saludar? Envíanos un mensaje.',
     modelo:{
       nombre:'',
       correo:'',
       mensaje:''
     },
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: '',
      company: '',
      message: '',    
      logo: logo,
      brand: brand,
      routeLink: link
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.EnviarMensaje();
      }
    },
    EnviarMensaje(){
       let me = this;
      const data = me.modelo;     
      let url = me.url_base+"Control/Mensaje.php";    
      axios({
        method: "POST",
        url: url,
        data: data,
      })
        .then(function(response) {
        //  alert("Enviado");
         me.limpiar();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    limpiar(){
          this.modelo.nombre='';
       this.modelo.correo='';
        this.modelomensaje='';
     },
    
    
  },
  computed: {
      ...mapState(['url_base']),
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
