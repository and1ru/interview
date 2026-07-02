# Object methods

## Interview question

How do you iterate over an object's properties, and which methods would you use? Explain `Object.keys`, `Object.values`, and `Object.entries`.

## Short answer

`Object.keys(obj)` returns an array of the keys, `Object.values(obj)` of the values, and `Object.entries(obj)` of `[key, value]` pairs. With these arrays you can use `map`, `filter`, `forEach`, and so on to iterate over objects.

## Simple explanation

Objects don't have `map` or `filter` directly like arrays do. To iterate over them, you first turn them into arrays with:

- **`Object.keys(obj)`**: array of the keys.
- **`Object.values(obj)`**: array of the values.
- **`Object.entries(obj)`**: array of `[key, value]` pairs, ideal for iterating with destructuring.

Other useful methods:

- **`Object.assign(target, source)`**: copies properties (shallow).
- **`Object.freeze(obj)`**: freezes the object so it can't be modified.

## Code example

```javascript
const product = { name: "Laptop", price: 1000, stock: 5 };

// Object.keys: the keys
console.log(Object.keys(product)); // ["name", "price", "stock"]

// Object.values: the values
console.log(Object.values(product)); // ["Laptop", 1000, 5]

// Object.entries: [key, value] pairs
console.log(Object.entries(product));
// [["name", "Laptop"], ["price", 1000], ["stock", 5]]

// Iterate over an object with entries and destructuring
for (const [key, value] of Object.entries(product)) {
  console.log(`${key}: ${value}`);
}
// name: Laptop
// price: 1000
// stock: 5

// Object.freeze: prevents modifications
const config = Object.freeze({ mode: "dark" });
config.mode = "light"; // ignored (or throws in strict mode)
console.log(config.mode); // "dark"
```

## Common mistake

Trying to use `product.map(...)` directly on an object: objects don't have `map`. You first have to convert them with `Object.keys/values/entries`. Another mistake is forgetting that `Object.freeze` is shallow: nested objects can still be modified.

## How to answer it in an interview

> "To iterate over an object I convert it into an array with `Object.keys`, `Object.values`, or `Object.entries`. `entries` is my favorite because it gives me key-value pairs that I can destructure in a `for...of`. Once I have those arrays I can apply `map`, `filter`, or whatever I need. I also know `Object.assign` for merging objects and `Object.freeze` to make them read-only, though the latter is shallow."

## Quick challenge

Given `{ a: 1, b: 2, c: 3 }`, use the object methods to get the sum of all its values.

<details>
<summary>See solution</summary>

```javascript
const obj = { a: 1, b: 2, c: 3 };
const sum = Object.values(obj).reduce((acc, n) => acc + n, 0);
console.log(sum); // 6
```
</details>
