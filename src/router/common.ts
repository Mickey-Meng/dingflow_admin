import Login from '@/views/Login/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    hidden: true,
  },
]

export default routes
