import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/cadastros',
    name: 'cadastros',
    component: () => import('../views/CadastrosView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
