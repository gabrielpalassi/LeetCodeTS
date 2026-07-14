function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head.next) return null;

  // Calculate size
  let size = 1;
  let curr = head.next;

  while (!!curr) {
    curr = curr.next;
    size++;
  }

  // Remove node
  curr = head;
  let prev = null;

  for (let i = 0; i < size - n; i++) {
    prev = curr;
    curr = curr.next;
  }

  if (prev) prev.next = curr.next;
  else head = curr.next;
  return head;
}
