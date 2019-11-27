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

const flatten = (arrays) => {
  let output = [];
  for (let num of arrays) {
    if (Array.isArray(num)) {
      output = output.concat(num);
    } else {
      output.push(num);
    }
  }
  return output;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6])); // => [1, 2, 3, 4, 5, 6]