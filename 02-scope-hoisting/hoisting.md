# Hoisting

## Interview question

What is hoisting in JavaScript?

## Short answer

Hoisting is the behavior by which variable and function declarations are conceptually "moved" to the top of their scope before the code runs. Function declarations and `var` are hoisted, but `var` is initialized to `undefined`, while `let` and `const` remain in the Temporal Dead Zone.

## Simple explanation

Before running your code, JavaScript "registers" the declarations. This creates the illusion that it moves them to the top.

- **`function name() {}`**: hoisted completely. You can call it before you write it.
- **`var x`**: the declaration is hoisted, but not the assignment. That's why it holds `undefined` until the line that gives it a value runs.
- **`let` and `const`**: also registered, but you can't use them before declaring them. They're in the Temporal Dead Zone, and it throws an error.

## Code example

```javascript
// Function declarations: they can be used beforehand
greet(); // "Hello" — works
function greet() {
  console.log("Hello");
}

// var: the declaration is hoisted, not the value
console.log(x); // undefined (no error, but it's not 5 yet)
var x = 5;
console.log(x); // 5

// let/const: error if used beforehand (Temporal Dead Zone)
// console.log(y); // ReferenceError
let y = 10;

// A function expression with var does NOT behave like a declaration
// myFunction(); // TypeError: myFunction is not a function
var myFunction = function () {
  console.log("expression");
};
```

## Common mistake

Believing that "hoisting physically moves the code to the top." It doesn't move anything: JavaScript just registers the declarations in memory before executing. Another mistake is thinking that function expressions (`var f = function(){}`) behave like function declarations: they don't; only the `var` variable is hoisted (as `undefined`).

## How to answer it in an interview

> "Hoisting is when JavaScript registers declarations before running the code, giving the impression that it lifts them to the top. Function declarations are hoisted completely, so I can call them before I write them. With `var`, the declaration is hoisted but not the value, which is why it holds `undefined` if I use it beforehand. With `let` and `const`, if I use them before declaring them, I get an error because of the Temporal Dead Zone."

## Quick challenge

What does this print?

```javascript
console.log(a);
console.log(b);
var a = 1;
function b() {}
```

<details>
<summary>See answer</summary>

It prints `undefined` and then `[Function: b]`. The `var a` declaration is hoisted but not its value (hence `undefined`). The function `b` is hoisted completely, so it already exists.
</details>
