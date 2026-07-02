// Challenge: FizzBuzz (the interview classic).
// Print the numbers from 1 to n, but:
// - If it's a multiple of 3, print "Fizz".
// - If it's a multiple of 5, print "Buzz".
// - If it's a multiple of both 3 and 5, print "FizzBuzz".
// Input: n = 15
// Expected output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

// Solution: we iterate from 1 to n and decide what to print.
// Order matters: we check the case of both 3 AND 5 first.
function fizzbuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzbuzz(15).join(", "));
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

console.log(fizzbuzz(5).join(", "));
// 1, 2, Fizz, 4, Buzz

// Explanation:
// The % (modulo) operator gives the remainder of a division. If i % 3 is 0,
// the number is a multiple of 3. The key is to check FIRST for the case of
// a multiple of both 3 and 5; if we left it for last, it would never be
// reached because the earlier conditions would catch it first.

module.exports = { fizzbuzz };
