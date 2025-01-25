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
}

const tree = new BinarySearchTree();
tree;

tree.root = new Node(10);

tree;
console.log(tree.root);
console.log(tree.root.left);
console.log(tree.root.right);

tree.root.left = new Node(5);
tree.root.right = new Node(15);

tree;
console.log(tree.root.left);
console.log(tree.root.right);

tree.root.left.left = new Node(2);
tree.root.left.right = new Node(7);

tree;
console.log(tree.root.left.left);
console.log(tree.root.left.right);

tree.root.right.left = new Node(13);
tree.root.right.right = new Node(17);

tree;
console.log(tree.root.right.left);
console.log(tree.root.right.right);

// Big O Notation
// ===============
// Insertion - O(log n)
// Searching - O(log n)
// Not guaranteed, but in the (average) case scenario, the height of the tree is log n
