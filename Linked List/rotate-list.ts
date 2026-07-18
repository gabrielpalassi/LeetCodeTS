function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k == 0) return head;

  // Calculate size and get last node
  let size = 2;
  let last = head.next;
  while (last.next) {
    last = last.next;
    size++;
  }

  // Optimize rotations
  k = k % size;
  if (k == 0) return head;

  // Rotate
  let curr = head;
  for (let i = 1; i < size - k; i++) curr = curr.next;
  last.next = head;
  head = curr.next;
  curr.next = null;
  return head;
}
