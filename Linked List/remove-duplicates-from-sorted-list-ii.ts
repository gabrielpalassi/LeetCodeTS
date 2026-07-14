function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let prev: ListNode | null = null;
  let leftPointer: ListNode | null = head;
  let rightPointer: ListNode | null = head;

  while (rightPointer) {
    if (rightPointer.next && rightPointer.next.val == rightPointer.val) {
      // Walk right pointer
      rightPointer = rightPointer.next;
      continue;
    }

    if (leftPointer == rightPointer) {
      // Skip
      prev = rightPointer;
      leftPointer = rightPointer.next;
      rightPointer = rightPointer.next;
      continue;
    }

    // Remove nodes
    if (prev) prev.next = rightPointer.next;
    else head = rightPointer.next;
    leftPointer = rightPointer.next;
    rightPointer = rightPointer.next;
  }

  return head;
}
