//data=> node
//func=> add, findMin, findMax, find, isPresent,remove, findMinHeight, findMacHeight, isBalanced, inOrder, preOrder, postOrder, levelOrder

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin = function () {
    let current = this.root;

    while (current.left != null) {
      current = current.left;
    }
    return current.data;
  };

  findMax = function () {
    let current = this.root;

    while (current.right != null) {
      current = current.right;
    }
    return current.data;
  };

  find = function (data) {
    let current = this.root;

    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return null;
      }
    }
    return current;
  };

  isPresent = function (data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
    }
    return false;
  };

  remove = function (data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }

        if (node.left == null) {
          return node.right;
        }

        if (node.right == null) {
          return node.left;
        }

        let tempNode = node.right;

        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(tempNode.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  };

  findMinHeight = function (node = this.root) {
    if (node == null) {
      return -1;
    }

    let left = findMinHeight(node.left);
    let right = findMinHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };

  findMaxHeight = function (node = this.root) {
    if (node == null) {
      return -1;
    }

    let left = findManHeight(node.left);
    let right = findManHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };

  isBalanced = function () {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  };

  inOrder = function () {
    if (this.root == null) {
      return null;
    } else {
      const result = [];
      const traverseInOrder = function (node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      };

      traverseInOrder(this.root);
      return result;
    }
  };

  preOrder = function () {
    if (this.root == null) {
      return null;
    } else {
      const result = [];
      const traversePreOrder = function (node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };

      traversePreOrder(this.root);
      return result;
    }
  };

  postOrder = function () {
    if (this.root == null) {
      return null;
    } else {
      const result = [];
      const traversePostOrder = function (node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };

      traversePostOrder(this.root);
      return result;
    }
  };

  levelOrder = function () {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  };
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.isPresent(4));
bst.remove(4);
console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.isPresent(4));
