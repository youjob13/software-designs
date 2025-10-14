/**
 * Решает проблему динамического соединения с помощью структуры данных Quick-Find.
 *
 * Data structure - массив целых чисел размером N.
 * p и q связаны если они имеют одинаковый id.
 *
 * Пример:
 * [0, 1, 1, 2, 3] - элементы под индексами 1 и 2 связаны, так как имеют одинаковый id = 1
 *
 * Оценка производительности:
 * Worst case time: M N, где N - количество элементов, M - количество (union-find) операций
 *
 * initialize - O(n)
 * union - O(n)
 * find - O(1)
 * isConnected - O(1)
 */

export class QuickFind {
  constructor(private ids: number[]) {}

  // O(1)
  private find(indexOfReuiredID: number): number {
    return this.ids[indexOfReuiredID];
  }

  // O(n)
  union(indexOfPointA: number, indexOfPointB: number): void {
    const idOfPointA = this.find(indexOfPointA);
    const idOfPointB = this.find(indexOfPointB);

    if (idOfPointA === idOfPointB) {
      return;
    }

    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === idOfPointA) {
        this.ids[i] = idOfPointB;
      }
    }

    console.log(this.ids);
  }

  // O(1)
  isConnected(indexOfPointA: number, indexOfPointB: number): boolean {
    return this.find(indexOfPointA) === this.find(indexOfPointB);
  }
}

const ids = [1, 3, 2, 0, 1, 0, 2, 8, 6, 6, 3];
const quickFind = new QuickFind(ids);

console.log(quickFind.isConnected(0, 1));
console.log(quickFind.isConnected(4, 1));
quickFind.union(0, 1);
console.log(quickFind.isConnected(0, 1));
console.log(quickFind.isConnected(2, 6));
quickFind.union(0, 9);
console.log(quickFind.isConnected(4, 1));
