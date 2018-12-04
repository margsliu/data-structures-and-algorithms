class Stack {

  constructor() {
    this.stack = [];
  }

  empty() {
    return !this.stack.length;
  }

  peek() {
    if (this.empty()) return null;
    return this.stack[this.stack.length - 1];
  }

  push(item) {
    this.stack.push(item);
    return item;
  }

  pop() {
    return this.stack.pop();
  }

}

module.exports = Stack;