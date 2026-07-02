// Challenge: flatten a nested array (turn nested levels into a single level).
// Input: [1, [2, 3], [4, [5, 6]]]
// Expected output: [1, 2, 3, 4, 5, 6]

// Solution 1: using the flat method with Infinity.
// Infinity tells flat to flatten no matter how many levels there are.
function flatten(array) {
  return array.flat(Infinity);
}

// Solution 2: recursive (good for explaining how it works under the hood).
// We iterate over each element: if it's an array, we flatten it too; otherwise, we add it.
function flattenRecursive(array) {
  let result = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      result = result.concat(flattenRecursive(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(flatten([1, [2, 3], [4, [5, 6]]]));       // [1, 2, 3, 4, 5, 6]
console.log(flattenRecursive([1, [2, [3, [4]]]]));    // [1, 2, 3, 4]
console.log(flatten([[1], [2], [3]]));                // [1, 2, 3]
console.log(flattenRecursive([]));                     // [] (edge case)

// Explanation:
// flat(Infinity) flattens all levels in one go. The recursive version
// checks each element: if it's an array, it calls itself to flatten it;
// otherwise, it adds it directly. This way it unwinds the nesting.

module.exports = { flatten, flattenRecursive };
