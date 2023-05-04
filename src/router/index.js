import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import PostSearch from '../views/PostSearch.vue'
import ProductInfo from '../views/ProductInfo.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Chatbox from '../views/Chatbox.vue'
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
    },
    {
      path: '/ProductInfo',
      name: 'ProductInfo',
      component: ProductInfo
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },

    {
      path: '/Chatbox',
      name: 'Chatbox',
      component: Chatbox
    }

  ]
})

export default router
