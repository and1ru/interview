# Callbacks

## Interview question

What is a callback and what is it used for?

## Short answer

A callback is a function passed as an argument to another function so that it can run it later. It's used a lot in asynchronous operations and in array methods like `map` or `filter`.

## Simple explanation

In JavaScript, functions are values: you can store them in variables and pass them as arguments. When you pass a function to another function so it can "call it back" at some point, that passed function is a callback.

They're used in two major contexts:

- **Synchronous**: methods like `map`, `filter`, and `forEach` take a callback that runs for each element.
- **Asynchronous**: operations like `setTimeout` or server requests take a callback that runs when the task finishes.

## Code example

```javascript
// Synchronous callback: runs for each element
const numbers = [1, 2, 3];
numbers.forEach(function (n) {
  console.log(n * 2); // 2, 4, 6
});

// Passing a defined function as a callback
function greet(name) {
  console.log("Hello " + name);
}
function process(name, callback) {
  callback(name); // here it "calls back"
}
process("Mike", greet); // "Hello Mike"

// Asynchronous callback
setTimeout(function () {
  console.log("This runs later");
}, 1000);
```

## Common mistake

- **Calling the callback instead of passing it**: writing `process(greet())` instead of `process(greet)`. With parentheses you run it immediately and pass its result; without parentheses you pass the function itself.
- **Callback hell**: nesting many asynchronous callbacks creates hard-to-read code. That's what promises and `async/await` are for.

## How to answer it in an interview

> "A callback is a function I pass to another function as an argument so it can run it when needed. I use them all the time with array methods like `map` or `filter`, where the callback runs for each element, and also in asynchronous code like `setTimeout`. One important detail is passing the function without parentheses, because with parentheses I run it instead of passing it."

## Quick challenge

Write a function `repeat(n, callback)` that calls the callback `n` times, passing it the current repetition number (starting at 1).

<details>
<summary>See solution</summary>

```javascript
function repeat(n, callback) {
  for (let i = 1; i <= n; i++) {
    callback(i);
  }
}
repeat(3, (i) => console.log("Repetition " + i));
// Repetition 1
// Repetition 2
// Repetition 3
```
</details>
