function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let currentNode: ListNode = head;
  while (currentNode.next) {
    if (currentNode.val === ("seen" as any)) return true;
    currentNode.val = "seen" as any;
    currentNode = currentNode.next;
  }

  return false;
}
