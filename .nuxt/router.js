import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b01090a0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7779a70c = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _64310b61 = () => interopDefault(import('..\\pages\\Conocenos.vue' /* webpackChunkName: "pages/Conocenos" */))
const _7a39227e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _8fe41010 = () => interopDefault(import('..\\pages\\EquipoTecnico.vue' /* webpackChunkName: "pages/EquipoTecnico" */))
const _81b0daf0 = () => interopDefault(import('..\\pages\\Espacio.vue' /* webpackChunkName: "pages/Espacio" */))
const _c2a32612 = () => interopDefault(import('..\\pages\\EspacioFotos.vue' /* webpackChunkName: "pages/EspacioFotos" */))
const _3f009bb6 = () => interopDefault(import('..\\pages\\EspacioNoticias.vue' /* webpackChunkName: "pages/EspacioNoticias" */))
const _6fe2ca00 = () => interopDefault(import('..\\pages\\EspacioVideos.vue' /* webpackChunkName: "pages/EspacioVideos" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _b01090a0,
    name: "index___ar"
  }, {
    path: "/blank-page",
    component: _7779a70c,
    name: "blank-page___en"
  }, {
    path: "/Conocenos",
    component: _64310b61,
    name: "Conocenos___en"
  }, {
    path: "/contact",
    component: _7a39227e,
    name: "contact___en"
  }, {
    path: "/de",
    component: _b01090a0,
    name: "index___de"
  }, {
    path: "/EquipoTecnico",
    component: _8fe41010,
    name: "EquipoTecnico___en"
  }, {
    path: "/Espacio",
    component: _81b0daf0,
    name: "Espacio___en"
  }, {
    path: "/EspacioFotos",
    component: _c2a32612,
    name: "EspacioFotos___en"
  }, {
    path: "/EspacioNoticias",
    component: _3f009bb6,
    name: "EspacioNoticias___en"
  }, {
    path: "/EspacioVideos",
    component: _6fe2ca00,
    name: "EspacioVideos___en"
  }, {
    path: "/id",
    component: _b01090a0,
    name: "index___id"
  }, {
    path: "/pt",
    component: _b01090a0,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _b01090a0,
    name: "index___zh"
  }, {
    path: "/ar/blank-page",
    component: _7779a70c,
    name: "blank-page___ar"
  }, {
    path: "/ar/Conocenos",
    component: _64310b61,
    name: "Conocenos___ar"
  }, {
    path: "/ar/contact",
    component: _7a39227e,
    name: "contact___ar"
  }, {
    path: "/ar/EquipoTecnico",
    component: _8fe41010,
    name: "EquipoTecnico___ar"
  }, {
    path: "/ar/Espacio",
    component: _81b0daf0,
    name: "Espacio___ar"
  }, {
    path: "/ar/EspacioFotos",
    component: _c2a32612,
    name: "EspacioFotos___ar"
  }, {
    path: "/ar/EspacioNoticias",
    component: _3f009bb6,
    name: "EspacioNoticias___ar"
  }, {
    path: "/ar/EspacioVideos",
    component: _6fe2ca00,
    name: "EspacioVideos___ar"
  }, {
    path: "/de/blank-page",
    component: _7779a70c,
    name: "blank-page___de"
  }, {
    path: "/de/Conocenos",
    component: _64310b61,
    name: "Conocenos___de"
  }, {
    path: "/de/contact",
    component: _7a39227e,
    name: "contact___de"
  }, {
    path: "/de/EquipoTecnico",
    component: _8fe41010,
    name: "EquipoTecnico___de"
  }, {
    path: "/de/Espacio",
    component: _81b0daf0,
    name: "Espacio___de"
  }, {
    path: "/de/EspacioFotos",
    component: _c2a32612,
    name: "EspacioFotos___de"
  }, {
    path: "/de/EspacioNoticias",
    component: _3f009bb6,
    name: "EspacioNoticias___de"
  }, {
    path: "/de/EspacioVideos",
    component: _6fe2ca00,
    name: "EspacioVideos___de"
  }, {
    path: "/id/blank-page",
    component: _7779a70c,
    name: "blank-page___id"
  }, {
    path: "/id/Conocenos",
    component: _64310b61,
    name: "Conocenos___id"
  }, {
    path: "/id/contact",
    component: _7a39227e,
    name: "contact___id"
  }, {
    path: "/id/EquipoTecnico",
    component: _8fe41010,
    name: "EquipoTecnico___id"
  }, {
    path: "/id/Espacio",
    component: _81b0daf0,
    name: "Espacio___id"
  }, {
    path: "/id/EspacioFotos",
    component: _c2a32612,
    name: "EspacioFotos___id"
  }, {
    path: "/id/EspacioNoticias",
    component: _3f009bb6,
    name: "EspacioNoticias___id"
  }, {
    path: "/id/EspacioVideos",
    component: _6fe2ca00,
    name: "EspacioVideos___id"
  }, {
    path: "/pt/blank-page",
    component: _7779a70c,
    name: "blank-page___pt"
  }, {
    path: "/pt/Conocenos",
    component: _64310b61,
    name: "Conocenos___pt"
  }, {
    path: "/pt/contact",
    component: _7a39227e,
    name: "contact___pt"
  }, {
    path: "/pt/EquipoTecnico",
    component: _8fe41010,
    name: "EquipoTecnico___pt"
  }, {
    path: "/pt/Espacio",
    component: _81b0daf0,
    name: "Espacio___pt"
  }, {
    path: "/pt/EspacioFotos",
    component: _c2a32612,
    name: "EspacioFotos___pt"
  }, {
    path: "/pt/EspacioNoticias",
    component: _3f009bb6,
    name: "EspacioNoticias___pt"
  }, {
    path: "/pt/EspacioVideos",
    component: _6fe2ca00,
    name: "EspacioVideos___pt"
  }, {
    path: "/zh/blank-page",
    component: _7779a70c,
    name: "blank-page___zh"
  }, {
    path: "/zh/Conocenos",
    component: _64310b61,
    name: "Conocenos___zh"
  }, {
    path: "/zh/contact",
    component: _7a39227e,
    name: "contact___zh"
  }, {
    path: "/zh/EquipoTecnico",
    component: _8fe41010,
    name: "EquipoTecnico___zh"
  }, {
    path: "/zh/Espacio",
    component: _81b0daf0,
    name: "Espacio___zh"
  }, {
    path: "/zh/EspacioFotos",
    component: _c2a32612,
    name: "EspacioFotos___zh"
  }, {
    path: "/zh/EspacioNoticias",
    component: _3f009bb6,
    name: "EspacioNoticias___zh"
  }, {
    path: "/zh/EspacioVideos",
    component: _6fe2ca00,
    name: "EspacioVideos___zh"
  }, {
    path: "/",
    component: _b01090a0,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
