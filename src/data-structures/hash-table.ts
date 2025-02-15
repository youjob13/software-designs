class HashTable {
  private table = new Array(127);
  private size = 0;

  set<T>(key: string, value: T) {
    this.size++;
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
      this.table[index].push([key, value]);
      return;
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        // if we try to set element with index that already exists
        // in this case we just override it
        this.table[index][i][1] = value;
        break;
      }

      // if index is not exists in the table, we will save new data (key,value)
      this.table[index].push([key, value]);
    }
  }

  get(key: string) {
    const target = this.hash(key);

    if (this.table[target] == null) {
      return;
    }

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[target][i][0] === key) {
        return this.table[target][i][1];
      }
    }
  }

  remove(key: string) {
    const index = this.hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length; // To ensure that the hash value doesn't exceed the bucket size
  }
}
