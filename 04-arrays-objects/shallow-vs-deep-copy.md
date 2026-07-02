# Shallow copy vs Deep copy

## Interview question

What's the difference between a shallow copy and a deep copy?

## Short answer

A shallow copy only copies the top level; nested objects or arrays still share the same reference. A deep copy copies everything, including the nested levels, creating fully independent objects.

## Simple explanation

When you copy an object with spread (`{...obj}`) or `Object.assign`, you get a **shallow copy**: the top-level properties are new, but if there's another object or array inside, that one stays the same (they share a reference). Changing the nested object in the copy also affects the original.

A **deep copy** clones everything, all the way down, so the original and the copy are completely separate.

Ways to make a deep copy:

- `structuredClone(obj)` — the modern, recommended approach.
- `JSON.parse(JSON.stringify(obj))` — works, but it loses functions and `undefined`, turns dates into strings, and so on.

## Code example

```javascript
// Shallow copy: the nested level is shared
const original = {
  name: "Mike",
  address: { city: "Mexico City" },
};

const shallow = { ...original };
shallow.name = "Someone";            // only affects the copy
shallow.address.city = "Puebla";     // affects BOTH

console.log(original.name);          // "Mike" (independent)
console.log(original.address.city);  // "Puebla" (the reference was shared)

// Deep copy with structuredClone
const original2 = { address: { city: "Mexico City" } };
const deep = structuredClone(original2);
deep.address.city = "Monterrey";

console.log(original2.address.city); // "Mexico City" (untouched)
console.log(deep.address.city);      // "Monterrey"
```

## Common mistake

Thinking that `{...obj}` or `Object.assign` make a full copy. They only copy the top level. If the object has nested data, modifying it in the "copy" also changes the original, which leads to bugs that are very hard to track down.

## How to answer it in an interview

> "A shallow copy, like the one I make with the spread operator, only copies the top level; nested objects or arrays still point to the same reference, so modifying them affects the original. A deep copy clones everything all the way down and leaves the objects completely independent. For a deep copy I use `structuredClone`, which is the modern approach; before, people used `JSON.parse(JSON.stringify())`, but that loses functions and turns dates into strings."

## Quick challenge

What does this print?

```javascript
const a = { list: [1, 2] };
const b = { ...a };
b.list.push(3);
console.log(a.list);
```

<details>
<summary>See answer</summary>

It prints `[1, 2, 3]`. Spread makes a shallow copy, so `a.list` and `b.list` are the same array. Calling `push` on `b.list` also changes `a`'s.
</details>
