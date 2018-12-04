/* global require, describe, it */

// Mocha
const assert = require('assert');

const BinarySearchTree = require('../../data_structures/binary_search_tree.js');

describe('BinarySearchTree findLargest', function () {
  it('returns null when the tree is empty', function () {
    const tree = new BinarySearchTree();
    assert.equal(tree.findLargest(), null);
  });
  it('finds the largest value in the tree', function () {
    const tree = new BinarySearchTree();
    tree.add(100);
    tree.add(-4);
    tree.add(0.9);
    tree.add(3);
    tree.add(7);
    assert.equal(tree.findLargest(), 100);
  });
});

describe('BinarySearchTree findSmallest', function () {
  it('returns null when the tree is empty', function () {
    const tree = new BinarySearchTree();
    assert.equal(tree.findSmallest(), null);
  });
  it('finds the smallest value in the tree', function () {
    const tree = new BinarySearchTree();
    tree.add(100);
    tree.add(-4);
    tree.add(0.9);
    tree.add(3);
    tree.add(7);
    assert.equal(tree.findSmallest(), -4);
  });
});

describe('BinarySearchTree contains', function () {
  const tree = new BinarySearchTree();
  tree.add(100);
  tree.add(-4);
  tree.add(0.9);
  tree.add(3);
  tree.add(7);
  it('returns true if the desired value exists in the tree', function () {
    assert.equal(tree.contains(0.9), true);
  });
  it('returns false if the desired value does not exist in the tree', function () {
    assert.equal(tree.contains(0), false);
  });
});