/**
 * A Binary Search Tree (or BST) is a data structure used in computer science for organizing and storing data in a sorted manner.
 * Each node in a Binary Search Tree has at most two children, a left child and a right child, with the left child containing values less than the parent node
 * and the right child containing values greater than the parent node.
 * This hierarchical structure allows for efficient searching, insertion, and deletion operations on the data stored in the tree.
 *
 * Time Complexity.
 *  _____________________________________________________________________
 * |                |                                                    |
 * |                |   Access      Search      Insertion   Deletion     |
 * |     Average    |   O(log(n))   O(log(n))   O(log(n))   O(log(n))    |
 * |     Worst      |   O(n)        O(n)        O(n)        O(n)         |
 * |________________|____________________________________________________|
 *
 * Space Complexity.
 *  ______________________________
 * |            |                 |
 * |    Worst   |   O(n*log(n))   |
 * |____________|_________________|
 *
 */

class Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(public value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  private root: Node<T> | null = null;

  insert(value: T) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (current.value === value) {
        return undefined;
      }

      if (value < current.value) {
        if (current.left == null) {
          current.left = newNode;
          break;
        }

        current = current.left;
      } else if (value > current.value) {
        if (current.right == null) {
          current.right = newNode;
          break;
        }

        current = current.right;
      }
    }

    return this;
  }

  find(value: T) {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = value < current.value ? current.left : current.right;
    }
  }

  remove(value: T) {
    if (!this.root) {
      return;
    }

    this.root = this.removeNode(this.root, value);
  }

  private removeNode(current: Node<T>, value: T): Node<T> | null {
    if (current.value === value) {
      if (current.left == null && current.right == null) {
        return null;
      }

      if (current.left == null) {
        return current.right;
      }

      if (current.right == null) {
        return current.left;
      }

      let temp = this.findSmallestNode(current.right);
      current.value = temp.value;

      current.right = this.removeNode(current.right, temp.value);
      return current;
    }

    if (value < current.value) {
      current.left = this.removeNode(current.left!, value);
      return current;
    }

    if (value > current.value) {
      current.right = this.removeNode(current.right!, value);
      return current;
    }

    return null;
  }

  private findSmallestNode(node: Node<T>) {
    while (node.left != null) {
      node = node.left;
    }
    return node;
  }

  display(): string {
    if (!this.root) {
      return "The tree is empty";
    }
    return this.print(this.root).join(" -> ");
  }

  private print(node: Node<T> | null, result: T[] = []): T[] {
    if (node !== null) {
      this.print(node.left, result);
      result.push(node.value);
      this.print(node.right, result);
    }
    return result;
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(3)
  ?.insert(54)
  ?.insert(5)
  ?.insert(1)
  ?.insert(-11)
  ?.insert(7)
  ?.insert(6)
  ?.insert(8)
  ?.insert(4)
  ?.insert(0)
  ?.insert(-1);
console.log(binarySearchTree.display());
