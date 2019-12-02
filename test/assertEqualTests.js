const assertEqual = require('../assertEqual.js');

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, '1'));
console.log(assertEqual(76, 76));
console.log(assertEqual('toast', 'space'));
console.log(assertEqual('toast', 'toast'));