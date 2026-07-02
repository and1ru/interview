// What does this code print?
// Concepts: arrays and references, objects and mutability, copy by reference.
// Predict the output BEFORE running it.

// Block 1: arrays and references
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);
console.log(a === b);

// Block 2: objects and mutability with const
const user = { name: "Mike" };
user.name = "Miguel";
console.log(user.name);

// Block 3: shallow copy with spread
const original = { data: { value: 1 } };
const copy = { ...original };
copy.data.value = 99;
console.log(original.data.value);

// Block 4: primitives are copied by value
let x = 10;
let y = x;
y = 20;
console.log(x);
