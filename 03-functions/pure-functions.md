# Pure functions

## Interview question

What is a pure function, and why is it desirable?

## Short answer

A pure function is one that, given the same inputs, always returns the same output and produces no side effects (it doesn't modify anything outside of itself). They're desirable because they're predictable, easy to test, and easy to reuse.

## Simple explanation

A function is pure if it meets two rules:

1. **Deterministic**: with the same arguments, it always returns the same result.
2. **No side effects**: it doesn't modify external variables, doesn't change its arguments, doesn't print to the console, doesn't write to disk, and doesn't make requests.

The opposite is an impure function: it depends on something external or changes something external.

Pure functions are easier to test (you only check input and output) and easier to reason about (you don't have to worry about what they touch on the outside).

## Code example

```javascript
// PURE: same input, same output, no side effects
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // always 5

// IMPURE: depends on an external variable
let tax = 0.16;
function priceWithTax(price) {
  return price * (1 + tax); // if tax changes, the result changes
}

// IMPURE: modifies its argument (side effect)
function addItem(cart, item) {
  cart.push(item); // mutates the original array
  return cart;
}

// PURE version: creates a copy instead of mutating
function addItemPure(cart, item) {
  return [...cart, item]; // returns a new array
}

const original = ["a"];
const updated = addItemPure(original, "b");
console.log(original); // ["a"] (untouched)
console.log(updated);  // ["a", "b"]
```

## Common mistake

Thinking a function is pure just because it has a `return`. If inside it modifies an array it received as a parameter, or depends on an external variable that can change, it's already impure. Mutating the arguments is the most common and hardest-to-spot side effect.

## How to answer it in an interview

> "A pure function always returns the same result for the same inputs and has no side effects: it doesn't modify external variables or its own arguments. They're desirable because they're predictable and very easy to test, since I only have to check the input and output. Whenever I can, I avoid mutating the arguments and instead return new copies, for example using the spread operator."

## Quick challenge

Turn this impure function into a pure one:

```javascript
let total = 0;
function accumulate(n) {
  total += n;
  return total;
}
```

<details>
<summary>See solution</summary>

```javascript
// Pure: takes the running total and returns the new one, with no external state
function accumulate(total, n) {
  return total + n;
}
console.log(accumulate(0, 5)); // 5
console.log(accumulate(5, 3)); // 8
```
</details>
