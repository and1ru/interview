# Temporal Dead Zone (TDZ)

## Interview question

What is the Temporal Dead Zone in JavaScript?

## Short answer

It's the period between the start of the block and the line where a `let` or `const` variable is declared. If you try to use the variable during that period, you get a `ReferenceError`.

## Simple explanation

`let` and `const` variables are indeed registered (they're "hoisted") at the start of the block, just like `var`. The difference is that they are **not initialized** until execution reaches their declaration line. That "dead" space, where the variable exists but can't be used, is the Temporal Dead Zone.

This is actually a safeguard: it prevents you from using a variable before giving it a value, something that with `var` happened silently (it returned `undefined` and caused hard-to-find bugs).

## Code example

```javascript
// The TDZ runs from the start of the block to the declaration
{
  // console.log(message); // ReferenceError: Cannot access 'message' before initialization
  let message = "hello";
  console.log(message); // "hello" — by now it has left the TDZ
}

// Comparison with var (which has no TDZ)
console.log(withVar); // undefined (no error)
var withVar = 1;

// console.log(withLet); // ReferenceError (does throw because of the TDZ)
let withLet = 1;
```

## Common mistake

Confusing the TDZ with "let has no hoisting." It does: the variable is registered at the start of the block. The difference from `var` is that it isn't initialized until its line, which is why it throws an error if you use it beforehand, instead of returning `undefined`.

## How to answer it in an interview

> "The Temporal Dead Zone is the space between the start of the block and the line where I declare a variable with `let` or `const`. The variable is already registered, but not initialized, so if I use it beforehand I get a ReferenceError. It's a safeguard: with `var`, using the variable early silently returned `undefined`, which caused bugs; with `let` and `const`, the error is explicit."

## Quick challenge

What happens when you run this?

```javascript
function test() {
  console.log(value);
  let value = 10;
}
test();
```

<details>
<summary>See answer</summary>

It throws `ReferenceError: Cannot access 'value' before initialization`. The variable `value` is in the TDZ until its declaration line, so it can't be used beforehand.
</details>
