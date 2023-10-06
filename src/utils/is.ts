// 是否是外部链接
export function isURL(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}
