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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) return null

  let newList: ListNode = new ListNode()
  const node = newList

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      newList.next = new ListNode(list1.val)
      list1 = list1.next
    } else {
      newList.next = new ListNode(list2.val)
      list2 = list2.next
    }
    newList = newList.next
  }

  if (list1) newList.next = list1
  else if (list2) newList.next = list2

  return node.next
}
