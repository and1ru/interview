// What does this code print?
// Concepts: var inside setTimeout, closures, scope.
// Predict the output BEFORE running it.

// Block 1: var in the loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}

// Block 2: let in the loop
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0);
}
