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

const without = (array, rem) => {
  let copy = array;
  let output = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < rem.length; j++) {
      if (array[i] === rem[j]) {
        copy.splice(i, 1);
        i--;
      }
    }
  }
  return copy;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], ["5", "7", "10"])); // => ["1", "2", "3", "4", "6", "8", "9"]
console.log(without(["1", "1", "1", "1", "5", "1", "7", "1", "1", "1"], ["1"])); // => ["5", "7"]

console.log(assertArraysEqual((without([1, 2, 3], [1])), [2, 3])); // => [2, 3]
console.log(assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"])); // => ["1", "2"]
console.log(assertArraysEqual((without(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], ["5", "7", "10"])), ["1", "2", "3", "4", "6", "8", "9"])); // => ["1", "2", "3", "4", "6", "8", "9"]
console.log(assertArraysEqual((without(["1", "1", "1", "1", "5", "1", "7", "1", "1", "1"], ["1"])), ["5", "7"])); // => ["5", "7"]

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); 
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));