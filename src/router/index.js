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
    path: '/aigua/:estaci',
    name: 'estacio', 
    component: ()=> import('../views/EmbalseView.vue'),
    props:true
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/StoreView.vue')
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import('../views/ProductDetail.vue'),
    props: true
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/WatchView.vue'),
  },
  {
    path: '/provInject',
    name: 'provInject',
    component: () => import('../views/ProvInject.vue'),
  },
  {
    path: '/propsEmit',
    name: 'propsEmit',
    component: () => import('../views/PropsEmit.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
