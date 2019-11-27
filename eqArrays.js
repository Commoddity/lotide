const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`😻😻😻Assertion Passed: ${actual} === ${expected}.`);
  } else {
    return (`😿😿😿Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Test cases for eqArrays function
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

//Should return true
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));

// Should return false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true));