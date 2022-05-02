const {
  NotImplementedError
} = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.tree) {
      return (this.tree = newNode);
    }
    let current = this.tree;
    while (current) {
      if (newNode.data < current.data) {
        if (!current.left) {
          return (current.left = newNode);
        }
        current = current.left;
      } else {
        if (!current.right) {
          return (current.right = newNode);
        }
        current = current.right;
      }
    }
    return;
  }

  has(data) {
    let current = this.tree;
    while (current) {
      if (current.data === data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.tree;
    while (current) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    removeNode(this.tree, data);
    function minN(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
    function removeNode(node, data) {
      if (node === null) return null;
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let temporaryN = minN(node.right);
        node.data = temporaryN.data;
        node.right = removeNode(node.right, temporaryN.data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        node.left = removeNode(node.left, data);
        return node;
      }
    }
  }

  min() {
    let minTree = this.tree;
    while (minTree.left) {
      minTree = minTree.left;
    }
    return minTree.data;
  }

  max() {
    let maxTree = this.tree;
    while (maxTree.right) {
      maxTree = maxTree.right;
    }
    return maxTree.data;
  }
}


module.exports = {
  BinarySearchTree
};