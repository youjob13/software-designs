/**
 * In linked list each element is a separate object that contains pointer to the next object (or null);
 *
 * Pros:
 * - Optimal for insertion and deletion. Nodes can easily be removed or added from a linked list without reorganizing the entire data structure.
 *
 * Cons:
 * - Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.
 * - It uses more memory than arrays because of the storage of the pointers.
 *
 * Insertion / deletion at the beginning O(1) (vs O(n) in arrays)
 * Searching / Insertion / deletion at any position O(n);
 */

class NodeItem<T> {
  next: NodeItem<T> | null;

  constructor(public value: T) {
    this.next = null;
  }
}

export class LinkedList<T> {
  protected head: NodeItem<T> | null = null;
  //   protected tail: NodeItem<T> | null = null;
  public length: number = 0;

  add(node: NodeItem<T>) {
    this.length += 1;

    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;

    return this;
  }

  getHead() {
    return this.head;
  }

  displayList() {
    let str = "";
    let current = this.head;

    while (current) {
      str += current.value + "->";
      current = current.next;
    }

    str += "null";

    return str;
  }

  reverseList() {
    let current = this.head;
    let prev = null;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  count() {
    let current = this.head;
    let count = 0;
    while (current) {
      count += 1;
      current = current.next;
    }
    return count;
  }

  insertAt(node: NodeItem<T>, position: number) {
    if (this.length < position) {
      throw new Error("Index out of range");
    }

    this.length += 1;

    if (position === 0) {
      node.next = this.head;
      this.head = node;
      return this;
    }

    let currentPosition = 0;
    let current = this.head;

    while (current) {
      if (currentPosition + 1 === position) {
        const temp = current.next;
        current.next = node;
        node.next = temp;
        break;
      }

      current = current.next;
      currentPosition += 1;
    }

    return this;
  }

  insertFirst(node: NodeItem<T>) {
    this.insertAt(node, 0);
  }

  insertLast(node: NodeItem<T>) {
    this.insertAt(node, this.length);
  }

  getValue(position: number) {
    if (this.length - 1 < position) {
      throw new Error("Index our of the range");
    }

    let current = this.head;
    let currentPosition = 0;

    while (current) {
      if (position === currentPosition) {
        current;
        break;
      }

      current = current.next;
      currentPosition += 1;
    }

    return current;
  }

  findIndex(value: T) {
    let current = this.head;
    let currentPosition = 0;

    while (current) {
      if (current.value === value) {
        return currentPosition;
      }

      currentPosition += 1;
      current = current.next;
    }

    return -1;
  }

  removeAt(position: number) {
    if (this.length - 1 < position) {
      throw new Error("Index out of the range");
    }

    this.length -= 1;

    if (position === 0) {
      const temp = this.head!.next;
      this.head = temp;
      return this;
    }

    let current = this.head;
    let currentPosition = 0;

    while (current) {
      if (currentPosition + 1 === position) {
        let nodeAfterRemoved = current.next?.next ?? null;
        current.next = nodeAfterRemoved;
        break;
      }

      current = current.next;
      currentPosition += 1;
    }

    return this;
  }

  toArray() {
    const arr = [];

    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}
