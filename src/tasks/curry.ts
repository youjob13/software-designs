function curry(fn: Function): Function {
  return function curried(...args: any[]) {
    if (args.length > fn.length) {
      // @ts-ignore
      return fn.apply(this, args);
    }

    return (...args2: any[]) => {
      // @ts-ignore
      return curried.apply(this, [...args2, ...args]);
    };
  };
}
