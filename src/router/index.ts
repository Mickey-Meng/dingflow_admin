import { createRouter, createWebHistory } from 'vue-router'

import commomRoutes from './common'
import mainRoutes from './main'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...commomRoutes, ...mainRoutes],
})

export default router
