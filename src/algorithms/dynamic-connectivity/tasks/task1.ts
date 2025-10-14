/**
 * Union-find с определенным каноническим элементом. Добавьте метод find(), чтобы find(i) возвращал наибольший элемент в связном компоненте, содержащем i.
 * Операции union(), connected() и find() должны работать за логарифмическое время или лучше.
 * 
 * Например, если элементы 1, 2, 6, 9 связаны, то find(1), find(2), find(6), find(9) должны все возвращать 9.

 */

import { WeightedQuickUnionWithPathCompression } from "../quick-union-weighted-with-path-compression.js";

export class MaxElementInConnectedComponent extends WeightedQuickUnionWithPathCompression {
  private maxElementInTree: number[] = [];

  override union(p: number, q: number): void {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) {
      return;
    }

    const pRootSize = this.sizes[pRoot];
    const qRootSize = this.sizes[qRoot];
    const totalSize = pRootSize + qRootSize;

    if (pRootSize < qRootSize) {
      this.ids[pRoot] = qRoot;
      this.sizes[qRoot] = totalSize;
      this.maxElementInTree[qRoot] = Math.max(
        this.maxElementInTree[qRoot] || 0,
        this.maxElementInTree[pRoot] || 0
      );
    } else {
      this.ids[qRoot] = pRoot;
      this.sizes[pRoot] = totalSize;
      this.maxElementInTree[pRoot] = Math.max(
        this.maxElementInTree[qRoot] || 0,
        this.maxElementInTree[pRoot] || 0
      );
    }
  }

  findMax(i: number) {
    return this.maxElementInTree[this.find(i)];
  }
}
