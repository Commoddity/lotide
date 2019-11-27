const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return (`😻Assertion Passed: ${actual} === ${expected}.😻`);
  } else {
    return (`😿Assertion Failed: ${actual} !== ${expected}.😿`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  const results = {
  };
  for (const x of allItems) {
    if (itemsToCount[x]) {
      results[x] ? results[x] += 1 : results[x] = 1;
    }
    console.log(results);
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Salima": true });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Kavith"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Salima"], 2));