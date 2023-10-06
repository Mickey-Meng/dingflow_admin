<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ElTree } from 'element-plus'

interface Tree {
  label: string
  children?: Tree[]
}
interface Props {
  data?: Tree[]
  placeholder?: string
}

const { data = [], placeholder = '请输入部门名称' } = defineProps<Props>()
const emit = defineEmits(['node-click'])

const defaultProps = {
  label: 'label',
  children: 'children',
}
const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data.label.includes(value)
}
const nodeClick = (data: Tree) => {
  emit('node-click', data)
}
</script>

<template>
  <el-input v-model="filterText" class="tree-filter" :placeholder="placeholder" />
  <el-tree
    ref="treeRef"
    :data="data"
    :props="defaultProps"
    default-expand-all
    :expand-on-click-node="false"
    :filter-node-method="filterNode"
    @node-click="nodeClick"
  />
</template>

<style lang="less" scoped>
.tree-filter {
  margin-bottom: var(--margin-spacing);
}
</style>
