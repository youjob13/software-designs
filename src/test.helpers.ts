export function measureFnExecution(
  fn: (...args: any[]) => any,
  ...args: any[]
) {
  const fnStart = performance.now();
  const trieAutocompleteResults = fn(...args);
  const fnDuration = performance.now() - fnStart;
  return { duration: fnDuration, results: trieAutocompleteResults };
}
