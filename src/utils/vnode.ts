import { Fragment, isVNode } from 'vue'
import type { VNode } from 'vue'

export function isFragment(node: VNode): boolean
export function isFragment(node: unknown): node is VNode
export function isFragment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Fragment
}
