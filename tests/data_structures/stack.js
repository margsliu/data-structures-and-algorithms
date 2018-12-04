/* global require, describe, it */

// Mocha
const assert = require('assert');

const Stack = require('../../data_structures/stack.js');

describe('Stack empty', function () {
  it('should return true if the Stack is empty', function () {
    const emptyStack = new Stack();
    assert.equal(emptyStack.empty(), true);
  });
  it('should return false if the Stack is not empty', function () {
    const stack = new Stack();
    stack.push('seaslug');
    assert.equal(stack.empty(), false);
  });
});

describe('Stack peek', function () {
  it('should return null if the Stack is empty', function () {
    const emptyStack = new Stack();
    assert.equal(emptyStack.peek(), null);
  });
  it('should return the item at the top of the Stack if the Stack is not empty', function () {
    const stack = new Stack();
    stack.push('shark');
    stack.push(2);
    assert.equal(stack.peek(), 2);
  });
});

describe('Stack push', function () {
  it('should add and return a given item to the top of the Stack', function () {
    const stack = new Stack();
    stack.push('oyster');
    stack.push('squid');
    stack.peek();
    stack.pop();
    assert.equal(stack.peek(), 'oyster');
    assert.equal(stack.push('seaweed'), 'seaweed');
  });
});

describe('Stack pop', function () {
  it('should remove and return the topmost item in the Stack', function () {
    const stack = new Stack();
    stack.push('jellyfish');
    stack.push('oyster');
    stack.push('squid');
    stack.peek();
    stack.pop();
    assert.equal(stack.peek(), 'oyster');
    stack.pop();
    assert.equal(stack.pop(), 'jellyfish');

  });
});