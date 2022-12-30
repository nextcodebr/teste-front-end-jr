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
    path: '/cadastros',
    name: 'cadastros',
    component: () => import('../views/CadastrosView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
