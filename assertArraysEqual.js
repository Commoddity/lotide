const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  let output = '';
  eqArrays(actual, expected) ? output += `🧠 Assertion Passed: ${actual} === ${expected}. 🧠` : output += `💩 Assertion Failed: ${actual} !== ${expected}. 💩`;
  return output;
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, "3"]));
console.log(assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3]));
console.log(assertArraysEqual(["34", "54", "76"], ["34", "54", "76"]));

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return (`😻😻😻Assertion Passed: ${actual} === ${expected}.`);
//   } else {
//     return (`😿😿😿Assertion Failed: ${actual} !== ${expected}.`);
//   }
// };