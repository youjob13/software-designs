class MinStack {
  stack: number[] = [];
  minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);

    const currentMin =
      this.minStack[this.minStack.length - 1] ?? Number.MAX_SAFE_INTEGER;
    const min = this.minStack.length === 0 ? val : Math.min(currentMin, val);
    this.minStack.push(min);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}
