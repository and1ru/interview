// What does this code print, and in what order?
// Concepts: Promises vs setTimeout, event loop, microtasks vs macrotasks.
// Predict the output BEFORE running it.

console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
