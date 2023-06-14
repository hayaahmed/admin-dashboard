import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/NewHome.vue';
import profileView from '../components/profile.vue'
import homeCrud from '../components/homeCrud.vue'
import Settings from '../components/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/NewHome',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: profileView
  },
  {
    path: '/CrudDashboard',
    name: 'CrudDashboard',
    component: homeCrud
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.params.pagaTitle !== undefined) {
    document.title = `${to.name} | ${to.params.pagaTitle} `;
    console.log(document.title);
    // console.log(process.env.VUE_APP_TITLE);
  }
  else {
    if (to.name == null) {
      document.title = `unkoun page`;
    }
    else {
      document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
    }
  }
  next();

})
export default router
