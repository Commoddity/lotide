const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(assertArraysEqual((middle([1, 2, 3])), [2])); // => [2]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5])), [3])); // => [3]
console.log(assertArraysEqual((middle([54, 76, 23, 76, 87, 65, 54])), [76])); // => [76]

console.log(assertArraysEqual((middle([1, 2, 3, 4])), [2, 3])); // => [2, 3]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4])); // => [3, 4]
console.log(assertArraysEqual((middle([65, 23, 76, 87, 98, 23, 12, 98])), [87, 98])); // => [87, 98]

console.log(assertArraysEqual((middle([54, 76, 23, 76, 87, 65, 54])), [65])); // => [76]

console.log(assertArraysEqual((middle([65, 23, 76, 87, 98, 23, 12, 98])), [87, "98"])); // => [87, 98]
