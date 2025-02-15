import { describe, it } from "node:test";
import { PrefixTree } from "./prefix-tree";
import assert from "node:assert";

function badAutocomplete(source: string[], query: string) {
  const results: string[] = [];
  for (const word of source) {
    if (word.startsWith(query)) {
      results.push(word);
    }
  }
  return results;
}

/**
 * Modern JS engines (e.g., V8 in Node.js) optimize startsWith, making badAutocomplete artificially fast.
 * This might skew the results, making the PrefixTree seem slower than expected.
 */
describe("Autocomplete", () => {
  const source: string[] = [];
  for (let i = 0; i < 100000; i++) {
    source.push(`java${i}`);
  }
  for (let i = 0; i < 1000; i++) {
    source.push(`c++${i}`);
  }

  const trie = new PrefixTree(source);

  it("PrefixTree autocomplete should be much faster than badAutocomplete fn when the number of matched words is small", () => {
    const trieAutocompleteStart = performance.now();
    const trieAutocompleteResults = trie.autocomplete("c");
    const trieAutocompleteDuration = performance.now() - trieAutocompleteStart;

    const badAutocompleteStart = performance.now();
    const badAutocompleteResults = badAutocomplete(source, "c");
    const badAutocompleteDuration = performance.now() - badAutocompleteStart;

    console.info("[Trie]: ", trieAutocompleteDuration);
    console.info("[Bad Autocomplete]: ", badAutocompleteDuration);

    assert.equal(trieAutocompleteResults.length, badAutocompleteResults.length);
    assert.ok(badAutocompleteDuration > trieAutocompleteDuration);
  });
});
