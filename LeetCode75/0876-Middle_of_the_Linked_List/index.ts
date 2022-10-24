/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  let node = head

  let i = 0
  while (head) {
    head = head.next
    i++
  }

  i = i / 2

  while (0 <= --i) {
    if (node.next) node = node.next
  }

  return node
}
