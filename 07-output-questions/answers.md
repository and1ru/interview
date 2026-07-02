# Answers to the output questions

Here are the expected answers, with an explanation and the concept each one tests. Remember: try to predict before reading.

---

## output-001.js

**Expected output:**

```
object
true
false
true
false
true
false
```

**Explanation:**

- `typeof null` returns `"object"`. This is a historical bug in JavaScript that's kept for backward compatibility.
- `1 == "1"` is `true`: with `==` there's coercion, so the string `"1"` is converted to a number.
- `1 === "1"` is `false`: with `===` there's no conversion and the types (number vs string) are different.
- `0 == false` is `true`: `false` is coerced to `0`.
- `0 === false` is `false`: different types (number vs boolean), no conversion.
- `null == undefined` is `true`: this is a special case defined in the language.
- `null === undefined` is `false`: they are different types.

**Concept it tests:** `typeof null`, the difference between `==` and `===`, type coercion.

---

## output-002.js

**Expected output:**

```
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

**Explanation:**

With `var`, the variable `i` has function scope, so the three `setTimeout` callbacks all share **the same** `i`. The callbacks run after the loop finishes, when `i` is already `3`, which is why they print `3` three times.

With `let`, each iteration creates a **new** variable `j` with its own value. Each callback remembers its own copy (thanks to the closure), so it prints `0`, `1`, and `2`.

Note: the three `var` lines come out first and then the three `let` lines, because the first loop's `setTimeout` calls are scheduled first.

**Concept it tests:** scope of `var` vs `let`, closures, `setTimeout` behavior in loops.

---

## output-003.js

**Expected output:**

```
undefined
hello
Greetings!
```

**Explanation:**

- The first `console.log(message)` prints `undefined`. Because of hoisting, the `var message` declaration is lifted to the top, but its value (`"hello"`) is not. So the variable exists but doesn't have a value yet.
- The second `console.log(message)` prints `"hello"`, because the assignment has already run.
- `greet()` works even though it's called before its definition: function declarations are hoisted in full, along with their body.

**Concept it tests:** hoisting of `var` (the declaration is hoisted, not the value) and hoisting of functions (they are hoisted in full).

---

## output-004.js

**Expected output:**

```
start
end
promise
setTimeout
```

**Explanation:**

1. `"start"` and `"end"` are synchronous code, so they run first and in order.
2. When the call stack is empty, the event loop processes the **microtasks**. The promise (`.then`) is a microtask, so `"promise"` comes next.
3. Finally, the **macrotasks** are processed. The `setTimeout` callback is a macrotask, so `"setTimeout"` comes out last, even though the delay is `0`.

The key rule: promises (microtasks) take priority over `setTimeout` (macrotasks).

**Concept it tests:** event loop, the difference between microtasks (promises) and macrotasks (`setTimeout`).

---

## output-005.js

**Expected output:**

```
[ 1, 2, 3, 4 ]
true
Miguel
99
10
```

**Explanation:**

- **Block 1:** `b = a` doesn't copy the array, it copies the **reference**. `a` and `b` point to the same array, so `b.push(4)` also modifies `a`. And `a === b` is `true` because they are the same object in memory.
- **Block 2:** `const` prevents reassigning the variable, but it does **not** make the object immutable. Changing a property (`user.name`) is valid, which is why it prints `"Miguel"`.
- **Block 3:** the spread (`{...original}`) makes a **shallow** copy. The nested object `data` still shares its reference, so modifying `copy.data.value` also changes `original.data.value`, which prints `99`.
- **Block 4:** primitives are copied **by value**. `y = x` creates an independent copy; changing `y` doesn't affect `x`, which stays `10`.

**Concept it tests:** copy by reference vs by value, mutability of objects with `const`, shallow copy with spread.
