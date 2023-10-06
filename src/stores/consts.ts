import { defineStore } from 'pinia'

export const useConstsStore = defineStore('consts', {
  state: (): State => {
    return {
      sidebarLogo: true, // 是否需要logo
      isCollapse: true, // 是否需要菜单折叠collapse
    }
  },
})

interface State {
  sidebarLogo: boolean
  isCollapse: boolean
}
