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
  eqArrays(actual, expected) ? output += "😻Assertion Passed😻" : output += "😿Assertion Failed😿";
  return output;
};

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
