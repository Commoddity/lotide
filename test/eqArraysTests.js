const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

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