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

function reverseList(head: ListNode | null): ListNode | null {
  let list: ListNode = new ListNode()
  const node = list

  if (!head || !head.next) return head

  while (head) {
    list.next = new ListNode(head.val, list.next)
    head = head.next
  }

  return node.next
}
