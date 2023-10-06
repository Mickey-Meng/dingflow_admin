<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Tree {
  label: string
  children?: Tree[]
}

const router = useRouter()

const data: Tree[] = [
  {
    label: '腾讯网络',
    children: [
      {
        label: '官网组',
      },
      {
        label: '技术中心',
        children: [
          {
            label: '前端部',
          },
          {
            label: '后端部',
          },
          {
            label: '测试部',
          },
          {
            label: '运维部',
          },
        ],
      },
      {
        label: '人力资源部',
      },
      {
        label: '董事办',
      },
      {
        label: '营销中心',
      },
      {
        label: '财务中心',
      },
    ],
  },
]
const handleNodeClick = (data: Tree) => {
  console.log(data)
}
const handleEditMenu = () => {
  router.push({ name: 'menu' })
}
// 刷新
const refresh = ref(false)
const handleRefresh = () => {
  refresh.value = true
  setTimeout(() => {
    refresh.value = false
  }, 1000)
}
// 折叠
const collapse = ref(false)
const toogleCollapse = () => {
  collapse.value = !collapse.value
}
</script>

<template>
  <div class="user-sidebar" :class="{ 'user-sidebar--collapse': collapse }">
    <div class="user-tree">
      <div class="user-tree__title">
        <span class="user-tree__title--title">组织机构</span>
        <span class="user-tree__title-icon">
          <el-icon :size="16" @click="handleEditMenu"><Edit /></el-icon>
          <el-icon :class="{ 'icon-refresh': refresh }" :size="16" @click="handleRefresh">
            <Refresh />
          </el-icon>
        </span>
      </div>
      <div class="user-tree__container">
        <Tree :data="data" @node-click="handleNodeClick" />
      </div>
    </div>
    <div class="user-arrow">
      <el-icon class="user-arrow--icon" :size="12" @click="toogleCollapse">
        <CaretLeft v-if="!collapse" />
        <CaretRight v-else />
      </el-icon>
    </div>
  </div>
</template>

<style lang="less" scoped>
@arrow-collapse-width: 8px;

.user-sidebar {
  display: flex;
  width: 230px;
  height: 100%;
  transition: width 0.3s linear;
  overflow: hidden;
  &--collapse {
    width: @arrow-collapse-width;
  }
}
.user-tree {
  width: calc(100% - @arrow-collapse-width);
  background-color: #fff;
  &__title {
    height: 50px;
    padding: 0 var(--padding-spacing);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--el-border-color-light);
    white-space: nowrap;
    &--title {
      font-size: 16px;
    }
    &-icon {
      display: flex;
      align-items: center;
      .el-icon {
        cursor: pointer;
        & + .el-icon {
          margin-left: 8px;
        }
      }
    }
  }
  &__container {
    padding: var(--padding-spacing);
  }
}
.user-arrow {
  display: flex;
  align-items: center;
  width: @arrow-collapse-width;
  background-color: #f9f9f9;
  &--icon {
    width: 100%;
    height: 50px;
    background-color: #eee;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #409eff;
    }
  }
}

.icon-refresh {
  animation: refresh 1s infinite linear;
}
@keyframes refresh {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
