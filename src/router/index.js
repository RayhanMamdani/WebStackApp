import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import PostSearch from '../views/PostSearch.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path:'/Login',
      name:'Login',
      component: Login
    },
    {
      path: '/PostSearch',
      name: 'PostSearch',
      component: PostSearch
    }
  ]
})

export default router
