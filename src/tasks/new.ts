function newInstance(clazz: any, ...args: any[]) {
  const instance = Object.create(clazz.prototype);
  const result = clazz.apply(instance, args);
  return result instanceof Object ? result : instance;
}
