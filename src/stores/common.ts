import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: (): State => {
    return {
      collapse: false, // 菜单折叠collapse
    }
  },
  actions: {
    toggleCollapse() {
      this.collapse = !this.collapse
    },
  },
})

interface State {
  collapse: boolean
}
