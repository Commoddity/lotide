const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

// TESTS
const result2 = tail(["The", "Great", "Pumpkin"]);
console.log(assertEqual(result2[0], "Great"));
console.log(assertEqual(result2[1], "Pumpkin"));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(assertEqual(words.length, 3));