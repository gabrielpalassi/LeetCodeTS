function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const result = new ListNode();

  for (
    let nodeResult = result,
      carry = 0,
      nodeL1: ListNode | null | undefined = l1,
      nodeL2: ListNode | null | undefined = l2;
    nodeL1 || nodeL2 || carry;
    nodeL1 = nodeL1?.next, nodeL2 = nodeL2?.next
  ) {
    const value = (nodeL1?.val || 0) + (nodeL2?.val || 0) + carry;
    carry = Math.floor(value / 10);
    nodeResult = nodeResult.next = new ListNode(value % 10);
  }

  return result.next;
}
