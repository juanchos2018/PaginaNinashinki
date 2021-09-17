<template>
  <div >

<v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
       <div class="item" >
            <testi-card
              :text="mision"
              name="Mision"
            
            />
            
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <div class="item">
            <testi-card
              :text="vision"
              name="Vision"
          
            />
            
          </div>
        </v-col>     
      </v-row>
    </v-container>
  </v-form>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import TestiCard from '../Cards/Vision'

export default {
  components: {
    TestiCard
  },
  props: {
    mision: {
      type: String,
      default:
        'Somos jóvenes, artistas, gestores locales, hiphopas, punkeros, danzantes, cirqueros entre otros que generamos procesos para el bien común, desde la economía social y solidaria, para el fortalecimiento de las habilidades y destrezas de la juventud. Trabajamos para todos los jóvenes tanto hombre como mujeres y la comunidad en general por un cambio del barrio.'
    },
    vision: {
      type: String,
      default:
        'Conocer, reconocer, articular y potenciar los dialogamos para generar injerencia en el barrio a través del arte y la cultura con jóvenes con ganas de aprender atendemos a la población juvenil como prioritaria promoviendo la unificación de estos sectores vulnerables para el desarrollo de PYMES'
    }
  },

  data() {
    return {}
  },
  mounted() {},
  methods: {},
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
