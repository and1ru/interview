// Challenge: count how many times each character appears in a text.
// Input: "banana"
// Expected output: { b: 1, a: 3, n: 2 }

// Solution: we iterate over the text and use an object as a counter.
// For each character, we add 1 to its count (or start at 1 if it's new).
function countCharacters(text) {
  const count = {};
  for (const char of text) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

// Alternative version with reduce (same idea, different syntax).
function countWithReduce(text) {
  return [...text].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log(countCharacters("banana"));   // { b: 1, a: 3, n: 2 }
console.log(countCharacters("aabbc"));    // { a: 2, b: 2, c: 1 }
console.log(countWithReduce("code"));     // { c: 1, o: 1, d: 1, e: 1 }
console.log(countCharacters(""));         // {} (edge case: empty text)

// Explanation:
// count[char] || 0 returns the current count, or 0 if the character
// doesn't exist in the object yet. We add 1 and store it. This way we
// accumulate the frequency of each character.

module.exports = { countCharacters, countWithReduce };
