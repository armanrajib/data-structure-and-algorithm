// ===========
// Node class
// ===========

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// =======================
// DoublyLinkedList class
// =======================

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push
  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }
}

const list = new DoublyLinkedList();
console.log(list);

console.log(list.push(99));
console.log(list.push(100));
console.log(list.push(101));

console.log(list);
