//Test Functions
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

const map = (words, callback) => {
  output = [];
  for (word of words) {
    output.push(callback(word));
  }
  return output;
}

const words = ["these", "pretzels", "are", "making", "me", "thirsty"];

const results = map(words, words => words.toUpperCase());


//Test Cases
console.log(assertArraysEqual(results, words.map(words => words.toUpperCase())));
console.log(assertArraysEqual(results.map(word => word.toLowerCase()), words));
console.log(assertArraysEqual(results.map(word => word.toLowerCase()).reverse(), words.reverse()));
