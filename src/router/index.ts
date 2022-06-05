import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/index.vue'
import About from '../pages/Home/index.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
