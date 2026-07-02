# Function vs Arrow Function

## Interview question

What is the difference between a regular function and an arrow function?

## Short answer

Arrow functions don't have their own `this` (they inherit it from the scope where they're defined), don't have `arguments`, can't be used as constructors, and have shorter syntax. Regular functions do have their own `this` and `arguments`.

## Simple explanation

The main differences:

- **`this`**: the most important one. A regular function defines its own `this` based on how it's called. An arrow function has no `this` of its own: it uses the one from the scope where it was created. That's why arrows are ideal for callbacks inside methods.
- **`arguments`**: regular functions have the `arguments` object; arrows don't.
- **Constructor**: you can do `new Function()` with a regular one, but not with an arrow.
- **Syntax**: arrows are shorter, and with a single return they can omit the braces and `return`.

## Code example

```javascript
// Syntax
const sum = (a, b) => a + b;       // implicit return
const square = n => n * n;         // single parameter, no parentheses
function sumNormal(a, b) { return a + b; }

// The big difference: this
const object = {
  name: "Mike",
  greetNormal: function () {
    setTimeout(function () {
      // here, this is NOT the object (it's undefined or the global one)
      console.log("Normal:", this.name); // undefined
    }, 0);
  },
  greetArrow: function () {
    setTimeout(() => {
      // the arrow inherits the this of greetArrow, which is the object
      console.log("Arrow:", this.name); // "Mike"
    }, 0);
  },
};

object.greetNormal(); // Normal: undefined
object.greetArrow();  // Arrow: Mike
```

## Common mistake

Using an arrow function as an object method expecting `this` to be the object:

```javascript
const obj = {
  name: "Mike",
  greet: () => console.log(this.name), // this is NOT obj
};
obj.greet(); // undefined
```

For object methods, use regular functions; for inner callbacks, use arrow functions.

## How to answer it in an interview

> "The most important difference is `this`. A regular function has its own `this` based on how it's called, while an arrow function inherits `this` from the scope where it's defined. On top of that, arrows don't have `arguments`, can't be used with `new`, and have shorter syntax. That's why I use arrow functions for callbacks, especially inside methods, and regular functions when I need my own `this` or a constructor."

## Quick challenge

What does this print?

```javascript
const person = {
  age: 30,
  grow: () => {
    this.age++;
    return this.age;
  },
};
console.log(person.grow());
```

<details>
<summary>See answer</summary>

It prints `NaN`. Since `grow` is an arrow function, its `this` is not `person`, so `this.age` is `undefined`, and `undefined++` gives `NaN`.
</details>
