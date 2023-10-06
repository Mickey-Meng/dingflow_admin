<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

const common = useCommonStore()
</script>

<template>
  <div class="logo">
    <img class="logo-img" src="http://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png" alt="logo" />
    <span v-if="!common.collapse" class="logo-text">DingFlow</span>
  </div>
</template>

<style lang="less" scoped>
.logo-img {
  width: 32px;
  height: 32px;
}
.logo-text {
  margin-left: 10px;
}
</style>
