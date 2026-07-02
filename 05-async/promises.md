# Promises

## Interview question

What is a Promise and what are its states?

## Short answer

A Promise is an object that represents the future result of an asynchronous operation. It has three states: **pending**, **fulfilled** (resolved successfully), and **rejected** (failed with an error). You handle them with `.then()`, `.catch()`, and `.finally()`.

## Simple explanation

A promise is like an IOU for a value that isn't ready yet. When you start an asynchronous task, it returns a promise that will be:

- **pending**: the task hasn't finished yet.
- **fulfilled**: it finished successfully and has a value (accessed with `.then()`).
- **rejected**: it failed and has an error (caught with `.catch()`).

Once it moves from pending to fulfilled or rejected, it never changes again. Promises can be **chained** with `.then()`, and each `.then()` returns a new promise.

## Code example

```javascript
// Create a promise
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data ready!"); // moves to fulfilled
  } else {
    reject("Something failed"); // moves to rejected
  }
});

// Consume it
promise
  .then((result) => console.log(result)) // "Data ready!"
  .catch((error) => console.log(error))
  .finally(() => console.log("Done (success or not)"));

// Chaining promises: each then returns a new promise
Promise.resolve(2)
  .then((n) => n * 2)   // 4
  .then((n) => n + 1)   // 5
  .then((n) => console.log(n)); // 5

// Run several in parallel
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then((results) => console.log(results)); // [1, 2]
```

## Common mistake

- Forgetting `.catch()` and leaving errors unhandled.
- Not returning inside a `.then()` when chaining: if you don't return the value (or the next promise), the following `.then()` receives `undefined`.
- Thinking `.then()` runs immediately; in reality it's asynchronous and runs after the synchronous code.

## How to answer it in an interview

> "A Promise represents the future result of an asynchronous operation. It has three states: pending while the task is running, fulfilled if it finishes successfully, and rejected if it fails. I handle success with `.then()`, errors with `.catch()`, and anything that should always run with `.finally()`. I can chain them because each `.then()` returns a new promise, and to run several at once I use `Promise.all`. The key thing is to always handle errors with `.catch()`."

## Quick challenge

What does this print?

```javascript
Promise.resolve(10)
  .then((n) => n + 5)
  .then((n) => console.log(n));
```

<details>
<summary>See answer</summary>

It prints `15`. The first `.then()` receives `10`, adds `5`, and returns `15`, which is passed to the second `.then()`.
</details>
