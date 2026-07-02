# Equality: == vs ===

## Interview question

What's the difference between `==` and `===`?

## Short answer

`===` compares value **and** type without converting anything (strict equality). `==` converts the types before comparing (loose equality with coercion). The recommendation is to always use `===`.

## Simple explanation

- **`===` (strict equality)**: only returns `true` if both values are of the same type and have the same value. It does no conversions.
- **`==` (loose equality)**: if the types differ, JavaScript tries to convert them to a common type before comparing. This produces surprising results.

That's why the general recommendation is to use `===`: it's predictable and avoids bugs.

## Code example

```javascript
// === compares value and type
console.log(5 === 5);       // true
console.log(5 === "5");     // false (number vs string)

// == converts types before comparing
console.log(5 == "5");      // true  ("5" is converted to 5)
console.log(0 == false);    // true  (false is converted to 0)
console.log("" == false);   // true  (both are converted to 0)
console.log(null == undefined); // true (special case)

// Cases that trip people up with ==
console.log([] == false);   // true
console.log(" " == 0);      // true (the space is converted to 0)

// With === everything is more predictable
console.log(0 === false);   // false
console.log(null === undefined); // false
```

## Common mistake

Using `==` "because it works" in simple cases and then running into weird bugs like `[] == false` being `true`. The coercion rules for `==` are hard to remember and lead to subtle errors.

## How to answer it in an interview

> "`===` is strict equality: it compares value and type without converting. `==` is loose equality: if the types don't match, JavaScript converts one of them before comparing, which produces unexpected results like `0 == false` being true. I always use `===` because it's predictable; I'd only use `==` intentionally for a specific case, like `value == null` to check for null and undefined at once."

## Quick challenge

Predict each result:

```javascript
console.log(1 == true);
console.log(1 === true);
console.log("0" == 0);
console.log("0" === 0);
```

<details>
<summary>See answer</summary>

`true`, `false`, `true`, `false`. With `==` there's coercion (`true` is converted to `1`, `"0"` to `0`); with `===` the types differ, so it's `false`.
</details>
