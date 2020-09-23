import Vue from 'vue'
import VueRouter from 'vue-router'
import heading from '../components/HP2Components/heading'
import tselector from '../components/TXP2Components/Tselector'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/1'
  },
  {
    path: '/1',
    name: 'SelectionPage1',
    component: heading
  },
  {
    path: '/2',
    name: 'SelectionPage2',
    component: tselector
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
