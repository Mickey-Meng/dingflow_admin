<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 获取 breadcrumb
const crumbs = ref([])
const route = useRoute()
const router = useRouter()
const getBreadcrumb = () => {
  crumbs.value = route.matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  )
}
watch(
  () => router.currentRoute.value.path,
  () => {
    getBreadcrumb()
  },
  {
    immediate: true,
  }
)

const handleLink = ({ redirect, path }) => {
  if (redirect) {
    router.push(redirect)
  }
  router.push(path)
}
</script>

<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in crumbs" :key="item.path">
      <span v-if="index === crumbs.length - 1" class="no-redirect">{{ item.meta.title }}</span>
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="less" scoped>
:deep(.el-breadcrumb__inner a),
:deep(.el-breadcrumb__inner.is-link) {
  font-weight: normal;
}

.breadcrumb {
  margin-left: 10px;
  .no-redirect {
    color: #999;
  }
}
</style>
