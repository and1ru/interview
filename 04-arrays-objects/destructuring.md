# Destructuring

## Interview question

What is destructuring and how do you use it with arrays and objects?

## Short answer

Destructuring is a syntax for extracting values from arrays or objects and assigning them to variables in a single line. With arrays it's based on position; with objects, on the property name.

## Simple explanation

Instead of accessing values one by one, destructuring lets you "unpack" several at once.

- **With arrays**: you extract by position.
- **With objects**: you extract by property name.

You can also set **default values** (used when the value doesn't exist) and **rename** variables when unpacking objects.

## Code example

```javascript
// Array destructuring (by position)
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // "red"
console.log(second); // "green"

// Skip positions with a comma
const [, , third] = colors;
console.log(third); // "blue"

// Object destructuring (by name)
const user = { name: "Mike", age: 30 };
const { name, age } = user;
console.log(name, age); // "Mike" 30

// Default values
const { active = true } = user;
console.log(active); // true (didn't exist, uses the default)

// Rename variables
const { name: userName } = user;
console.log(userName); // "Mike"

// Very handy in function parameters
function greet({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
greet(user); // "Mike is 30 years old"
```

## Common mistake

- Mixing up what matters: with arrays the position matters, with objects the exact property name matters.
- Trying to destructure from `null` or `undefined`, which throws an error. For example, `const { x } = null` throws.

## How to answer it in an interview

> "Destructuring lets me pull values out of arrays or objects in a single line. With arrays I extract by position, and with objects by property name. I can also set default values and rename variables. I use it a lot in function parameters to cleanly accept an options object instead of accessing each property separately."

## Quick challenge

Using destructuring, swap the values of two variables `a = 1` and `b = 2` without using a temporary variable.

<details>
<summary>See solution</summary>

```javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```
</details>
