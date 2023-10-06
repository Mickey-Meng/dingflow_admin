<script setup lang="ts">
import { computed } from 'vue'
import { isURL } from '@/utils/is'
const props = defineProps({
  path: { type: String, required: true },
})

const isUrl = computed<boolean>(() => isURL(props.path))
const tag = computed(() => {
  if (isUrl.value) {
    return 'a'
  }
  return 'router-link'
})

const linkProps = (path) => {
  if (isUrl.value) {
    return {
      href: path,
      target: '_blank',
      rel: 'noopener',
    }
  }
  return {
    to: path,
  }
}
</script>

<template>
  <component :is="tag" v-bind="linkProps(props.path)">
    <slot />
  </component>
</template>
