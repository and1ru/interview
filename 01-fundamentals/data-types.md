# Data types

## Interview question

What are the data types in JavaScript, and how are they categorized?

## Short answer

There are **primitive** types (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) and an **object** type (`object`), which includes arrays, functions, and plain objects. Primitives are copied by value; objects are copied by reference.

## Simple explanation

JavaScript has 7 primitive types:

- **`string`**: text, like `"hello"`.
- **`number`**: numbers, both integers and decimals, like `42` or `3.14`.
- **`boolean`**: `true` or `false`.
- **`undefined`**: a variable that's been declared but has no value assigned.
- **`null`**: intentional absence of a value.
- **`symbol`**: unique identifiers (advanced usage).
- **`bigint`**: very large integers.

Then there's **`object`**, which groups together objects, arrays, and functions.

The key difference: **primitives are copied by value** (each variable gets its own copy), while **objects are copied by reference** (multiple variables can point to the same object).

## Code example

```javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"  (a historical bug in the language)
console.log(typeof Symbol());    // "symbol"
console.log(typeof 10n);         // "bigint"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"  (arrays are objects)
console.log(typeof function(){});// "function"

// Primitive: copied by value
let a = 1;
let b = a;
b = 2;
console.log(a); // 1 (a didn't change)

// Object: copied by reference
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99;
console.log(obj1.x); // 99 (both point to the same object)
```

## Common mistake

Saying that arrays are a distinct type. In reality, `typeof []` returns `"object"`. To check whether something is an array, you use `Array.isArray(value)`. Another classic mistake: forgetting that `typeof null` is `"object"`.

## How to answer it in an interview

> "JavaScript has seven primitive types: string, number, boolean, null, undefined, symbol, and bigint. Everything else is an object, including arrays and functions. The most important thing in practice is that primitives are copied by value and objects by reference, which affects how they behave when you assign them or pass them into functions."

## Quick challenge

What does each line print?

```javascript
console.log(typeof NaN);
console.log(Array.isArray([1, 2, 3]));
```

<details>
<summary>See answer</summary>

`typeof NaN` is `"number"` (NaN stands for "Not a Number," but its type is number). `Array.isArray([1,2,3])` is `true`.
</details>
