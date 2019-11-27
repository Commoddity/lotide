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

const letterPositions = (sentence) => {
  const results = {};
  const arr = sentence.replace(/ /g, '').toLowerCase().split('');
  for (let i = 0; i < arr.length; i++) {
    if (Object.prototype.hasOwnProperty.call(results, (arr[i]))) {
      results[arr[i]].push(i);
    } else {
      results[arr[i]] = [i];
    }
  }
  
  return results;
};


console.log(assertArraysEqual(letterPositions("hello").e, [ 1 ]));
console.log(assertArraysEqual(letterPositions("hello this input is a string").l, [ 2, 3 ]));
console.log(assertArraysEqual(letterPositions("I speak for the trees for the trees have no tongues").e, [ 3, 11, 14, 15, 22, 25, 26, 31, 39 ]));
console.log(assertArraysEqual(letterPositions("WhOa TyPiNg LiKe ThIs iS AnNoYiNg").i, [ 7, 11, 16, 18, 25 ]));
console.log(assertArraysEqual(letterPositions("jabberwocky").b, [ 2, 3 ]));