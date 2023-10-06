<script setup lang="ts">
interface Props {
  formData: object
  formConfig: Config
  formRules?: object
  labelPosition?: string
  labelWidth?: string
  size?: string
  inline?: boolean
  type?: string
  loading?: boolean
}
const {
  formData = {},
  formConfig = [],
  formRules = {},
  labelPosition = 'right',
  labelWidth = 'auto',
  size = 'default',
  inline = true,
  type = '',
  loading = false,
} = defineProps<Props>()

const emit = defineEmits([
  'inputChange',
  'inputNumberChange',
  'selectChange',
  'radioChange',
  'checkboxChange',
  'switchChange',
  'cascaderChange',
  'datePickerChange',
  'searchFormHandle',
  'resetFormHandle',
])

const inputFocus = (config) => {
  // password 和 readonly 一起用，来去除网站默认填充密码
  if (config.kind === 'password') {
    config.readonly = false
  }
}
const onInput = (value, key, config) => {
  if (config.kind === 'int') {
    this.formData[key] = value.replace(/[^\d]/g, '')
  }
}

const inputChange = (value, key, config) => {
  emit('inputChange', { value, key, config })
}
const inputNumberChange = (value, key, config) => {
  emit('inputNumberChange', { value, key, config })
}
const selectChange = (value, key, item) => {
  emit('selectChange', { value, key, item })
}
const radioChange = (value, key, item) => {
  emit('radioChange', { value, key, item })
}
const checkboxChange = (value, key, item) => {
  emit('checkboxChange', { value, key, item })
}
const switchChange = (value, key, item) => {
  emit('switchChange', { value, key, item })
}
const cascaderChange = (value, key, item) => {
  emit('cascaderChange', { value, key, item })
}
const datePickerChange = (value, key, item) => {
  emit('datePickerChange', { value, key, item })
}

const searchFormHandle = () => {
  emit('searchFormHandle')
}
const resetFormHandle = () => {
  emit('resetFormHandle')
}
</script>

<template>
  <el-form
    ref="formRef"
    :label-position="labelPosition"
    :label-width="labelWidth"
    :model="formData"
    :rules="formRules"
    :size="size"
    class="form"
  >
    <el-row :gutter="10">
      <el-col
        v-for="config in formConfig"
        :key="config.key"
        :span="inline ? (config.span ? config.span : 6) : 24"
      >
        <el-form-item
          :label="config.label"
          :label-width="config.labelWidth"
          :prop="config.key"
          :rules="config.rules"
          style="width: 100%"
        >
          <!-- text -->
          <span v-if="config.type === 'text'">{{ formData[config.key] }}</span>
          <!-- input -->
          <el-input
            v-if="config.type === 'input'"
            v-model.trim="formData[config.key]"
            auto-complete="off"
            :autosize="config.autosize || false"
            :class="config.kind === 'number' && 'input-number'"
            :clearable="config.clearable"
            :disabled="config.disabled"
            :maxlength="config.maxlength"
            :minlength="config.minlength"
            :placeholder="config.placeholder || `请输入${config.label}`"
            :prefix-icon="config.prefixIcon"
            :readonly="config.readonly"
            :rows="config.rows"
            :show-password="config.showPassword"
            :show-word-limit="config.showWordLimit"
            style="width: 100%"
            :suffix-icon="config.suffixIcon"
            :type="config.kind || 'text'"
            @focus="inputFocus(config)"
            @change="(val) => inputChange(val, config.key, config)"
            @input="(val) => onInput(val, config.key, config)"
          >
            <!-- Input前置内容 -->
            <template v-if="config.prepend" #prepend>
              <slot :name="config.prepend" />
            </template>
            <!-- Input后置内容 -->
            <template v-if="config.append" #append>
              <slot :name="config.append" />
            </template>
          </el-input>
          <!-- InputNumber -->
          <el-input-number
            v-if="config.type === 'inputNumber'"
            v-model="formData[config.key]"
            :controls-position="config.controlsPosition || 'right'"
            :disabled="config.disabled"
            :max="config.max"
            :min="config.min"
            :placeholder="config.placeholder"
            :precision="config.precision"
            :step="config.step"
            style="width: 100%"
            @change="(val) => inputNumberChange(val, config.key, config)"
          />
          <!-- Select -->
          <el-select
            v-if="config.type === 'select'"
            v-model="formData[config.key]"
            :clearable="config.clearable"
            :collapse-tags="config.collapseTags"
            :disabled="config.disabled"
            :filterable="config.filterable"
            :loading="config.loading"
            :multiple="config.multiple"
            :placeholder="config.placeholder"
            :remote="config.remote"
            :remote-method="
              config.remoteMethod ? (query) => config.remoteMethod(query, config.key, config) : null
            "
            style="width: 100%"
            @change="(val) => selectChange(val, config.key, config)"
          >
            <!-- 枚举格式 -->
            <template v-if="config.isEnum">
              <el-option
                v-for="(option, index) in config.options"
                :key="index"
                :label="option"
                :value="index"
              />
            </template>
            <!-- 数组 -->
            <template v-else>
              <el-option
                v-for="(option, index) in config.options"
                :key="index"
                :disabled="option.disabled"
                :label="config.optionKeys ? option[config.optionKeys.label] : option.label"
                :value="config.optionKeys ? option[config.optionKeys.value] : option.value"
              />
            </template>
          </el-select>
          <!-- Radio -->
          <el-radio-group
            v-if="config.type === 'radio'"
            v-model="formData[config.key]"
            :disabled="config.disabled"
            @change="(val) => radioChange(val, config.key, config)"
          >
            <el-radio
              v-for="(option, index) in config.options"
              :key="index"
              :disabled="option.disabled"
              :label="option.value"
            >
              {{ option.label }}
            </el-radio>
          </el-radio-group>
          <!-- Checkbox -->
          <el-checkbox-group
            v-if="config.type === 'checkbox'"
            v-model="formData[config.key]"
            :disabled="config.disabled"
            @change="(val) => checkboxChange(val, config.key, config)"
          >
            <el-checkbox
              v-for="(option, index) in config.options"
              :key="index"
              :disabled="option.disabled"
              :label="option.value"
            >
              {{ option.label }}
            </el-checkbox>
          </el-checkbox-group>
          <!-- Switch -->
          <el-switch
            v-if="config.type === 'switch'"
            v-model="formData[config.key]"
            :active-color="config.activeColor"
            :active-text="config.activeText"
            :disabled="config.disabled"
            :inactive-color="config.inactiveColor"
            :inactive-text="config.inactiveText"
            style="width: 100%"
            @change="(val) => switchChange(val, config.key, config)"
          />
          <!-- Cascader -->
          <el-cascader
            v-if="config.type === 'cascader'"
            v-model="formData[config.key]"
            :clearable="config.clearable"
            :disabled="config.disabled"
            :filterable="config.filterable"
            :options="config.options"
            :placeholder="config.placeholder || '请选择'"
            :props="config.props"
            style="width: 100%"
            @change="(val) => cascaderChange(val, config.key, config)"
          />
          <!-- DatePicker  -->
          <el-date-picker
            v-if="config.type === 'datePicker'"
            v-model="formData[config.key]"
            :align="config.align || 'left'"
            :clearable="config.clearable"
            :disabled="config.disabled"
            :end-placeholder="config.endPlaceholder || '结束日期'"
            :format="config.format"
            :picker-options="config.pickerOptions"
            :placeholder="config.placeholder || '选择日期'"
            :range-separator="config.rangeSeparator"
            :start-placeholder="config.startPlaceholder || '开始日期'"
            style="width: 100%"
            :type="config.kind || 'date'"
            :value-format="config.valueFormat || 'yyyy-MM-dd'"
            @change="(val) => datePickerChange(val, config.key, config)"
          />
          <!-- slot form-item content -->
          <slot :config="config" :data="formData" :name="config.slotName" />
          <!-- slot label -->
          <template #label>
            <slot :name="config.labelKey" />
          </template>
        </el-form-item>
      </el-col>
      <!-- slot form content -->
      <slot />

      <!-- search -->
      <div v-if="type === 'search'" class="form-search">
        <el-button :loading="loading" type="primary" icon="Search" @click="searchFormHandle">
          搜索
        </el-button>
        <el-button :loading="loading" icon="Refresh" @click="resetFormHandle">重置</el-button>
      </div>
    </el-row>
  </el-form>
</template>

<style lang="less" scoped>
.input-number {
  .el-input__inner {
    line-height: 1 !important;
  }
}

.form-search {
  margin-left: 5px;
  .el-button {
    height: 30px;
    font-size: 12px;
    border-radius: 3px;
  }
}
</style>
