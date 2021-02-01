import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/camera'
  },
  {
    path: '/tabs/',
    component: () => import('@/views/Tabs.vue'),
    children: [
      {
        path: '',
        redirect: 'profile'
      },
      {
        path: 'profile',
        component: () => import('@/views/profileTab.vue')
      },
      {
        path: 'portfolio',
        component: () => import('@/views/portfolioTab.vue')
      },
      {
        path: 'camera',
        component: () => import('@/views/cameraTab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
