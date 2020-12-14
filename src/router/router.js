import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ['/inicio']
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    component: () => import(/* webpackChunkName: "opiniones" */ '../views/Opiniones.vue'),
    alias: ['/opinion']
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import(/* webpackChunkName: "favoritos" */ '../views/Favoritos.vue'),
    alias: ['/favorito']
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "administracion" */ '../views/Administracion.vue'),
    alias: ['/admin']
  },
  {
    path: '/editaropinion/:idLista',
    name: 'EditarOpinion',
    component: () => import(/* webpackChunkName: "editaropinion" */ '../views/EditarOpinion.vue'),
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
