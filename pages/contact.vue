<template>
  <div>
    <decoration />
    <contacto />
  </div>
</template>

<script>
import Contact from '~/components/Forms/Contact'
import Decoration from '~/components/Forms/Decoration'
import brand from '~/static/text/brand'
import Contacto from '~/components/Forms/Contacto'

export default {
  components: {
    Contact,
    Contacto,
    Decoration
  },
  head() {
    return {
      title: 'NinashunKu' + ' -Sumate'
    }
  }
}
</script>
