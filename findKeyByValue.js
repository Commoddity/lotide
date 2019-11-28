const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`😻😻😻Assertion Passed: ${actual} === ${expected}.`);
  } else {
    return (`😿😿😿Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const findKeyByValue = (shows, value) => {
  let keys = Object.keys(shows);
  for (let i = 0; i < keys.length; i++) {
    if (shows[keys[i]] === value) {
      return keys[i];
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));