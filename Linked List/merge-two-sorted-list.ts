function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const result = new ListNode();
  let resultNode = result;
  let list1Node = list1;
  let list2Node = list2;

  while (list1Node && list2Node) {
    if (list1Node.val < list2Node.val) {
      resultNode = resultNode.next = list1Node;
      list1Node = list1Node.next;
    } else {
      resultNode = resultNode.next = list2Node;
      list2Node = list2Node.next;
    }
  }

  if (list1Node) resultNode.next = list1Node;
  else if (list2Node) resultNode.next = list2Node;

  return result.next;
}
