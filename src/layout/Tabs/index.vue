<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useTabsStore from '@/stores/tabs'

const tabsState = useTabsStore()
const route = useRoute()
const router = useRouter()
const active = computed(() => {
  return route.name
})

watch(
  () => route.name,
  (val) => {
    if (val) {
      tabsState.setPanes({ name: val, label: route.meta.title })
    }
  },
  {
    immediate: true,
  }
)

const tabRemove = (item) => {
  // 是否当前路由tab
  if (active.value === item.name) {
    // 预删除tab-index
    const findPaneIndex = tabsState.findPaneIndex(item.name)
    const len = tabsState.panes.length
    // 取出预跳转route name
    const routeName =
      findPaneIndex + 1 === len
        ? tabsState.panes[findPaneIndex - 1].name
        : tabsState.panes[findPaneIndex + 1].name
    router.push({ name: routeName })
  }
  tabsState.deletePanes(item.name)
}
const tabClick = (item) => {
  router.push({ name: item.name })
}
</script>

<template>
  <Tabs v-model="active" @tab-remove="tabRemove" @tab-click="tabClick">
    <TabPane
      v-for="item in tabsState.panes"
      :key="item.name"
      :label="item.label"
      :name="item.name"
    />
  </Tabs>
</template>

<style lang="less" scoped>
:deep(.el-tabs__nav) {
  border: 0 !important;
}
:deep(.el-tabs__item) {
  height: 28px;
  margin-right: 10px;
  padding: 0 8px;
  line-height: 28px;
  border: 1px solid var(--el-border-color-light) !important;
}
</style>
