/* global require, describe, it */

// Mocha
const assert = require('assert');

const sets = require('../../algorithms/sets');
const union = sets.union;
const intersection = sets.intersection;
const difference = sets.difference;

describe('Sets - Union', function () {
  it('should return an array of all items', function () {
    const a = [1, 'jellyfish', 0.5];
    const b = ['polyp', 1, 1, 2];
    const c = [100];
    const d = [];
    assert.deepStrictEqual(union(a,b,c,d), [1, 'jellyfish', 0.5, 'polyp', 2, 100]);
  });
});

describe('Sets - Intersection', function () {
  it('should return an array of common elements', function () {
    const a = [1, 'jellyfish', 0.5];
    const b = ['polyp', '1', 1, 1, 2];
    const c = [1];
    const d = [1];
    const e = [1, 9];
    assert.deepStrictEqual(intersection(a,b,c,d,e), [1]);
  });
  it ('should return an empty array if there are no common elements', function () {
    const a = [];
    const b = ['flab'];
    const c = [1, 2, 3];
    assert.deepStrictEqual(intersection(a,b,c), []);
  });
});

describe('Sets - Difference', function () {
  it('should return an array of elements only in the first parameter', function () {
    const a = [1, 'jellyfish', 0.5];
    const b = ['polyp', '1', 1, 1, 2];
    const c = [100];
    const d = [];
    assert.deepStrictEqual(difference(a,b,c,d), ['jellyfish', 0.5]);
  });
});