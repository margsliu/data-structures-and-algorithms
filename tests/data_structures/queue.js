/* global require, describe, it */

// Mocha
const assert = require('assert');

const Queue = require('../../data_structures/queue.js');

describe('Queue add', function () {
  it('should add a given item to the end of the Queue', function () {
    const queue = new Queue();
    queue.add('tulip');
    queue.poll();
    queue.add('orchid');
    assert.equal(queue.peek(), 'orchid');
  });
});

describe('Queue peek', function () {
  it('should return null if the Queue is empty', function () {
    const emptyQueue = new Queue();
    assert.equal(emptyQueue.peek(), null);
  });
  it('should return but not remove the item at the end of the Queue', function () {
    const queue = new Queue();
    queue.add('poppy');
    queue.add('dahlia');
    assert.equal(queue.peek(), 'poppy');
  });
});

describe('Queue poll', function () {
  it('should return null if the Queue is empty', function () {
    const emptyQueue = new Queue();
    assert.equal(emptyQueue.poll(), null);
  });
  it('should return and remove the item at the end of the Queue', function () {
    const queue = new Queue();
    queue.add('sunflower');
    queue.add('peperomia');
    queue.add('lily');
    queue.poll();
    assert.equal(queue.poll(), 'peperomia');
  });
});