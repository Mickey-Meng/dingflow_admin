<script setup lang="ts">
import { ref } from 'vue'

const badgeValue = ref(200)
</script>

<template>
  <div class="header-icons">
    <!-- 源码地址 -->
    <el-tooltip content="源码地址" placement="bottom-end">
      <a
        class="o-icon icon-space iconfont icon-gitee"
        href="https://gitee.com/qimingjin/dingflow-vue3"
        target="_blank"
      />
    </el-tooltip>
    <!-- 文档地址 -->
    <el-tooltip content="文档地址" placement="bottom-end">
      <a
        class="o-icon icon-space iconfont icon-shiyongwendang"
        href="https://www.dingflow.yifaoa.top/docs/#/"
        target="_blank"
      />
    </el-tooltip>
    <!-- 邮箱信息 -->
    <span class="o-icon icon-space iconfont icon-youjian" />
    <!-- 站内消息 -->
    <span class="icon-space">
      <el-badge type="primary" :value="badgeValue" :max="99">
        <i class="o-icon iconfont icon-lingdang-xianxing"></i>
      </el-badge>
    </span>
  </div>
</template>

<style lang="less" scoped>
.header-icons {
  display: flex;
  align-items: center;
  margin-right: 30px;
  .o-icon {
    font-size: 18px;
    color: var(--el-text-color-regular);
    cursor: pointer;
  }
  .icon-element {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }
  .icon-space {
    line-height: 1;
    padding: 0 5px;
  }
}
</style>
