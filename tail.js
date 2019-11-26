const assertEqual = function(actual, expected) {
  if (typeof actual !== Array || typeof expected !== Array) {
    if (actual === expected) {
      return (`😻😻😻Assertion Passed: ${actual} === ${expected}.`);
    } else {
      return (`😿😿😿Assertion Failed: ${actual} !== ${expected}.`);
    }
  }
  if (actual.length !== expected.length) {
    return `😿😿😿Assertion Failed: ${actual} !== ${expected}.`;
  }
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return `😿😿😿Assertion Failed: ${actual} !== ${expected}.`;
    } else {
      return `😻😻😻Assertion Passed: ${actual} === ${expected}.`;
    }
  }
};

const tail = function(array) {
  let output = array.slice(1);
  return output;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result, ["Lighthouse", "Labs"]));

const result2 = tail(["The", "Great", "Pumpkin"]);
console.log(assertEqual(result2, ["Great", "Pumpkin"]));

const result3 = tail(["The", "Great", "Pumpkin"]);
console.log(assertEqual(result3, ["The", "Great", "Pumpkin"]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(assertEqual(words.length, 3));