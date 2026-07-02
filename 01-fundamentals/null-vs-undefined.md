# null vs undefined

## Interview question

What's the difference between `null` and `undefined`?

## Short answer

`undefined` means a variable exists but has no value assigned (JavaScript sets it). `null` is an absence of value that the programmer assigns **on purpose**.

## Simple explanation

- **`undefined`**: the default value. It shows up when you declare a variable without giving it a value, when a function returns nothing, or when you access a property that doesn't exist. JavaScript assigns it automatically.
- **`null`**: you write it intentionally to say "there's nothing here, and that's on purpose." For example, to clear out a variable that previously held an object.

Both are "empty," but `undefined` is an accidental or default emptiness, whereas `null` is an intentional emptiness.

## Code example

```javascript
let noValue;
console.log(noValue); // undefined (declared, not assigned)

const obj = {};
console.log(obj.nonExistentProperty); // undefined

function noReturn() {}
console.log(noReturn()); // undefined

// You assign null on purpose
let user = { name: "Mike" };
user = null; // "there's no user anymore, on purpose"
console.log(user); // null

// Important comparisons
console.log(null == undefined);  // true  (coercion: they're "similar")
console.log(null === undefined); // false (different types)
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (historical bug)
```

## Common mistake

- Believing that `null` and `undefined` are identical. With `==` they look equal, but with `===` they aren't, and their meanings are different.
- Being surprised that `typeof null` is `"object"`. It's a historical bug in the language that's kept for backward compatibility.

## How to answer it in an interview

> "JavaScript sets `undefined` automatically when a variable has no value, a function returns nothing, or a property doesn't exist. I assign `null` on purpose to represent 'there's no value.' With `==` they're equal because of coercion, but with `===` they aren't, because they're different types. One curious detail is that `typeof null` returns `'object'`, which is a historical bug in the language."

## Quick challenge

What does this print?

```javascript
console.log(null == undefined);
console.log(null === undefined);
console.log(typeof undefined === typeof null);
```

<details>
<summary>See answer</summary>

`true`, `false`, `false`. The first is true because of coercion. The second is false because the types differ. The third compares `"undefined"` with `"object"`, which are different.
</details>
