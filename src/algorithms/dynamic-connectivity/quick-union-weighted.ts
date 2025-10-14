/**
 * Решает проблему динамического соединения с помощью структуры данных Взвешенный Quick-Union.
 *
 * Data structure - массив целых чисел размером N.
 * ids[i] родитель для i. Если ids[i] = i, то i является корнем дерева.
 * p и q связаны если у них одинаковый корень.
 *
 * Отличие от Quick-Union в том, что здесь мы храним размер дерева для каждого корня.
 * При соединении двух деревьев меньшего размера, мы делаем его дочерним для большего дерева.
 * Это помогает уменьшить высоту дерева и улучшить производительность операций.
 *
 * Оценка производительности:
 * Worst case time: N + M log N, где N - количество элементов, M - количество (union-find) операций
 *
 * initialize - O(n)
 * union - O(log n)
 * find - O(log n), где n - высота дерева, мы можем считать, что высота дерева логарифмическая благодаря взвешиванию
 * isConnected - O(log n)
 */

export class WeightedQuickUnion {
  private sizes: number[] = [];
  constructor(private ids: number[]) {}

  // O(log n)
  // Проверяет, что у двух элементов одинаковый корень
  private find(index: number): number {
    while (index != this.ids[index]) {
      index = this.ids[index];
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

    const pRootSize = this.sizes[pRoot] ?? 1;
    const qRootSize = this.sizes[qRoot] ?? 1;
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
const quickUnionWeighted = new WeightedQuickUnion(ids);
quickUnionWeighted.union(4, 3);
quickUnionWeighted.union(3, 8);
quickUnionWeighted.union(6, 5);
quickUnionWeighted.union(9, 4);
quickUnionWeighted.union(2, 1);
quickUnionWeighted.union(5, 0);
quickUnionWeighted.union(7, 2);
quickUnionWeighted.union(6, 1);
quickUnionWeighted.union(7, 3);
console.log(quickUnionWeighted.isConnected(4, 8));
