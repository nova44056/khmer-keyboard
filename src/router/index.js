import Vue from 'vue'
import VueRouter from 'vue-router'
import timeselector from '../components/TimeSelectorComponents/TimeSelector'
import typeselector from '../components/TextSelectorComponents/TypeSelector'
import typingpage from '../components/TypingPage'
import logIn from '../views/logIn.vue'
import signIn from '../views/signIn.vue'
import test from '../components/Test'
import test2 from '../duplicate'
import typeFast from '../Typefast'
import result from '../components/result'
import store from '../store/index'
import testing from '../components/Test2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/1'
  },
  {
    path: '*',
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
    beforeRouteEnter: (to,from,next)=>{
      if(store.state.timer === null){
        next({ name: 'SelectionPage1' })
        // router.push("/1")
        // next(false)

      }else 
      {
      next()
    }
    }
  },
  {
    path: '/3',
    name: 'TypingPage',
    component: test,
    beforeRouteEnter: (to,from,next)=>{
      if(store.state.typeOfWord === null){
        // next({path:'/1'}); 
        // router.push("/1")
        next({ name: 'SelectionPage1' })

      }
      else {
        next()
      }
    }
  },
  {
    path: '/4',
    name: 'typeFast',
    component: test2,
    beforeRouteEnter: (to,from,next)=>{
      if(store.state.wordType === 1){
        next(); 
      }else {
        // next({path:'/1'}); 
        // router.push("/1")
        next({ name: 'SelectionPage1' })
      }
    }
    
  },
  {
    path: '/test',
    name: 'test',
    component: test2
  },
  {
    path: '/result',
    name: 'result',
    component: result
  },
  {
    path: '/testing',
    name: 'testing',
    component: testing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
