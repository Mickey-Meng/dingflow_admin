import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export const usePermissionStore = defineStore('permission', () => {
  const menuList = ref<RouteRecordRaw[]>([])
  const defaultTabs = ref([
    {
      label: '首页',
      name: 'index',
    },
  ])
  // 获取menuList
  const getMenuList = () => menuList
  // 设置menuList
  const setMenuList = (val: RouteRecordRaw[]) => {
    menuList.value = val
  }

  return {
    menuList,
    defaultTabs,
    getMenuList,
    setMenuList,
  }
})
