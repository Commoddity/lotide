// Comparison Functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`😻😻😻Assertion Passed: ${actual} === ${expected}.`);
  } else {
    return (`😿😿😿Assertion Failed: ${actual} !== ${expected}.`);
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
const ba = {a: "b", b: "a"};
const ab = {a: "b", b: "a"};
console.log(assertEqual(eqObjects(ba, ab), true));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false));

const bay = {a: "a", b: "b"};
const aby = {a: "a", b: "b"};
console.log(assertEqual(eqObjects(bay, aby), true));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false));

const cdy = { c: ["2", 3], d: "1" };
const dcy = { c: ["2", 3], d: "1" };
console.log(assertEqual(eqObjects(cdy, dcy), true));