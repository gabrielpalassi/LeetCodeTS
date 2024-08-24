class MinStack {
  private valStack: number[] = [];
  private minStack: number[] = [Infinity];

  push(val: number): void {
    this.valStack.push(val);
    if (val <= this.minStack[this.minStack.length - 1]) this.minStack.push(val);
  }

  pop(): void {
    if (this.valStack.pop() === this.minStack[this.minStack.length - 1])
      this.minStack.pop();
  }

  top(): number {
    return this.valStack[this.valStack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
