# var, let, and const

## Interview question

What's the difference between `var`, `let`, and `const`?

## Short answer

`var` is function-scoped and can be redeclared; `let` and `const` are block-scoped. `let` can be reassigned, `const` cannot. Today the recommendation is to use `const` by default and reach for `let` only when you need to reassign.

## Simple explanation

- **`var`**: the old-school way. It's scoped to the entire function where it's declared (it ignores blocks like `if` or `for`). It's also *hoisted* and initialized to `undefined`.
- **`let`**: block-scoped (`{ }`). You can change its value, but you can't redeclare it in the same block.
- **`const`**: also block-scoped. You can't reassign it. Careful: if it holds an object or array, its contents can still be modified; what can't change is the reference.

Rule of thumb: always use `const`; switch to `let` only if you truly need to reassign; avoid `var`.

## Code example

```javascript
const name = "Mike";
// name = "Other"; // Error: can't reassign a const

let age = 25;
age = 26; // OK: let can be reassigned

// const with an object: the reference doesn't change, but the contents can
const user = { active: true };
user.active = false; // OK
console.log(user); // { active: false }

// Block scope
if (true) {
  var withVar = "visible outside";
  let withLet = "only in here";
}
console.log(withVar); // "visible outside"
// console.log(withLet); // Error: withLet is not defined
```

## Common mistake

Thinking that `const` makes the value "immutable." It doesn't: `const` only prevents **reassigning the variable**. An object or array declared with `const` can happily mutate its contents.

## How to answer it in an interview

> "`var` is function-scoped and is avoided these days. `let` and `const` are block-scoped. The difference between them is that `let` can be reassigned and `const` can't. I use `const` by default and only switch to `let` when I need to reassign the value. One important point: `const` doesn't make an object immutable, it just prevents changing the reference."

## Quick challenge

What does this code print, and why?

```javascript
for (var i = 0; i < 3; i++) {}
console.log(i);
```

<details>
<summary>See answer</summary>

It prints `3`. Since `var` is function-scoped (not block-scoped), the variable `i` still exists after the `for` loop and keeps its last value.
</details>
