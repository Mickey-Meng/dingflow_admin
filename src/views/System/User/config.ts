const statusOptions = {
  1: '正常',
  2: '停用',
}
const typeOptions = {
  1: '系统用户',
  2: '官网用户',
}

export const formData = {
  name: '',
  phone: '',
  status: '',
  type: '',
  time: '',
}
export const formConfig = [
  { type: 'input', key: 'name', label: '用户名称', clearable: true, span: 4 },
  {
    type: 'input',
    kind: 'number',
    key: 'phone',
    label: '手机号码',
    maxlength: 11,
    clearable: true,
    span: 4,
  },
  {
    type: 'select',
    key: 'status',
    label: '用户状态',
    clearable: true,
    span: 4,
    isEnum: true,
    options: statusOptions,
  },
  {
    type: 'select',
    key: 'type',
    label: '用户类型',
    span: 4,
    clearable: true,
    isEnum: true,
    options: typeOptions,
  },
  {
    type: 'datePicker',
    kind: 'daterange',
    key: 'time',
    label: '创建时间',
    clearable: true,
    span: 8,
  },
]
export const formRules = {
  name: [{ required: true, message: '请输入登录名称', trigger: 'blur' }],
}
