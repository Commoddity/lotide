const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {

  it("returns an array containing all elements of input array except the first", () => {
    assert.deepEqual(tail(["The", "Great", "Pumpkin"]), ["Great", "Pumpkin"]);
  });

});