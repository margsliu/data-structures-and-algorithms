class Queue {

  constructor() {
    this.queue = [];
  }

  add(item) {
    this.queue.push(item);
    return true;
  }

  peek() {
    if (!this.queue.length) return null;
    return this.queue[0];
  }

  poll() {
    if (!this.queue.length) return null;
    return this.queue.shift();
  }

}

module.exports = Queue;