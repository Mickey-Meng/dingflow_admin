const System = () => import('@/views/System/index.vue')
const User = () => import('@/views/System/User/index.vue')
const Role = () => import('@/views/System/Role/index.vue')
const Menu = () => import('@/views/System/Menu/index.vue')
const Department = () => import('@/views/System/Department/index.vue')
const Job = () => import('@/views/System/Job/index.vue')

const routes = [
  {
    path: '/system',
    name: 'system',
    component: System,
    redirect: '/system/user',
    meta: { title: '系统管理', icon: 'Setting', orderNo: 2 },
    children: [
      {
        path: 'user',
        name: 'user',
        component: User,
        meta: { title: '用户管理' },
      },
      {
        path: 'role',
        name: 'role',
        component: Role,
        meta: { title: '角色管理' },
      },
      {
        path: 'menu',
        name: 'menu',
        component: Menu,
        meta: { title: '菜单管理' },
      },
      {
        path: 'department',
        name: 'department',
        component: Department,
        meta: { title: '部门管理' },
      },
      {
        path: 'job',
        name: 'job',
        component: Job,
        meta: { title: '岗位管理' },
      },
    ],
  },
]

export default routes
