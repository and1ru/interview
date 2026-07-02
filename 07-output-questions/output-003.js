// What does this code print?
// Concepts: hoisting of var and functions.
// Predict the output BEFORE running it.

console.log(message);

var message = "hello";

console.log(message);

greet();

function greet() {
  console.log("Greetings!");
}
