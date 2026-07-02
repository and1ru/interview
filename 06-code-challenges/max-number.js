// Challenge: find the largest number in an array.
// Input: [3, 7, 2, 9, 1]
// Expected output: 9

// Solution 1: using Math.max with the spread operator.
// Math.max takes individual numbers, so we "expand" the array.
function max(numbers) {
  return Math.max(...numbers);
}

// Solution 2: iterating over the array manually (good for explaining).
// We track the largest value seen so far and update it if we find a bigger one.
function maxWithLoop(numbers) {
  let largest = numbers[0];
  for (const n of numbers) {
    if (n > largest) {
      largest = n;
    }
  }
  return largest;
}

console.log(max([3, 7, 2, 9, 1]));         // 9
console.log(max([-5, -2, -10]));           // -2 (works with negatives)
console.log(maxWithLoop([100, 50, 200]));  // 200
console.log(maxWithLoop([42]));            // 42 (edge case: a single element)

// Explanation:
// Math.max(...numbers) is equivalent to Math.max(3, 7, 2, 9, 1). The spread
// converts the array into individual arguments. The loop version compares
// each number with the current largest and updates it when it finds a
// bigger one.

module.exports = { max, maxWithLoop };
