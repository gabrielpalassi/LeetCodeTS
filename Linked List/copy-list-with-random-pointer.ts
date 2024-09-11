function copyRandomList(head: _Node | null): _Node | null {
  const nodesMap: Map<_Node, _Node> = new Map();
  let currentNode = head;

  while (currentNode) {
    nodesMap.set(currentNode, new _Node(currentNode.val));
    currentNode = currentNode.next;
  }

  currentNode = head;

  while (currentNode) {
    const nodeCopy = nodesMap.get(currentNode)!;
    nodeCopy.next = currentNode.next ? nodesMap.get(currentNode.next)! : null;
    nodeCopy.random = currentNode.random
      ? nodesMap.get(currentNode.random)!
      : null;
    currentNode = currentNode.next;
  }

  return head ? nodesMap.get(head)! : null;
}
