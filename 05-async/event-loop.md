# Event Loop

## Interview question

What is the event loop, and how does JavaScript handle asynchronous code with a single thread?

## Short answer

The event loop is the mechanism that lets JavaScript, which is single-threaded, handle asynchronous tasks. It first runs all the synchronous code (the call stack), then the microtasks (promises), and then the macrotasks (`setTimeout`, events), repeating the cycle.

## Simple explanation

JavaScript has a single thread, so it can't do two things at once. The event loop coordinates what runs and when, using several pieces:

- **Call stack**: the stack where synchronous code runs, one item at a time.
- **Environment APIs** (browser or Node): handle tasks that take time, like `setTimeout` or requests.
- **Microtask queue**: resolved promises (`.then`, `await`). These have **priority**.
- **Macrotask queue**: callbacks from `setTimeout`, `setInterval`, events.

Here's what the event loop does: it runs all the synchronous code; when the call stack is empty, it drains the **entire** microtask queue; then it takes **one** macrotask, and starts over.

The key point: microtasks (promises) run before macrotasks (`setTimeout`), even if the `setTimeout` delay is 0 ms.

## Code example

```javascript
console.log("1 (synchronous)");

setTimeout(() => {
  console.log("2 (macrotask: setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 (microtask: promise)");
});

console.log("4 (synchronous)");

// Output:
// 1 (synchronous)
// 4 (synchronous)
// 3 (microtask: promise)
// 2 (macrotask: setTimeout)

// Explanation of the order:
// - First the synchronous code: 1 and 4.
// - Then the microtasks are drained: 3 (the promise).
// - Last, the macrotasks: 2 (the setTimeout).
```

## Common mistake

Thinking that `setTimeout(fn, 0)` runs before a promise. It doesn't: promises are microtasks and have priority over macrotasks like `setTimeout`. Another mistake is believing JavaScript is multi-threaded just because it can do things "at the same time"; in reality it delegates to the environment APIs and coordinates with the event loop.

## How to answer it in an interview

> "The event loop is what lets JavaScript, which is single-threaded, handle asynchronous code. First it runs all the synchronous code on the call stack. When the stack is empty, it processes the microtask queue, which are the promises, and drains it completely. Then it takes a single macrotask, like a `setTimeout` callback, and repeats the cycle. The key thing is that promises take priority over `setTimeout`, even if the timeout is zero milliseconds."

## Quick challenge

Order the output:

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

<details>
<summary>See answer</summary>

`A`, `D`, `C`, `B`. Synchronous first (A, D), then the promise's microtask (C), and last the setTimeout macrotask (B).
</details>
