import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PostSearch from '../views/PostSearch.vue'
import ProductInfo from '../views/ProductInfo.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Chatbox from '../views/Chatbox.vue'
import MyProfile from '../views/MyProfile.vue'
import Login2 from '../views/Login2.vue'
import Signup2 from '../views/Signup2.vue'
import EditProducts from '../views/EditProducts.vue'
import ManageProducts from '../views/ManageProducts.vue'
const router = createRouter({
  mode: 'history',
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
      component: Signup2
    },
    {
      path:'/Login',
      name:'Login',
      component: Login2
    },
    {
      path: '/PostSearch',
      name: 'PostSearch',
      component: PostSearch,
      props: true,
      // preserveQueryParams: true,

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
    },

    {
      path: '/MyProfile',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: '/EditProducts',
      name: 'EditProducts',
      component: EditProducts
    },
    {
      path: '/ManageProducts',
      name: 'ManageProducts',
      component: ManageProducts
    },



  ]
})

export default router
