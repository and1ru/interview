# Type coercion

## Interview question

What is type coercion in JavaScript, and when does it happen?

## Short answer

Coercion is the automatic conversion of one data type to another that JavaScript performs. It happens mainly with the `+` operator (which favors strings), with `==` comparisons, and in contexts that expect a boolean (`if`, `!`, etc.).

## Simple explanation

JavaScript sometimes converts types on its own. There are two kinds:

- **Implicit coercion**: JavaScript does it automatically. For example, `"5" + 1` gives `"51"` because it converts the number to a string.
- **Explicit coercion**: you do it on purpose, with `Number(...)`, `String(...)`, `Boolean(...)`.

Key cases:

- `+` with a string converts everything to a string and concatenates.
- The other math operators (`-`, `*`, `/`) convert to a number.
- In an `if`, values are converted to a boolean. The **falsy** values are: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else is **truthy**.

## Code example

```javascript
// + with a string concatenates
console.log("5" + 1);   // "51"  (1 becomes "1")
console.log(1 + "5");   // "15"

// other operators convert to a number
console.log("5" - 1);   // 4   ("5" becomes 5)
console.log("5" * 2);   // 10
console.log("abc" - 1); // NaN (can't be converted)

// coercion to boolean (falsy values)
if (!"") console.log("empty string is falsy");
if (!0) console.log("zero is falsy");
if (!null) console.log("null is falsy");

// explicit coercion (recommended when you want control)
console.log(Number("42"));   // 42
console.log(String(42));     // "42"
console.log(Boolean(""));    // false
```

## Common mistake

Getting confused about how `+` behaves. Many juniors expect `"5" + 1` to be `6`, but it's `"51"` because `+` with a string concatenates instead of adding. On the other hand, `"5" - 1` does give `4`.

## How to answer it in an interview

> "Coercion is when JavaScript automatically converts one type into another. The most famous case is the `+` operator: if one of the operands is a string, it converts everything to a string and concatenates, which is why `'5' + 1` is `'51'`. The other math operators convert to a number. There's also coercion to boolean in `if` statements, where the falsy values are `false`, `0`, `''`, `null`, `undefined`, and `NaN`. To avoid surprises, I prefer doing explicit conversions with `Number()` or `String()`."

## Quick challenge

What does this print?

```javascript
console.log(true + 1);
console.log("10" - "4");
console.log([] + []);
```

<details>
<summary>See answer</summary>

`2` (`true` is converted to `1`), `6` (both strings are converted to numbers), and `""` (two empty arrays are converted to empty strings and concatenated).
</details>
