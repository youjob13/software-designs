import { describe, it } from "node:test";
import { binarySearch, binarySearchOnShiftedData } from "./binary-search";
import assert from "node:assert";

import * as TestHelpers from "../test.helpers";

describe("Binary Search", () => {
  function linearSearch(source: number[], target: number) {
    return source.findIndex((item) => item === target);
  }

  it("The Binary Search should work faster then the Linear Search", () => {
    const query = 5555555;
    const source: number[] = [];

    for (let i = 0; i < 10000000; i++) {
      source.push(i);
    }

    const { duration: binarySearchDuration, results: binarySearchResults } =
      TestHelpers.measureFnExecution(binarySearch, source, query);

    const { duration: linearSearchDuration, results: linearSearchResults } =
      TestHelpers.measureFnExecution(linearSearch, source, query);

    console.info(`[Binary Search]: `, binarySearchDuration);
    console.info(`[Linear Search]: `, linearSearchDuration);

    assert.ok(binarySearchResults, linearSearchResults);
    assert.ok(binarySearchDuration < linearSearchDuration);
  });

  it("The Binary Search on shifted data should work faster then the Linear Search on shifted data", () => {
    const query = 99000;
    const shiftedArr: number[] = [];

    for (let i = 100000; i < 1000000; i++) {
      shiftedArr.push(i);
    }

    for (let i = 0; i < 100000; i++) {
      shiftedArr.push(i);
    }

    const { duration: binarySearchDuration, results: binarySearchResults } =
      TestHelpers.measureFnExecution(
        binarySearchOnShiftedData,
        shiftedArr,
        query
      );

    const { duration: linearSearchDuration, results: linearSearchResults } =
      TestHelpers.measureFnExecution(linearSearch, shiftedArr, query);

    console.info(`[Binary Search]: `, binarySearchDuration);
    console.info(`[Linear Search]: `, linearSearchDuration);

    assert.ok(binarySearchResults, linearSearchResults);
    assert.ok(binarySearchDuration < linearSearchDuration);
  });
});
