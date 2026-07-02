# map, filter, and reduce

## Interview question

What's the difference between `map`, `filter`, and `reduce`?

## Short answer

`map` transforms every element and returns an array of the same length. `filter` returns an array containing only the elements that meet a condition. `reduce` combines all elements into a single value. All three return something new and never mutate the original array.

## Simple explanation

- **`map`**: applies a function to each element and returns a new array with the results. Same number of elements.
- **`filter`**: tests each element against a condition and returns a new array with only the ones that return `true`.
- **`reduce`**: walks through the array accumulating a result. Useful for summing, counting, grouping, and so on. Returns a single value.

None of them mutate the original array: all three return something new.

## Code example

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: transforms (doubles each number)
const doubles = numbers.map((n) => n * 2);
console.log(doubles); // [2, 4, 6, 8, 10]

// filter: filters (only the even ones)
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce: combines (sums everything)
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// The original array never changed
console.log(numbers); // [1, 2, 3, 4, 5]

// They can be chained
const sumOfDoubledEvens = numbers
  .filter((n) => n % 2 === 0) // [2, 4]
  .map((n) => n * 2)          // [4, 8]
  .reduce((acc, n) => acc + n, 0); // 12
console.log(sumOfDoubledEvens); // 12
```

## Common mistake

- Forgetting the **initial value** in `reduce` (the second argument, `0` in the example). Without it, the behavior changes and it can throw errors on empty arrays.
- Using `map` when you don't actually need the resulting array (`forEach` is the better choice there).
- Forgetting the `return` when the callback uses braces: `map(n => { n * 2 })` returns `undefined` because the `return` is missing.

## How to answer it in an interview

> "`map` transforms each element and returns an array of the same size. `filter` returns only the elements that meet a condition. `reduce` walks through the array accumulating a value until it produces a single result, like a sum or a count. All three are immutable: they don't modify the original array, they return a new one, and they can be chained. With `reduce` I always remember to provide the accumulator's initial value."

## Quick challenge

Given `["hello", "world", "js"]`, use `reduce` to get the total number of characters across all the words combined.

<details>
<summary>See solution</summary>

```javascript
const words = ["hello", "world", "js"];
const totalChars = words.reduce((acc, word) => acc + word.length, 0);
console.log(totalChars); // 12
```
</details>
