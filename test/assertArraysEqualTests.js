const assertArraysEqual = require('../assertArraysEqual.js')

// TESTS
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, "3"]));
console.log(assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3]));
console.log(assertArraysEqual(["34", "54", "76"], ["34", "54", "76"]));