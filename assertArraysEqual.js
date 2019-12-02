const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (actual, expected) => {
  let output = '';
  eqArrays(actual, expected) ? output += `🧠 Assertion Passed: ${actual} === ${expected}. 🧠` : output += `💩 Assertion Failed: ${actual} !== ${expected}. 💩`;
  return output;
};

module.exports = assertArraysEqual;