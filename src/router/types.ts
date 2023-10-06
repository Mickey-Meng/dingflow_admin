import type { RouteRecordRaw, RouteMeta } from 'vue-router'

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: RouteMeta
  children?: AppRouteRecordRaw[]
}

export interface Menu {
  path: string
  name: string
  icon?: string
  disabled?: boolean
  children?: Menu[]
  meta?: Partial<RouteMeta>
  orderNo?: number
}
