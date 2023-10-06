<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userName = ref('Dropdown List')
const router = useRouter()

const clickLogout = () => {
  const fullPath = router.currentRoute.value.fullPath
  router.push(`/login?redirect=${fullPath}`)
}
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar class="el-dropdown-avatar" :icon="UserFilled" />
      <span class="el-dropdown-name">{{ userName }}</span>
      <el-icon><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>布局设置</el-dropdown-item>
        <el-dropdown-item divided @click="clickLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="less" scoped>
.el-dropdown {
  height: 100%;
}
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 100%;
}
.el-dropdown-avatar {
  width: 25px;
  height: 25px;
}
.el-dropdown-name {
  margin: 0 6px;
}
</style>
