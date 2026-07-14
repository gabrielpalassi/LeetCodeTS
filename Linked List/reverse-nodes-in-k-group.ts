function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k == 1) return head;

  let prev = null;
  let leftPointer = head;
  let rightPointer = head.next;

  if (!leftPointer || !rightPointer) return head;

  for (let i = 1; !!rightPointer; i++) {
    if ((i + 1) % k == 0) {
      // Update ends
      if (prev) prev.next = rightPointer;
      else head = rightPointer;

      let next = rightPointer.next;

      // Reversal
      let revPrev = leftPointer;
      let revCurr = leftPointer.next;
      let revNext = revCurr ? revCurr.next : null;
      while (revPrev != rightPointer) {
        revCurr.next = revPrev;
        revPrev = revCurr;
        revCurr = revNext;
        revNext = revNext ? revNext.next : null;
      }

      // Setup for next iteration
      prev = leftPointer;
      leftPointer.next = next;
      leftPointer = next;
      rightPointer = next ? next.next : null;
      i++;
    } else {
      rightPointer = rightPointer.next;
    }
  }

  return head;
}
