# Mock interview — Mid-level

A mock interview for a **mid-level** profile (with some experience). Definitions alone are no longer enough here: you're expected to understand the *why*, the edge cases, and to be able to reason about code. Suggested duration: 45 minutes.

---

## Question 1: Explain what a closure is and give me a real use case.

**What the interviewer wants to hear:**
- That a closure remembers the variables from the scope where it was created.
- A concrete use case: private state, factory functions, memoization.

**Red flags:**
- Reciting the definition without being able to give your own example.
- Not connecting it to real problems.

**Suggested answer:**
> "A closure is a function that remembers the variables from the scope where it was created, even after that scope has finished. A real use case is encapsulating private state: for example, a counter where the internal variable can't be modified from the outside, only through the functions I expose. I also use it for factory functions, like a `createValidator(rule)`."

**Practical exercise:**
Implement a `createCounter()` function that returns an object with `increment`, `decrement`, and `value` methods, keeping the count private.

<details>
<summary>See solution</summary>

```javascript
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
}
const c = createCounter();
c.increment();
c.increment();
console.log(c.value()); // 2
```
</details>

---

## Question 2: How does JavaScript determine the value of `this`?

**What the interviewer wants to hear:**
- That `this` depends on how the function is called, not where it's defined.
- The rules: method, standalone function, `new`, `call/apply/bind`, arrow.

**Red flags:**
- Saying that `this` is always the object where the function lives.
- Not knowing the behavior of arrow functions.

**Suggested answer:**
> "`this` depends on how the function is invoked. If I call it as a method (`obj.method()`), it's the object. If I call it standalone, it's undefined in strict mode. With `new` it's the new object, and with `call`, `apply`, or `bind` I set it myself. Arrow functions don't have their own `this`: they inherit it from the scope where I wrote them, which is why they're useful as callbacks inside methods."

**Practical exercise:**
Explain why this code prints `undefined` and fix it:

```javascript
const counter = {
  total: 5,
  show: function () {
    setTimeout(function () {
      console.log(this.total);
    }, 100);
  },
};
counter.show();
```

<details>
<summary>See solution</summary>

The `setTimeout` callback is a regular function, so its `this` is not `counter`. Fix it by using an arrow function, which inherits `this`:

```javascript
show: function () {
  setTimeout(() => console.log(this.total), 100); // 5
}
```
</details>

---

## Question 3: Explain the difference between a shallow copy and a deep copy. When has it caused you a bug?

**What the interviewer wants to hear:**
- That spread and `Object.assign` copy only the first level.
- That nested objects share the reference.
- Ways to make a deep copy (`structuredClone`).

**Red flags:**
- Believing that spread makes a complete copy.
- Not knowing any way to make a deep copy.

**Suggested answer:**
> "A shallow copy, like spread, only copies the first level; nested objects still share the reference, so mutating them affects the original. This has caused me bugs when modifying state in applications, where changing a copy accidentally mutated the original. For a deep copy I use `structuredClone`, which clones everything independently."

**Practical exercise:**
Write a function that takes an object with nested data and returns a deep copy that shares no references with the original.

---

## Question 4: In what order does this code run, and why?

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

**What the interviewer wants to hear:**
- The output: `A, D, C, B`.
- The explanation involving the event loop, microtasks, and macrotasks.

**Red flags:**
- Saying that `B` comes before `C`.
- Not knowing what a microtask is.

**Suggested answer:**
> "It prints A, D, C, B. First the synchronous code: A and D. Then the event loop processes the microtasks, and a promise is a microtask, so C comes out. Finally the macrotasks, and the `setTimeout` callback is a macrotask, which is why B comes last, even though the delay is 0. Microtasks always take priority over macrotasks."

**Practical exercise:**
Add an `async/await` to this example and explain how the order changes.

---

## Question 5: Refactor this code to make it cleaner.

```javascript
function process(users) {
  var result = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].active == true) {
      result.push(users[i].name);
    }
  }
  return result;
}
```

**What the interviewer wants to hear:**
- Using `filter` + `map`.
- `const`/`let` instead of `var`.
- `===` instead of `==` (and noticing that `== true` is redundant).

**Red flags:**
- Not seeing the opportunity to use array methods.
- Keeping `var` without any justification.

**Suggested answer and solution:**
> "I can use `filter` to keep the active ones and `map` to extract the names, and switch `var` to `const`."

```javascript
function process(users) {
  return users
    .filter((user) => user.active)
    .map((user) => user.name);
}
```

**Practical exercise:**
Extend the function so that it also sorts the names alphabetically.

---

## Wrapping up

At the mid-level, communicating your reasoning is worth as much as the answer itself. Practice explaining *why* you choose each approach, and mention the edge cases before you're asked about them.
