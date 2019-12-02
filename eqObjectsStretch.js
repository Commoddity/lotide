// Comparison Functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`🧠 Assertion Passed: ${actual} === ${expected}. 🧠`);
  } else {
    return (`💩 Assertion Failed: ${actual} !== ${expected}. 💩`);
  }
};

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

// Object Comparison Function
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

// Tests
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 },)); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false