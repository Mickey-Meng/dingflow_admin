<script setup lang="ts">
import TabNav from './TabNav.vue'
import { computed, useSlots } from 'vue'
import { isFragment } from '@/utils/vnode'

interface Props {
  modelValue?: string
  value?: string
}
const slots = useSlots()
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'tabRemove', item: object): void
  (e: 'tabClick', item: object): void
}>()

const tabRemove = (item) => {
  emit('tabRemove', item)
}
const tabClick = (item) => {
  emit('tabClick', item)
}

// 所有tab panes
const panes = computed(() => {
  // slots.default
  const defaults = (slots.default && slots.default()) || []
  // nodes
  const nodes = defaults.filter((node) => {
    return isFragment(node)
  })
  // panes
  const panes = nodes[0].children.map((node) => {
    return node.props
  })
  return panes
})
// 当前选中 activePane
const activePane = computed(() => {
  return props.modelValue || props.value || ''
})
</script>

<template>
  <div class="tabs">
    <div class="tabs-header">
      <TabNav
        :active-pane="activePane"
        :panes="panes"
        @tab-remove="tabRemove"
        @tab-click="tabClick"
      />
    </div>
    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.tabs {
  width: 100%;
  overflow: hidden;
}

.tabs-header {
  width: 100%;
  padding: 4px 0;
  border-top: 1px solid var(--el-border-color-light);
  border-bottom: 1px solid var(--el-border-color-light);
}
</style>
