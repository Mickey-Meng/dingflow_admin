<script setup lang="ts">
interface Props {
  panes: array
  activePane: string
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'tabRemove', item: object): void
  (e: 'tabClick', item: object): void
}>()
// 删除
const tabRemove = (item) => {
  emit('tabRemove', item)
}
// 选中
const tabClick = (item) => {
  if (item.name !== props.activePane) {
    emit('tabClick', item)
  }
}
</script>

<template>
  <el-scrollbar>
    <div class="tabs-header__wrap">
      <div
        v-for="item in props.panes"
        :key="item.name"
        class="tabs-header__item"
        :class="{ 'is-active': item.name === props.activePane }"
        @click="(ev) => tabClick(item, ev)"
      >
        <span>{{ item.label }}</span>
        <el-icon class="tabs-header__item--icon" @click.stop="(ev) => tabRemove(item, ev)">
          <Close />
        </el-icon>
      </div>
    </div>
  </el-scrollbar>
</template>

<style lang="less" scoped>
.tabs-header__wrap {
  display: flex;
  flex-wrap: nowrap;
}
.tabs-header__item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 26px;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  & + .tabs-header__item {
    margin-left: 10px;
  }
  &:first-child {
    margin-left: 15px;
    .tabs-header__item--icon {
      display: none;
    }
  }
  &:last-child {
    margin-right: 15px;
  }
  &--icon {
    width: 14px;
    height: 14px;
    margin-left: 5px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: var(--el-text-color-placeholder);
    }
  }

  &.is-active {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
</style>
