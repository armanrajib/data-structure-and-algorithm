// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const first = new Node("Hi");
console.log(first);

first.next = new Node("there");
console.log(first);

first.next.next = new Node("how");
console.log(first);

first.next.next.next = new Node("are");
console.log(first);

first.next.next.next.next = new Node("you");
console.log(first);

// =======================
// class SinglyLinkedList
// =======================

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }
}

const list = new SinglyLinkedList();
console.log(list);

list.push("H");
console.log(list);

list.push("G");
console.log(list);
