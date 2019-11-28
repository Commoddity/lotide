// Comparison Functions
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  const objKey1 = Object.keys(object1);
  const objKey2 = Object.keys(object2);
  if (objKey1.length !== objKey2.length) {
    return false;
  }
  for (let x of objKey1) {
    if (Array.isArray(object1[x])) {
      if (!eqArrays(object1[x], object2[x])) {
        return false;
      }
    } else if (object1[x] !== object2[x]) {
      return false;
    }
  }
  return true;
};

// Function Implmentation
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  let output = '';
  eqObjects(actual, expected) ?
    output += (`🧠 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}. 🧠`) :
    output += (`💩 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}. 💩`);
  return output;
};

console.log(assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}));
console.log(assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}));
console.log(assertObjectsEqual({a: 1, b: 3}, {a: 1, b: 2}));
console.log(assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2}));