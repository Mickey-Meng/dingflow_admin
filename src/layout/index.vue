<script setup lang="ts">
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
// components
import Logo from './Logo/index.vue'
import Sidebar from './Sidebar/index.vue'
import Header from './Header/index.vue'
import Tabs from './Tabs/index.vue'
import Main from './Main/index.vue'
// stores
import { useConstsStore } from '@/stores/consts'
// stores
import { useCommonStore } from '@/stores/common'
const common = useCommonStore()
const { sidebarLogo } = useConstsStore()

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<template>
  <el-config-provider :locale="locale">
    <section class="layout" :class="{ 'layout--collapse': common.collapse }">
      <aside class="layout-menu">
        <Logo v-if="sidebarLogo" />
        <Sidebar />
      </aside>
      <div class="layout-main">
        <Header />
        <Tabs />
        <Main class="main" />
      </div>
    </section>
  </el-config-provider>
</template>
