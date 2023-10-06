const External = () => import('@/views/External/index.vue')

const routes = [
  {
    path: '/external',
    name: 'external',
    component: External,
    redirect: '/external/doc',
    meta: { title: '外部页面', icon: 'Monitor', orderNo: 9 },
    children: [
      {
        path: 'doc',
        name: 'dingflowInternal',
        component: External,
        meta: { title: '项目文档（内部）', iframe: 'https://www.dingflow.yifaoa.top/docs/#/' },
      },
      {
        path: 'https://www.dingflow.yifaoa.top/docs/#/',
        name: 'dingflowExternal',
        component: External,
        meta: { title: '项目文档（外部）' },
      },
    ],
  },
]

export default routes
