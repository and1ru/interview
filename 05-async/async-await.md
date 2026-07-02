# async / await

## Interview question

What are `async` and `await`, and what advantage do they have over promises with `.then()`?

## Short answer

`async/await` is a syntax for working with promises in a way that looks like synchronous code. `await` pauses the function until the promise resolves. Errors are handled with `try/catch`. The advantage is that the code is more readable and easier to follow.

## Simple explanation

- **`async`**: goes before a function. It makes the function always return a promise.
- **`await`**: used inside an `async` function. It waits for a promise to resolve and returns its value, without blocking the main thread.

It's "syntactic sugar" over promises: under the hood there are still promises, but the code reads top to bottom, as if it were synchronous. Errors, which with `.then()` are caught using `.catch()`, are handled here with `try/catch`.

## Code example

```javascript
// A function that returns a promise
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Mike" }), 500);
  });
}

// With async/await (readable, top to bottom)
async function showUser() {
  try {
    console.log("Loading...");
    const user = await getUser(); // waits here
    console.log(user.name); // "Mike"
  } catch (error) {
    console.log("Error:", error);
  }
}
showUser();

// Comparison: the same thing with .then()
function showWithThen() {
  console.log("Loading...");
  getUser()
    .then((user) => console.log(user.name))
    .catch((error) => console.log("Error:", error));
}

// An async function always returns a promise
async function greet() {
  return "Hello";
}
greet().then((msg) => console.log(msg)); // "Hello"
```

## Common mistake

- Using `await` outside an `async` function (throws an error, except at the top level of modern modules).
- Forgetting the `try/catch` and leaving errors unhandled.
- Putting `await` in a loop sequentially when the tasks could run in parallel. If they're independent, it's better to use `await Promise.all([...])`.

## How to answer it in an interview

> "`async/await` is a more readable way to work with promises. I mark the function as `async`, and with `await` I wait for a promise to resolve, getting its value directly, without chaining `.then()`. Under the hood they're still promises, so an async function always returns a promise. I handle errors with `try/catch`. The big advantage is that the code reads top to bottom as if it were synchronous, which is easier to follow than many chained `.then()` calls."

## Quick challenge

In what order does this print?

```javascript
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
console.log("0");
test();
console.log("3");
```

<details>
<summary>See answer</summary>

`0`, `1`, `3`, `2`. First `0` is printed, then `test()` is called and prints `1`. When it reaches the `await`, the function pauses and yields control, so `3` is printed. Finally, what comes after the `await` (`2`) runs as a microtask.
</details>
