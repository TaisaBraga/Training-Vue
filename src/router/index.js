import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import ClubsList from '../views/ClubsList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/classificacao',
    name: 'ClubsList',
    component: ClubsList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
