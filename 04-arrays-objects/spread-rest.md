# Spread and Rest

## Interview question

What's the difference between the spread operator and the rest operator? Both use `...`.

## Short answer

Even though both use `...`, they do the opposite. **Spread** "expands" an array or object into individual elements. **Rest** "gathers" several elements into a single array. Spread is used when building; rest, when receiving.

## Simple explanation

- **Spread (`...`)**: takes an array or object and spreads it out. Useful for copying, merging arrays/objects, or passing elements as arguments.
- **Rest (`...`)**: collects the remaining elements into an array. Used in function parameters (to accept a variable number of arguments) or when destructuring.

A trick to remember them: if the `...` is where something is **created or called**, it's spread (expands). If it's where something is **received or declared**, it's rest (gathers).

## Code example

```javascript
// SPREAD: expands arrays
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4]

// SPREAD: copies an array (shallow copy)
const copy = [...a];
console.log(copy); // [1, 2]

// SPREAD: expands objects
const base = { x: 1 };
const extended = { ...base, y: 2 };
console.log(extended); // { x: 1, y: 2 }

// SPREAD: passing elements as arguments
console.log(Math.max(...[5, 10, 3])); // 10

// REST: gathers arguments into an array
function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// REST: in destructuring
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

## Common mistake

- Confusing when it's spread and when it's rest. Remember: rest can only go at the **end** of the parameters (`function f(a, ...rest)`), never in the middle.
- Thinking that spread makes a deep copy. It's a **shallow** copy: nested objects still share their reference.

## How to answer it in an interview

> "Both use three dots, but they do the opposite. Spread expands an array or object into its elements, and I use it to copy, merge, or pass arguments. Rest does the opposite: it gathers several elements into an array, and I use it in function parameters to accept a variable number of arguments, or in destructuring to grab the rest. The rule I use: if I'm creating or calling, it's spread; if I'm receiving, it's rest."

## Quick challenge

Write a function `maximum(...nums)` that returns the largest of all the numbers it receives.

<details>
<summary>See solution</summary>

```javascript
function maximum(...nums) {
  return Math.max(...nums);
}
console.log(maximum(3, 7, 2, 9, 1)); // 9
```
</details>
