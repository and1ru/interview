// Challenge: reverse a string (flip the text around).
// Input: "hello"
// Expected output: "olleh"

// Solution 1: using array methods.
// We turn the string into an array of characters, reverse it, and join it back.
function reverse(text) {
  return text.split("").reverse().join("");
}

// Solution 2: iterating over the string from back to front.
// Useful for explaining the logic "by hand" in an interview.
function reverseWithLoop(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i]; // append each character starting from the end
  }
  return result;
}

console.log(reverse("hello"));          // "olleh"
console.log(reverse("JavaScript"));     // "tpircSavaJ"
console.log(reverseWithLoop("world"));  // "dlrow"
console.log(reverseWithLoop(""));       // "" (edge case: empty string)

// Explanation:
// split("") separates each character into an array, reverse() flips it,
// and join("") merges it back into a string. The loop version does the
// same thing manually, iterating from the last index.

module.exports = { reverse, reverseWithLoop };
