import Vue from 'vue'
import VueRouter from 'vue-router'
import timeselector from '../components/TimeSelectorComponents/TimeSelector'
import typeselector from '../components/TextSelectorComponents/TypeSelector'
import typingpage from '../components/TypingPage'
import logIn from '../views/logIn.vue'
import signIn from '../views/signIn.vue'
import test from '../components/Test'
import typeFast from '../Typefast'
import test2 from '../duplicate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/1'
  },
  {
    path: '/1',
    name: 'SelectionPage1',
    component: timeselector
  },
  {
    path: '/2',
    name: 'SelectionPage2',
    component: typeselector
  },
  {
    path: '/3',
    name: 'TypingPage',
    component: test
  },
  {
    path: '/4',
    name: 'typeFast',
    component: typeFast
  },
  {
    path: '/test',
    name: 'test',
    component: test2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
