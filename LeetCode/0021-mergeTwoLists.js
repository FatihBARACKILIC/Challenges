const mergeTwoLists = (list1, list2) => {
  let mergeList = new ListNode()
  let node = mergeList

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      mergeList.next = new ListNode(list1.val)
      list1 = list1.next
    } else {
      mergeList.next = new ListNode(list2.val)
      list2 = list2.next
    }
    mergeList = mergeList.next
  }

  if (list1 !== null) mergeList.next = list1
  if (list2 !== null) mergeList.next = list2

  return node.next
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([], [0]))
