# Scope

## Interview question

What is scope in JavaScript, and what types are there?

## Short answer

Scope is the region of code where a variable is accessible. There is **global** scope, **function** scope, and **block** scope. `var` uses function scope; `let` and `const` use block scope.

## Simple explanation

Scope defines "from where you can see" a variable.

- **Global scope**: variables declared outside of any function. They are visible everywhere.
- **Function scope**: variables declared inside a function. They only exist within it.
- **Block scope**: variables declared with `let` or `const` inside a block `{ }` (an `if`, a `for`, etc.). They only exist within that block.

An inner function can access the variables of the functions that contain it (this is called the scope chain). But not the other way around: what's inside is not visible from the outside.

## Code example

```javascript
const global = "I'm global";

function outer() {
  const fromFunction = "only inside outer";
  console.log(global); // OK: can see the global one

  if (true) {
    let fromBlock = "only inside the if";
    console.log(fromFunction); // OK: sees the function's variable
  }
  // console.log(fromBlock); // Error: outside its block
}

outer();
// console.log(fromFunction); // Error: outside its function

// The scope chain: the inner sees the outer
function parent() {
  const message = "hello";
  function child() {
    console.log(message); // OK: the child sees the parent's variable
  }
  child();
}
parent(); // "hello"
```

## Common mistake

Thinking that a variable declared with `var` inside an `if` or a `for` only lives in that block. That's not the case: `var` ignores blocks and its scope is the entire function. Only `let` and `const` respect block scope.

## How to answer it in an interview

> "Scope is the region where a variable is accessible. We have global, function, and block scope. `var` has function scope, while `let` and `const` have block scope, meaning they only exist within the braces where they're declared. On top of that, inner functions can access the variables of outer ones thanks to the scope chain, but not the other way around."

## Quick challenge

What does this print, and why?

```javascript
function test() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a);
  console.log(b);
}
test();
```

<details>
<summary>See answer</summary>

It prints `1` and then throws a `b is not defined` error. `var a` has function scope, so it survives outside the `if`. `let b` has block scope and doesn't exist outside the `if`.
</details>
