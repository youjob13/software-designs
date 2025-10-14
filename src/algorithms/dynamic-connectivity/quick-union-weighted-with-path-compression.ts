/**
 * Решает проблему динамического соединения с помощью структуры данных Взвешенный Quick-Union с компрессией пути.
 *
 * Data structure - массив целых чисел размером N.
 * ids[i] родитель для i. Если ids[i] = i, то i является корнем дерева.
 * p и q связаны если у них одинаковый корень.
 *
 * Отличие от Weighted Quick-Union в том, что здесь мы используем компрессию пути.
 * Just after computing the root of p, we set the id of each examined node to point to the root.
 *
 * Оценка производительности:
 * Worst case time: N + M lg* N, где N - количество элементов, M - количество (union-find) операций
 *
 * initialize - O(n)
 * union - O(log n)
 * find - O(log n), где n - высота дерева, мы можем считать, что высота дерева логарифмическая благодаря взвешиванию
 * isConnected - O(log n)
 *
 * Ex. [10^9 unions and finds with 10^9 objects]
 * WQUPC reduce time from 30 years to 6 seconds
 */

export class WeightedQuickUnionWithPathCompression {
  protected sizes: number[] = [];
  constructor(protected ids: number[]) {
    this.sizes = Array(this.ids.length).fill(1);
  }

  // O(log n)
  // Make every node in path point to its grandparent (thereby halving the path length)
  find(index: number): number {
    while (index != this.ids[index]) {
      const parentForCurrentIndex = this.ids[index]; // сохраняем родителя для текущего индекса
      const grandparent = this.ids[parentForCurrentIndex]; // сохраняем родителя для parent, то есть grandparent
      this.ids[index] = grandparent; // здесь мы присваиваем для parent значение grandparent
      index = this.ids[index]; // здесь мы берем уже обновленное значение parent и продолжаем идти вверх по дереву
    }
    return index;
  }

  // O(log n)
  // Соединяет два элемента p и q, set the id of p's root as a child to the id of q's root
  union(p: number, q: number): void {
    if (p === q) {
      return;
    }

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
    } else {
      this.ids[qRoot] = pRoot;
      this.sizes[pRoot] = totalSize;
    }

    console.log(this.ids);
  }

  // O(log n)
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }
}

const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const quickUnionWeightedWithPathCompression =
  new WeightedQuickUnionWithPathCompression(ids);
quickUnionWeightedWithPathCompression.union(4, 3);
quickUnionWeightedWithPathCompression.union(3, 8);
quickUnionWeightedWithPathCompression.union(6, 5);
quickUnionWeightedWithPathCompression.union(9, 4);
quickUnionWeightedWithPathCompression.union(2, 1);
quickUnionWeightedWithPathCompression.union(5, 0);
quickUnionWeightedWithPathCompression.union(7, 2);
quickUnionWeightedWithPathCompression.union(6, 1);
// quickUnionWeightedWithPathCompression.union(7, 3);
console.log(quickUnionWeightedWithPathCompression.find(0));
