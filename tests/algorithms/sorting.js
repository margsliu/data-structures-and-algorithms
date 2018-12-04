/* global require, describe, it */

// Mocha
const assert = require('assert');
const testArray = [0, -1, 1, 3, -2, 2, -3];
const solutionArray = [-3, -2, -1, 0, 1, 2, 3];

// Algorithms
const bubbleSort = require('../../algorithms/sorting/bubble.js');
const selectionSort = require('../../algorithms/sorting/selection.js');

describe('Bubble Sort', function () {
  it('should return true if the values in input array were correctly sorted from least to greatest (ascending order)', function () {
    assert.deepStrictEqual(bubbleSort(testArray), solutionArray);
  });
});

describe('Selection Sort', function () {
  it('should return true if the values in input array were correctly sorted from least to greatest (ascending order)', function () {
    assert.deepStrictEqual(selectionSort(testArray), solutionArray);
  });
});