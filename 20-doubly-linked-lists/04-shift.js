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

  // pop
  pop() {
    if (!this.head) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  // shift
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }
}

const list = new DoublyLinkedList();

list.push(99);
list.push(100);
list.push(101);
console.log(list);

console.log(list.shift());
console.log(list);

console.log(list.shift());
console.log(list);

console.log(list.shift());
console.log(list);

console.log(list.shift());
console.log(list);
