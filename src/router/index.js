import Vue from 'vue'
import VueRouter from 'vue-router'
import timeselector from '../components/TimeSelectorComponents/TimeSelector'
import typeselector from '../components/TextSelectorComponents/TypeSelector'
import typingpage from '../components/TypingPage'
import logIn from '../views/logIn.vue'
import signIn from '../views/signIn.vue'
import test from '../components/Test'
import typeFast from '../Typefast'
import store from '../store/index.js'

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
    component: typeselector,
    beforeEnter: (to,from,next)=>{
      if(store.state.timer === null){
        next('/1'); 
      }else {
        next();   
      }
    }
  },
  {
    path: '/3',
    name: 'TypingPage',
    component: test,
    beforeEnter: (to,from,next)=>{
      if(store.state.typeOfWord === null){
        next('/2'); 
      }else {
        next();   
      }
    }
  },
  {
    path: '/4',
    name: 'typeFast',
    component: typeFast
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
