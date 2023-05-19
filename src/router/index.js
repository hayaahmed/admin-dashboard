import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/NewHome.vue';
import profileView from '../components/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NewHome',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: profileView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
