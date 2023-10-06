<script setup lang="ts">
import { ref } from 'vue'
import { formData, formConfig } from './config'

const data = ref(formData)
</script>

<template>
  <div class="user-main">
    <Card>
      <Form :form-data="data" :form-config="formConfig" :label-width="'70px'" :type="'search'" />
    </Card>
    <Card>
      <div class="user-list">list</div>
    </Card>
  </div>
</template>

<style lang="less" scoped>
.user-main {
  flex-grow: 1;
  padding: var(--padding-spacing);
}
</style>
