/* global require, describe, it */

// Mocha
const assert = require('assert');
const testArray = [0, 1, 2, 3, 4, 5]; // even length
const testArray2 = [-1, 3, 19, 83, 100]; // odd length

// Algorithms
const binarySearch = require('../../algorithms/binary_search.js');

describe('Binary Search', function () {
  it('should return the index of a desired value in a given array, -1 if nonexistent', function () {
    assert.equal(binarySearch(testArray, 0), 0); // beginning of array
    assert.equal(binarySearch(testArray, 3), 3); // middle of array
    assert.equal(binarySearch(testArray, 5), 5); // end of array
    assert.equal(binarySearch(testArray, -83), -1); // not in array, less than lower limit
    assert.equal(binarySearch(testArray, 3.3), -1); // not in array, middle decimal value
    assert.equal(binarySearch(testArray, 200), -1); // not in array, greater than upper limit

    assert.equal(binarySearch(testArray2, -1), 0); // beginning of array
    assert.equal(binarySearch(testArray2, 19), 2); // middle of array
    assert.equal(binarySearch(testArray2, 100), 4); // end of array
    assert.equal(binarySearch(testArray2, -50), -1); // not in array, less than lower limit
    assert.equal(binarySearch(testArray2, 99), -1); // not in array, middle value
    assert.equal(binarySearch(testArray2, 200), -1); // not in array, greater than upper limit

  });
});