<script setup lang="ts">
import Iframe from '../Iframe/index.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const key = computed(() => {
  const route = useRoute()
  return route.path
})
</script>

<template>
  <RouterView :key="key">
    <template #default="{ Component, route }">
      <!-- 内嵌页面 -->
      <Iframe v-if="route?.meta?.iframe" :src="route.meta.iframe" />
      <!-- 正常页面 -->
      <template v-else>
        <transition mode="out-in" appear>
          <keep-alive v-if="route?.meta?.isCache" :include="getCaches">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
          <component :is="Component" v-else :key="route.fullPath" />
        </transition>
      </template>
    </template>
  </RouterView>
</template>
