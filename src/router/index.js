import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/CreateAccount.vue'
import LogInAccount from '../views/LogInAccount.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'project',
    component: () => import('../views/ProjectNews.vue')
  },
  {
    path: '/solutions',
    name: 'business',
    component: () => import('../views/SolutionsForBusiness.vue')
  },
  {
    path: '/ideas',
    name: 'idea',
    component: () => import('../views/IdeaForBusiness.vue')
  },
  {
    path: '/play',
    name: 'games',
    component: () => import('../views/PlayForEmployee.vue')
  },
  {
    path: '/support',
    name: 'feedback',
    component: () => import('../views/SupportSection.vue')
  },
  {
    path: '/release',
    name: 'products',
    component: () => import('../views/ProductsCompany.vue')
  },
  {
    path: '/cart',
    name: 'purchases',
    component: () => import('../views/ItemsCart.vue')
  },
  {
    path: '/account',
    name: 'regist',
    component: Account
  },
  {
    path: '/login',
    name: 'enter',
    component: LogInAccount
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
