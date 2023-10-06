import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
const modules = import.meta.glob('./modules/*.ts', { eager: true })

const routeModuleList: RouteRecordRaw[] = []
// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const routes: RouteRecordRaw[] = [
  {
    path: '/main',
    name: 'main',
    redirect: '/home',
    component: Layout,
    children: routeModuleList,
  },
]

export default routes
