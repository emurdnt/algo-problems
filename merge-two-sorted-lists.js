var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
      return l1 || l2;
  }
  let node = null;
  if (l1.val < l2.val) {
      node = l1;
      node.next = mergeTwoLists(l1.next, l2);
  } else {
      node = l2;
      node.next = mergeTwoLists(l1, l2.next);
  }
  return node;
};

const mergeTwoLists = function(l1, l2) {
  const head = new ListNode(null);
  let curr = head;
  while (l1 && l2) {
      if (l1.val < l2.val) {
          curr.next = l1;
          l1 = l1.next;
      } else {
          curr.next = l2;
          l2 = l2.next;
      }
      curr = curr.next;
  }
  curr.next = l1 || l2;
  return head.next;
  
};