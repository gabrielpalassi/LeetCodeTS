function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  const nodesMap: Map<number, ListNode> = new Map();
  for (
    let position = 1, currentNode = head;
    currentNode;
    currentNode = currentNode.next, position++
  )
    if (position >= left - 1 || position <= right + 1)
      nodesMap.set(position, currentNode);

  for (let position = right; position > left; position--)
    nodesMap.get(position)!.next = nodesMap.get(position - 1)!;

  if (nodesMap.has(right + 1))
    nodesMap.get(left)!.next = nodesMap.get(right + 1)!;
  else nodesMap.get(left)!.next = null;

  if (nodesMap.has(left - 1))
    nodesMap.get(left - 1)!.next = nodesMap.get(right)!;

  return left === 1 ? nodesMap.get(right)! : head;
}
