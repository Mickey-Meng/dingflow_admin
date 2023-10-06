<script setup lang="ts">
// compontents
import HeaderBreadcrumb from './HeaderBreadcrumb.vue'
import HeaderDropdown from './HeaderDropdown.vue'
import HeaderIcons from './HeaderIcons.vue'
// stores
import { useConstsStore } from '@/stores/consts'
import { useCommonStore } from '@/stores/common'

// 折叠
const { isCollapse } = useConstsStore()
const common = useCommonStore()
</script>

<template>
  <header class="header">
    <!-- 折叠 -->
    <div v-if="isCollapse" class="header-collapse" @click="common.toggleCollapse">
      <i v-if="!common.collapse" class="iconfont icon-menu-fold" />
      <i v-else class="iconfont icon-menu-unfold" />
    </div>
    <!-- breadcrumb  -->
    <HeaderBreadcrumb class="header-breadcrumb" />
    <!-- others -->
    <div class="header-others">
      <HeaderIcons />
      <HeaderDropdown class="header-dropdown" />
    </div>
  </header>
</template>

<style lang="less" scoped>
.header {
  position: relative;
  padding-right: 15px;
}
// 折叠栏
.header-collapse {
  float: left;
  padding: 0 15px;
  cursor: pointer;
  .iconfont {
    font-size: 20px;
  }
}
.header-breadcrumb {
  float: left;
  line-height: inherit;
}
.header-others {
  display: flex;
  height: 100%;
  float: right;
}
.header-dropdown {
  margin-left: 20px;
}
</style>
