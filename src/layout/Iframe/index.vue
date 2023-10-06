<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <iframe ref="frameRef" class="iframe" :src="src" />
</template>

<style lang="less" scoped>
@import url('@/styles/variables.less');

.iframe {
  width: 100%;
  height: calc(100vh - @header-height);
}
</style>
