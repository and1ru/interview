# Synchronous vs Asynchronous

## Interview question

What is the difference between synchronous and asynchronous code in JavaScript?

## Short answer

Synchronous code runs line by line, blocking until each line finishes. Asynchronous code lets you kick off a task that takes time (like a network request or a timer) and keep running the rest of your code without waiting; the result is handled later.

## Simple explanation

JavaScript is single-threaded: it does one thing at a time. If everything were synchronous, a slow task (like fetching data from a server) would freeze the entire page until it finished.

To avoid that, JavaScript uses **asynchronous** code: it starts the slow task, hands it off, and keeps executing everything else. When the task completes, its result is handled through a callback, a promise, or `async/await`.

- **Synchronous**: "I'll stand here and wait until you're done."
- **Asynchronous**: "Start the task and let me know when you're done; meanwhile, I'll keep working on my own stuff."

## Code example

```javascript
// SYNCHRONOUS: runs in order, line by line
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3

// ASYNCHRONOUS: setTimeout does not block
console.log("A");
setTimeout(() => {
  console.log("B"); // runs later, even with a delay of 0
}, 0);
console.log("C");
// Output: A, C, B
// "B" comes last because setTimeout is asynchronous:
// the synchronous code runs first.
```

## Common mistake

Assuming that `setTimeout(fn, 0)` runs the function immediately. Even with a delay of 0, the function is placed in a queue and only runs once the current synchronous code has finished. That's why "B" appears after "C".

## How to answer it in an interview

> "JavaScript is single-threaded, so it runs one thing at a time. Synchronous code runs line by line and blocks until each line finishes. Asynchronous code lets me kick off a task that takes time, like a server request, and keep going with the rest of my code without waiting around; when the task finishes, I handle the result with callbacks, promises, or async/await. This keeps the app from freezing while it waits on slow operations."

## Quick challenge

In what order are the letters printed?

```javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
console.log("end");
```

<details>
<summary>See answer</summary>

`start`, `end`, `timeout`. The synchronous code (`start` and `end`) runs first; the `setTimeout` callback is asynchronous and runs last, even with a delay of 0.
</details>
