<script setup lang="ts">
// components
import SidebarItem from './SidebarItem.vue'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import main from '@/router/main'
import { useCommonStore } from '@/stores/common'
import { usePermissionStore } from '@/stores/permission'

const common = useCommonStore()
const permission = usePermissionStore()
const route = useRoute()

watch(
  () => main,
  () => {
    const list = main[0]?.children?.sort((a, b) => {
      return (a.meta?.orderNo || 0) - (b.meta?.orderNo || 0)
    })
    permission.setMenuList(list)
  },
  {
    immediate: true,
  }
)

const menus = computed(() => {
  // 排序
  return permission.menuList
})
</script>

<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="sidebar-wrapper">
      <el-menu
        :default-active="route.name"
        class="el-menu-vertical-demo"
        :collapse="common.collapse"
      >
        <template v-if="menus && menus.length">
          <SidebarItem v-for="menu in menus" :key="menu.name" :menu="menu" :base-path="menu.path" />
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
