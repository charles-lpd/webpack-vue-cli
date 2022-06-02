import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About/index.vue')
    }
  ]
})

export default router
