# Closures

## Interview question

What is a closure and what is it used for?

## Short answer

A closure is a function that "remembers" the variables of the scope where it was created, even after that scope has finished executing. It's used to keep private state and to create configurable functions.

## Simple explanation

When you define a function inside another one, the inner function retains access to the outer one's variables. Even though the outer function has already finished, the inner one keeps "remembering" those variables. That combination of function + remembered variables is called a closure.

It's one of the foundations of JavaScript. It's used to:

- **Keep private state** (variables only the function can touch).
- **Create functions from other functions** (function factories).
- Callbacks, event handlers, etc.

## Code example

```javascript
// Counter with private state thanks to the closure
function createCounter() {
  let count = 0; // this variable becomes "enclosed"
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// "count" is not accessible from the outside: it's private

// Function factory: each one remembers its own "factor"
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## Common mistake

The classic `for` loop bug with `var`:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Prints 3, 3, 3 (not 0, 1, 2)
```

With `var`, all the functions share the same `i`, which ends up being `3`. The fix is to use `let`, which creates a new variable per iteration, and each closure remembers its own.

## How to answer it in an interview

> "A closure is a function that remembers the variables of the scope where it was created, even after that scope has finished. For example, if I have a function that returns another function, the returned function still has access to the first one's variables. This lets me keep private state, like a counter where the variable can't be modified from the outside, or create configurable functions like a `multiplyBy(2)`."

## Quick challenge

Create a function `createGreeting(greeting)` that returns another function which takes a name and returns the full greeting. Example: `createGreeting("Hello")("Mike")` should return `"Hello, Mike"`.

<details>
<summary>See solution</summary>

```javascript
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}
console.log(createGreeting("Hello")("Mike")); // "Hello, Mike"
```
</details>
