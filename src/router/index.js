import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/CardsView.vue')
  },
  {
    path: '/qr',
    redirect: '/'
  },
  {
    path: '/transfer',
    redirect: '/'
  },
  {
    path: '/stats',
    redirect: '/'
  },
  {
    path: '/payments',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
