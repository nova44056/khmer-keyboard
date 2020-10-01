import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import navBar from '../components/navBar.vue'
import timeSelector from '../components/TimeSelectorComponents/timeSelector'
import typeSelector from '../components/typeSelectorComponents/typeSelector'
import typingArticle from '../components/TypingPageComponents/typingArticle/typingArticle'
import typingWord from '../components/TypingPageComponents/typingWord/typingWord'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/timeSelector'
  // },
  {
    path: '*',
    redirect: '/timeSelector'
  },
  {
    path: '/timeSelector',
    name: 'timeSelector',
    component: timeSelector
  },
  {
    path: '/typeSelector',
    name: 'typeSelector',
    component: typeSelector,
    // beforeRouteUpdate: (to,from,next)=>{
    //   if(store.state.timer === null){
    //      next('/timeSelector')
    //   }else 
    //   {
    //   next()
    // }
    // }
  },

  {
    path: '/typingArticle',
    name: 'typingArticle',
    component: typingArticle,
    // beforeEnter: (to,from,next)=>{
    //   if(store.state.typeOfWord === null){
    //     // next({path:'/1'}); 
    //     // router.push("/1")
    //     next('/timeSelector')
    //   }
    //   else {
    //     next()
    //   }
    // }
  },
  {
    path: '/typingWord',
    name: 'typingWord',
    component: typingWord,
    // beforeEnter: (to,from,next)=>{
    //   if(store.state.typeOfWord === null){
    //     next('/timeSelector')
    //   }else {
    //     // next({path:'/1'}); 
    //     next(); 
    //     // router.push("/1")
    //   }
    // }
  },

  {
    path: '/nav',
    name: 'navBar', 
    component: navBar, 
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
