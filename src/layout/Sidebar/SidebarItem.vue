<script setup lang="ts">
import SidebarItemLink from './SidebarItemLink.vue'
import { isURL } from '@/utils/is'
import { resolve } from 'path-browserify'

const props = defineProps({
  menu: { type: Object, required: true },
  basePath: { type: String, default: '' },
  parentPath: { type: String, default: '' },
})

const resolvePath = (routePath) => {
  if (isURL(routePath)) {
    return routePath
  }
  if (isURL(props.basePath)) {
    return props.basePath
  }
  return resolve(props.parentPath, routePath)
}
</script>

<template>
  <template v-if="!props.menu.hidden">
    <el-sub-menu v-if="props.menu.children && props.menu.children.length" :index="props.menu.name">
      <template #title>
        <el-icon v-if="props.menu.meta && props.menu.meta.icon">
          <component :is="props.menu.meta.icon" />
        </el-icon>
        <span>{{ props.menu.meta && props.menu.meta.title }}</span>
      </template>
      <SidebarItem
        v-for="child in props.menu.children"
        :key="child.name"
        :menu="child"
        :base-path="child.path"
        :parent-path="props.menu.path"
      />
    </el-sub-menu>
    <SidebarItemLink v-else :path="resolvePath(props.menu.path)">
      <el-menu-item :index="props.menu.name">
        <el-icon v-if="props.menu.meta && props.menu.meta.icon">
          <component :is="props.menu.meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ props.menu.meta && props.menu.meta.title }}</span>
        </template>
      </el-menu-item>
    </SidebarItemLink>
  </template>
</template>
