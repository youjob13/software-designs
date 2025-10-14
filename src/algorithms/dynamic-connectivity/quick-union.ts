/**
 * Решает проблему динамического соединения с помощью структуры данных Quick-Union.
 *
 * Data structure - массив целых чисел размером N.
 * ids[i] родитель для i. Если ids[i] = i, то i является корнем дерева.
 * p и q связаны если у них одинаковый корень.
 *
 * Пример:
 * [2, 0, 3, 3, 8] - для p = 1 (d[1] === 0) => родитель 0 (d[0] === 2) => родитель 2 (d[2] === 3) => родитель 3 (d[3] === 3) значит, для p = 1 корень 3
 *
 * Оценка производительности:
 * Worst case time: N M, где N - количество элементов, M - количество (union-find) операций
 *
 * initialize - O(n)
 * union - O(n)
 * find - O(n), где n - высота дерева
 * isConnected - O(n)
 */

export class QuickUnion {
  constructor(private ids: number[]) {}

  // O(n)
  // Проверяет, что у двух элементов одинаковый корень
  private find(index: number): number {
    while (index != this.ids[index]) {
      index = this.ids[index];
    }
    return index;
  }

  // O(n)
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

    this.ids[pRoot] = qRoot;

    console.log(this.ids);
  }

  // O(n)
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }
}

const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const quickUnion = new QuickUnion(ids);
quickUnion.union(4, 3);
quickUnion.union(3, 8);
console.log(quickUnion.isConnected(4, 8));
