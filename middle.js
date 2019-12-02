const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

const middle = (array) => {
  let output = [];
  if (array.length <= 2) {
    return output;
  }
  if (array.length % 2 !== 0) {
    const midIndex = Math.floor(array.length / 2);
    output.push(array[midIndex]);
  }
  if (array.length % 2 === 0) {
    const midIndex = array.length / 2;
    output.push(array[midIndex - 1]);
    output.push(array[midIndex]);
  }
  return output;
};

module.exports = middle;