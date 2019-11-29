// TEST FUCTIONS
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
  eqArrays(actual, expected) ? output += `🧠 Assertion Passed: ${actual} === ${expected}. 🧠`: 
                               output += `💩 Assertion Failed: ${actual} !== ${expected}. 💩`;
  return output;
};


// FUNCTION 
const takeUntil = (array, callback) => {
  truthiness = array.map(callback);
  output = [];
  for (i = 0; i < array.length; i++) {
    if (truthiness[i]!== true) {
      output.push(array[i]);
    } else if (truthiness[i] === true) {
      return output;
    }
  }
};

const trueOrFalse = [false, false, false, true];
const untilTruthy = takeUntil(trueOrFalse, x => x === true);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

console.log(assertArraysEqual(takeUntil(trueOrFalse, x => x === true), [false, false, false]))
console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]))
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]))