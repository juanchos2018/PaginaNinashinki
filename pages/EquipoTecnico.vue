<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <square-parallax />

        <section id="home">
          <video-banner :img="defaulimg" />
        </section>

        <!-- <section
          id="about"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <about />
        </section> -->

        <dots-parallax />
      </div>

      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <main-footer />
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
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
//import Notification from '~/components/Notification'
import DotsParallax from '~/components/Parallax/Dots'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    SquareParallax,
    DotsParallax,
    VideoBanner,
    About,
    Services,
    Expertise,
    PageNav,
    Hidden,
    'main-footer': Footer,
  },
  data() {
    return {
      defaulimg: './images/logonia.png',
    }
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
  },
  mounted() {
    this.$vuetify.theme.dark = true
  },
  head() {
    return {
      title: 'NinashunKu' + ' - Equipo Tecnico',
    }
  },
}
</script>
