<script setup lang="ts">
import Sidebar from './sidebar.vue'
import Main from './main.vue'
</script>

<template>
  <div class="user">
    <Sidebar />
    <Main />
  </div>
</template>

<style lang="less" scoped>
.user {
  display: flex;
  padding: 0;
}
</style>
