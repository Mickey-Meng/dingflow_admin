// 打开链接
export function openWindow(
  url: string,
  opt?: { target?: TargetContext; noopener?: boolean; noreferrer?: boolean }
) {
  const { target = '_blank', noopener = true, noreferrer = true } = opt || {}
  const features: string[] = []

  noopener && features.push('noopener')
  noreferrer && features.push('noreferrer')

  window.open(url, target, features.join(','))
}
