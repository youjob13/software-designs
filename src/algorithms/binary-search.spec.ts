import { describe, it } from "node:test";
import { binarySearch } from "./binary-search";
import assert from "node:assert";

import * as TestHelpers from "../test.helpers";

describe("Binary Search", () => {
  const source: number[] = [];

  for (let i = 0; i < 10000000; i++) {
    source.push(i);
  }

  function linearSearch(source: number[], target: number) {
    return source.findIndex((item) => item === target);
  }

  it("The Binary Search should work faster then the Linear Search", () => {
    const query = 5555555;

    const { duration: binarySearchDuration, results: binarySearchResults } =
      TestHelpers.measureFnExecution(binarySearch, source, query);

    const { duration: linearSearchDuration, results: linearSearchResults } =
      TestHelpers.measureFnExecution(linearSearch, source, query);

    console.info(`[Binary Search]: `, binarySearchDuration);
    console.info(`[Linear Search]: `, linearSearchDuration);

    assert.ok(binarySearchResults, linearSearchResults);
    assert.ok(binarySearchDuration < linearSearchDuration);
  });
});
