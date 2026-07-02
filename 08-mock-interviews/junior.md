# Mock interview — Junior

A mock interview designed for a **junior** profile looking for their first job. Do it out loud, with a timer (around 30 minutes). Answer on your own first before reading the suggested answer.

Tip: an interviewer for a junior role is looking for **clear fundamentals** and a **good attitude toward learning**, not perfect solutions.

---

## Question 1: What is the difference between `let`, `const`, and `var`?

**What the interviewer wants to hear:**
- That `var` is function-scoped and `let`/`const` are block-scoped.
- That `const` cannot be reassigned.
- Bonus: that `const` does not make an object immutable.

**Red flags:**
- "They're the same, just spelled differently."
- Saying that `const` makes an object immutable without any nuance.

**Suggested answer:**
> "`var` is function-scoped and is avoided these days. `let` and `const` are block-scoped. `let` can be reassigned and `const` can't, although if `const` holds an object, its properties can still be modified. I use `const` by default and `let` only when I need to reassign."

**Practical exercise:**
Write code that shows that a `var` variable declared inside an `if` is accessible outside of it, but a `let` is not.

---

## Question 2: What is the difference between `==` and `===`?

**What the interviewer wants to hear:**
- That `===` compares value and type, while `==` converts types before comparing.
- That using `===` is recommended.

**Red flags:**
- Not knowing what coercion is.
- Saying they always produce the same result.

**Suggested answer:**
> "`===` compares value and type without converting anything. `==` converts the types before comparing, which produces odd results like `0 == false` being true. I always use `===` because it's predictable."

**Practical exercise:**
Predict the result of `"5" == 5` and `"5" === 5`, and explain why.

---

## Question 3: What is a function, and how do you declare an arrow function?

**What the interviewer wants to hear:**
- That a function groups reusable code that takes parameters and can return a value.
- The syntax of an arrow function.

**Red flags:**
- Not knowing the basic syntax of a function.
- Confusing parameters with arguments without being able to explain it.

**Suggested answer:**
> "A function is a reusable block of code that takes parameters and can return a value with `return`. An arrow function is a shorter syntax: `const add = (a, b) => a + b`. With a single expression, the return is implicit."

**Practical exercise:**
Write a regular function and an arrow function that take two numbers and return their sum.

---

## Question 4: What are `map` and `filter` used for?

**What the interviewer wants to hear:**
- That `map` transforms each element and `filter` selects the ones that meet a condition.
- That they return new arrays without modifying the original.

**Red flags:**
- Confusing `map` with `forEach`.
- Not knowing that they return a new array.

**Suggested answer:**
> "`map` transforms each element of the array and returns a new one of the same size. `filter` returns only the elements that meet a condition. Neither one modifies the original array."

**Practical exercise:**
Given `[1, 2, 3, 4]`, use `filter` to keep the even numbers and `map` to square them.

---

## Question 5: What does this code print, and why?

```javascript
console.log(typeof null);
```

**What the interviewer wants to hear:**
- That it prints `"object"`.
- That it's a historical bug in the language.

**Red flags:**
- Saying that it prints `"null"`.

**Suggested answer:**
> "It prints `'object'`. It's a historical bug in JavaScript that's kept for backward compatibility. Conceptually `null` should be its own type, but `typeof null` always returns 'object'."

**Practical exercise:**
Write a correct check to tell whether a variable is really an object (and not `null`).

<details>
<summary>See a solution</summary>

```javascript
function isObject(value) {
  return typeof value === "object" && value !== null;
}
```
</details>

---

## Wrapping up

When you're done, ask yourself:
- Did I answer out loud and with confidence?
- Did I explain the *why*, not just the *what*?
- Which question was hardest for me? That's the topic to review.
