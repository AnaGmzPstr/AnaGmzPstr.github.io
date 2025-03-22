import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aigua',
    name: 'aigua',
    component: () => import('../views/AiguaView.vue')
  },
  {
    path: '/llista',
    name: 'llista',
    component: () => import('../views/LlistaView.vue')
  },
  {
    path: '/aigua/:estacio', 
    component: ()=> import('../views/EmbalseView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
