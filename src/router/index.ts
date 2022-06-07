import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/index.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('@/pages/About/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/NotFound.vue')
    }
  ]
})

export default router
