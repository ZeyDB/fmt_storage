import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'auth'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    meta: {layout: 'auth'},
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {layout: 'main'},
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: 'main'},
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
