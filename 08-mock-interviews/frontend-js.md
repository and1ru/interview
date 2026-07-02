# Mock interview — Frontend (JavaScript)

A mock interview focused on JavaScript applied to the **frontend**. It centers on how the language behaves in the browser: events, the DOM, asynchrony in requests, and performance. Suggested duration: 45 minutes.

Note: even though the focus is frontend, no frameworks are asked about here. What's being evaluated is your command of JavaScript, which is what every framework rests on.

---

## Question 1: What is event bubbling, and how would you take advantage of it?

**What the interviewer wants to hear:**
- That an event propagates from the element where it happens up to its ancestors.
- The concept of event delegation as a way to take advantage of it.

**Red flags:**
- Confusing bubbling with capturing without being able to explain them.
- Not knowing what `event.target` is for.

**Suggested answer:**
> "Event bubbling is when an event, like a click, fires on an element and then propagates up through its parent elements. I take advantage of it with event delegation: instead of putting a listener on every button in a list, I put a single one on the container and use `event.target` to know which one was clicked. It's more efficient and it even works with elements added later."

**Practical exercise:**
Describe (or write) how you would put a single listener on a `<ul>` to detect clicks on any of its `<li>` items.

<details>
<summary>See solution</summary>

```javascript
const list = document.querySelector("ul");
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});
```
</details>

---

## Question 2: How would you make a request to an API and handle the result and the errors?

**What the interviewer wants to hear:**
- Using `fetch` with `async/await`.
- Handling errors with `try/catch` and checking `response.ok`.

**Red flags:**
- Not handling errors.
- Thinking that `fetch` automatically rejects on an HTTP error like a 404 (it doesn't).

**Suggested answer:**
> "I'd use `fetch` with `async/await` inside a `try/catch`. One important detail is that `fetch` doesn't throw an error on a 404 or a 500; it only rejects if the network fails. That's why I check `response.ok` manually and throw the error myself if it's not okay."

**Practical exercise:**
Write an `async` function that requests data from a URL, checks the response, and handles errors.

<details>
<summary>See solution</summary>

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error.message);
    return null;
  }
}
```
</details>

---

## Question 3: What is debounce, and why is it useful in frontend?

**What the interviewer wants to hear:**
- That debounce delays running a function until some time passes without it being called again.
- Use cases: search-as-you-type, scroll or resize events.

**Red flags:**
- Confusing debounce with throttle without distinguishing them.
- Not connecting it to performance.

**Suggested answer:**
> "Debounce prevents a function from running too many times in a row. It waits until some time passes with no new calls before running. I use it, for example, in a search box: instead of making a request on every keystroke, I wait for the user to stop typing. It's different from throttle, which limits the frequency but does run at a fixed interval."

**Practical exercise:**
Implement a `debounce(fn, ms)` function using closures and `setTimeout`.

<details>
<summary>See solution</summary>

```javascript
function debounce(fn, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}
```
</details>

---

## Question 4: What does this code print, and how does it relate to rendering?

```javascript
console.log("1: script");
setTimeout(() => console.log("2: timeout"), 0);
Promise.resolve().then(() => console.log("3: promise"));
console.log("4: script");
```

**What the interviewer wants to hear:**
- The output: `1, 4, 3, 2`.
- That you understand microtasks (promises) run before macrotasks, which is key when updating the UI.

**Red flags:**
- Not knowing the order.
- Not connecting the event loop to how the browser processes tasks.

**Suggested answer:**
> "It prints `1: script`, `4: script`, `3: promise`, and then `2: timeout`. First the synchronous code, then microtasks like the promise, and finally macrotasks like the `setTimeout`. This matters in frontend because the browser processes microtasks before repainting, so understanding the order helps you reason about when a change is reflected in the UI."

**Practical exercise:**
Explain why many consecutive DOM updates can be batched, and what that means for performance.

---

## Question 5: You have a list of products and you want to show only the ones in stock, sorted by price. How would you do it?

**What the interviewer wants to hear:**
- Chaining `filter` and `sort`.
- Being careful that `sort` mutates the original array.

**Red flags:**
- Using manual loops when array methods are clearer.
- Not knowing that `sort` without a comparison function sorts as strings.

**Suggested answer and solution:**
> "I filter by stock and then sort by price with `sort`, passing it a comparison function. I'm careful because `sort` mutates the array, so I work on a copy if the original matters."

```javascript
function availableProducts(products) {
  return [...products]
    .filter((p) => p.stock > 0)
    .sort((a, b) => a.price - b.price);
}
```

**Practical exercise:**
Extend the function so that it returns only the name and price of each product.

---

## Wrapping up

In frontend, they value your ability to connect JavaScript to the browser: events, the DOM, requests, and performance. Practice explaining not just *how* something works, but *what impact* it has on the user experience.
