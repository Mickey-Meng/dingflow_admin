<script setup lang="ts">
/**
 * Props
 * @interface [Props]
 * @param {string} header
 * @param {string} shadow - 默认: always  可选: always / hover / never
 * @param {object} bodyStyle - { padding: '20px' }
 */
interface Props {
  header?: string
  shadow?: string
  bodyStyle?: object
}
const { header, shadow = 'always', bodyStyle = { padding: '15px' } } = defineProps<Props>()
const emit = defineEmits(['refresh'])

// 刷新
const refresh = () => {
  emit('refresh')
}
</script>

<template>
  <el-card class="card" :shadow="shadow" :body-style="bodyStyle">
    <template #header>
      <slot name="header">
        <div v-if="header" class="card-header">
          <span class="card-header--title">{{ header }}</span>
          <el-icon color="#409EFC" class="card-header--refresh" @click="refresh">
            <RefreshRight />
          </el-icon>
        </div>
      </slot>
    </template>
    <slot />
  </el-card>
</template>

<style lang="less" scoped>
.card {
  & + .card {
    margin-top: var(--margin-spacing);
  }
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px var(--padding-spacing);
  &--title {
    font-size: 16px;
  }
  &--refresh {
    font-size: 16px;
    cursor: pointer;
  }
}
:deep(.el-card__header) {
  padding: 0;
}
</style>
