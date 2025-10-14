// @ts-ignore
Function.prototype.customBind = function (ctx, ...args) {
  const fn = this;

  return function (...args2: any) {
    const key = Symbol("fn");
    ctx[key] = fn;
    const result = ctx[key](...args, ...args2);
    delete ctx[key];
    return result;
  };
};
