import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import timeSelector from '../components/TimeSelectorComponents/timeSelector'
import typeSelector from '../components/typeSelectorComponents/typeSelector'
import typingArticle from '../components/TypingPageComponents/typingArticle/typingArticle'
import typingWord from '../components/TypingPageComponents/typingWord/typingWord'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/timeSelector'
  },
  {
    path: '*',
    redirect: '/timeSelector'
  },
  {
    path: '/timeSelector',
    name: 'SelectionPage1',
    component: timeSelector
  },
  {
    path: '/typeSelector',
    name: 'SelectionPage2',
    component: typeSelector,
    beforeRouteEnter: (to,from,next)=>{
      if(store.state.timer === null){
        //  router.push("/timeSelector")
         next({name: 'timeSelector'})
        // next(false)
      }else 
      {
      next()
    }
    }
  },
  {
    path: '/typingArticle',
    name: 'typingArticle',
    component: typingArticle,
    beforeEnter: (to,from,next)=>{
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
    path: '/typingWord',
    name: 'typingWord',
    component: typingWord,
    beforeEnter: (to,from,next)=>{
      if(store.state.typeOfWord === null){
        next({ name: 'SelectionPage1' })
      }else {
        // next({path:'/1'}); 
        next(); 
        // router.push("/1")
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
