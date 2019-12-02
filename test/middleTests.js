const assert = require('chai').assert;
const middle = require('../middle.js');

describe("#middle", () => {
  
  it("returns an empty array if length is less than 3", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns the middle element if an array length is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns returns the middle two elements if an array length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});