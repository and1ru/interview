// Challenge: remove duplicate numbers from an array.
// Input: [1, 2, 2, 3, 4, 4]
// Expected output: [1, 2, 3, 4]

// Solution 1: using a Set.
// A Set only stores unique values, so removing duplicates
// is as simple as creating a Set and converting it back to an array.
function removeDuplicates(array) {
  return [...new Set(array)];
}

// Solution 2: using filter (useful for explaining the logic).
// We keep an element only if it's the first time it appears.
function removeDuplicatesWithFilter(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));        // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "b", "a", "c"]));      // ["a", "b", "c"]
console.log(removeDuplicatesWithFilter([5, 5, 5, 1]));    // [5, 1]
console.log(removeDuplicates([]));                         // [] (edge case)

// Explanation:
// new Set(array) automatically discards repeated values and the spread
// (...) turns it back into an array. The filter version keeps a value
// only when its index matches the first index where it appears.

module.exports = { removeDuplicates, removeDuplicatesWithFilter };
