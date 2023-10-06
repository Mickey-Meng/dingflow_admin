import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'

export interface Panes {
  label: string
  name: string
}

export default defineStore('tabs', () => {
  // 默认首页
  const defaultPanes: Panes[] = [
    {
      label: '首页',
      name: 'home',
    },
  ]
  // panes 列表
  const panes = ref<Panes[]>([])
  // initPanes
  const initPanes = () => {
    panes.value = cloneDeep(defaultPanes)
  }
  // getPanes
  const getPanes = computed(() => panes)
  // setPanes
  const setPanes = (val: Panes) => {
    const names = panes.value.map((item) => item.name)
    if (!names.includes(val.name)) {
      panes.value.push(val)
    }
  }
  // deletePanes
  const deletePanes = (name: string) => {
    for (let i = 0; i < panes.value.length; i++) {
      const item = panes.value[i]
      if (item.name === name) {
        panes.value.splice(i, 1)
        return
      }
    }
  }
  // findPaneIndex
  const findPaneIndex = (name: string) => {
    return panes.value.findIndex((item) => item.name === name)
  }

  // 初始化
  initPanes()

  return {
    panes,
    initPanes,
    getPanes,
    setPanes,
    deletePanes,
    findPaneIndex,
  }
})
