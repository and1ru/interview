# this

## Interview question

What is `this` in JavaScript, and how is its value determined?

## Short answer

`this` is a reference to the execution context. Its value doesn't depend on where the function is defined, but on **how it's called**. Arrow functions are the exception: they inherit `this` from the scope where they're created.

## Simple explanation

The value of `this` changes depending on how you call the function:

1. **Method of an object** (`obj.method()`): `this` is the object (`obj`).
2. **Standalone function** (`function()`): `this` is `undefined` in strict mode, or the global object otherwise.
3. **With `new`**: `this` is the new object being created.
4. **With `call`, `apply`, or `bind`**: `this` is whatever you specify.
5. **Arrow function**: has no `this` of its own; it uses the one from the scope where it was defined.

The key: look at *how the function is invoked*, not where it's written.

## Code example

```javascript
// 1. Method of an object
const user = {
  name: "Mike",
  greet() {
    console.log(this.name);
  },
};
user.greet(); // "Mike" (this is user)

// 2. The same function, but "standalone", loses this
const standalone = user.greet;
// standalone(); // undefined (this is no longer user)

// 3. bind pins this
const bound = user.greet.bind(user);
bound(); // "Mike"

// 4. An arrow inherits this from the scope
const team = {
  name: "DevByMike",
  members: ["Ana", "Luis"],
  list() {
    this.members.forEach((m) => {
      // the arrow uses the this of list, which is team
      console.log(`${m} belongs to ${this.name}`);
    });
  },
};
team.list();
// "Ana belongs to DevByMike"
// "Luis belongs to DevByMike"
```

## Common mistake

Assuming `this` depends on where the function was written. In reality it depends on how it's called. That's why when you store a method in a variable and call it standalone (`const f = obj.method; f();`), `this` stops being the object.

## How to answer it in an interview

> "`this` is a reference to the execution context, and the important thing is that its value depends on how the function is called, not where it's defined. If I call a method with `obj.method()`, `this` is `obj`. If I call the function standalone, `this` is undefined in strict mode. With `new` it's the new object, and with `call`, `apply`, or `bind` I decide what it is. Arrow functions are the exception: they inherit `this` from the scope where I wrote them."

## Quick challenge

What does this print?

```javascript
const counter = {
  total: 0,
  increment() {
    this.total++;
  },
};
const inc = counter.increment;
inc();
console.log(counter.total);
```

<details>
<summary>See answer</summary>

It prints `0` (and in strict mode it probably throws an error). By storing the method in `inc` and calling it standalone, `this` is no longer `counter`, so it doesn't increment `counter.total`.
</details>
