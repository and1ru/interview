// Challenge: determine whether a text is a palindrome.
// A palindrome reads the same forwards and backwards.
// Input: "racecar"
// Expected output: true

// Solution: we normalize the text (lowercase and no spaces),
// reverse it, and compare it with the original.
function isPalindrome(text) {
  // Remove spaces and lowercase everything for a fair comparison.
  const clean = text.toLowerCase().replace(/\s/g, "");
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
}

console.log(isPalindrome("racecar"));          // true
console.log(isPalindrome("Never odd or even")); // true (ignores spaces and case)
console.log(isPalindrome("javascript"));       // false
console.log(isPalindrome("wow"));              // true
console.log(isPalindrome(""));                 // true (edge case: empty)

// Explanation:
// replace(/\s/g, "") removes all spaces. toLowerCase() normalizes
// upper and lower case. Then we compare the cleaned text with its
// reversed version: if they are equal, it's a palindrome.

module.exports = { isPalindrome };
