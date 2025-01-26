class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return undefined;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // find
  find(value) {
    if (!this.root) return false;

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return current;
      }

      if (value < current.value) {
        if (!current.left) {
          return undefined;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (!current.right) {
          return undefined;
        }
        current = current.right;
      }
    }
  }

  // contains
  contains(value) {
    if (!this.root) return false;

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        if (!current.left) {
          return false;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (!current.right) {
          return false;
        }
        current = current.right;
      }
    }
  }

  // breadthFirstSearch
  breadthFirstSearch() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // depthFirstSearchPreOrder
  depthFirstSearchPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(17);
tree.insert(1);
tree.insert(30);
console.log(tree);

console.log(tree.breadthFirstSearch());
console.log(tree.depthFirstSearchPreOrder());
