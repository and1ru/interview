# setTimeout

## Interview question

How does `setTimeout` work, and why isn't the delay you pass it exact?

## Short answer

`setTimeout` schedules a function to run after a minimum amount of time, not an exact one. The callback is placed in the macrotask queue and only runs once the call stack is empty and the microtasks have been processed. That's why the delay is a guaranteed minimum, not a promise of precision.

## Simple explanation

`setTimeout(callback, ms)` doesn't run the callback exactly at `ms` milliseconds. What it does is: wait that minimum amount of time and then place the callback in the macrotask queue. The callback only runs when:

1. The current synchronous code has finished (call stack empty).
2. All pending microtasks (promises) have been processed.

That's why `setTimeout(fn, 0)` doesn't run immediately: it waits for all the synchronous code to finish.

## Code example

```javascript
// The delay is a minimum, not exact
console.log("start");
setTimeout(() => console.log("after ~0ms"), 0);
console.log("end");
// Output: start, end, after ~0ms

// Synchronous code delays the timeout even when it's set to 0ms
setTimeout(() => console.log("timeout"), 0);
for (let i = 0; i < 1e9; i++) {} // heavy, blocking loop
console.log("loop finished");
// "loop finished" comes BEFORE "timeout",
// because the timeout waits for the thread to free up.

// The classic bug: var in a loop with setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Prints 3, 3, 3 (with var, they all share the same i)

// With let it's fixed: each iteration has its own i
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0);
}
// Prints 0, 1, 2
```

## Common mistake

- Believing that `setTimeout(fn, 1000)` runs exactly at one second. If the thread is busy, it's delayed.
- The loop bug with `var`: since `var` has no block scope, all the callbacks share the same variable, which by the time they run already holds the final value. It's fixed with `let`.

## How to answer it in an interview

> "`setTimeout` schedules a callback to run after a minimum amount of time, not an exact one. When that time passes, the callback goes to the macrotask queue and only runs once the call stack is empty and the microtasks have been processed. That's why a `setTimeout` of 0 doesn't run immediately: it waits for the synchronous code to finish. A classic case is the loop with `var` and `setTimeout`, which prints the final value repeated because all the iterations share the same variable; it's fixed by using `let`."

## Quick challenge

What does this print, and how would you fix it to print 0, 1, 2?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

<details>
<summary>See answer</summary>

It prints `3, 3, 3`. It's fixed by changing `var` to `let`, which creates a new `i` variable on each iteration, so each callback remembers its own value and prints `0, 1, 2`.
</details>
