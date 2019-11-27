const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return (`😻Assertion Passed: ${actual} === ${expected}.😻`);
  } else {
    return (`😿Assertion Failed: ${actual} !== ${expected}.😿`);
  }
};

countLetters = (words) => {
  const arr = words.replace(/ /g, '').split('');
  const results = {};
  for (const x of arr) {
    if (results.hasOwnProperty(x)) {
      results[x] += 1;
    } else {
      results[x] = 1;
    }
  }
  return results;
};

console.log(countLetters("this is a test case"));
console.log(countLetters("boot camp is awesome"));
console.log(countLetters("a b c d e f g h i j k l m n o p q r s t u v w x y z"));
console.log(countLetters("aaaaaaaaaaah"));
console.log(countLetters("eyjafjallajokul"));