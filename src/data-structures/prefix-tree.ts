/**
 *
 * Time Complexity.
 *
 * where m - query length
 *  _____________________________________________________________________
 * |                |                                                    |
 * |                |   Access      Search      Insertion   Deletion     |
 * |     Average    |   O(m)        O(m)        O(m)        O(m)         |
 * |     Worst      |   O(m)        O(m)        O(m)        O(m)         |
 * |________________|____________________________________________________|
 *
 * Space Complexity.
 *  _________________________
 * |            |            |
 * |    Worst   |   O(n*m)   |
 * |____________|____________|
 *
 */

class TrieNode {
  isEnd = false;
  children: Record<string, TrieNode> = {};
}

export class PrefixTree {
  root = new TrieNode();

  constructor(data?: string[]) {
    if (data) {
      data.forEach((word) => this.insert(word));
    }
  }

  insert(word: string) {
    let node = this.root;

    for (const letter of word) {
      if (node.children[letter] == null) {
        node.children[letter] = new TrieNode();
      }

      node = node.children[letter];
    }

    node.isEnd = true;
    return this;
  }

  remove(word: string): boolean {
    return this.deleteWord(this.root, word);
  }

  private deleteWord(node: TrieNode, word: string, index: number = 0): boolean {
    if (index === word.length) {
      if (!node.isEnd) {
        return false;
      }
      node.isEnd = false; // Unmark the word
      return Object.keys(node.children).length === 0; // Delete if it's a leaf
    }

    const char = word[index];
    const child = node.children[char];
    if (!child) {
      return false; // Word not found
    }

    const shouldDeleteChild = this.deleteWord(child, word, index + 1);

    if (shouldDeleteChild) {
      delete node.children[char]; // Remove reference if not part of another word
      return Object.keys(node.children).length === 0 && !node.isEnd;
    }

    return false;
  }

  private autocompleteHelper(root: TrieNode, query: string): string[] {
    const results: string[] = [];

    if (root.isEnd) {
      results.push(query);
    }

    if (!Object.keys(root.children)) {
      return results;
    }

    for (const child in root.children) {
      results.push(
        ...this.autocompleteHelper(root.children[child], query + child)
      );
    }

    return results;
  }

  autocomplete(query: string) {
    let node = this.root;
    let str = "";

    for (let letter of query) {
      if (!node.children[letter]) {
        return [];
      }

      node = node.children[letter];
      str += letter;
    }

    return this.autocompleteHelper(node, str);
  }

  find(query: string) {
    let node = this.root;

    for (let letter of query) {
      if (!node.children[letter]) {
        return;
      }

      node = node.children[letter];
    }

    if (node.isEnd) {
      return query;
    }

    return;
  }
}

const trie = new PrefixTree(["java", "javascript", "python"]);
trie.insert("c++").insert("kotlin");
console.log(trie.autocomplete("ja"));
console.log(trie.autocomplete("c"));
console.log(trie.find("c++"));
console.log(trie.find("ci+"));
