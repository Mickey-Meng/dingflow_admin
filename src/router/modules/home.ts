const Home = () => import('@/views/Home/index.vue')

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    hidden: true,
    meta: { title: '首页', icon: 'HomeFilled', orderNo: 1 },
  },
]

export default routes
