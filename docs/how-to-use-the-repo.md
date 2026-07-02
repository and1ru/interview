# How to use the repo

This guide explains how to get the most out of **JS Interview Lab by DevByMike**.

## 1. Install Node.js

You'll need Node.js version 18 or higher. Download it from [nodejs.org](https://nodejs.org/).

Check that it's installed:

```bash
node --version
```

## 2. Clone the repository

```bash
git clone https://github.com/DevByMike/devbymike-js-interview-lab.git
cd devbymike-js-interview-lab
```

## 3. Understand the structure

```
01-fundamentals/     Types, var/let/const, equality, coercion
02-scope-hoisting/   Scope, hoisting, TDZ, closures
03-functions/        Functions, arrow, this, pure functions
04-arrays-objects/   map/filter/reduce, destructuring, copies
05-async/            Promises, async/await, event loop
06-code-challenges/  Problems to solve
07-output-questions/ What does this code print?
08-mock-interviews/  Interview simulations
docs/                Guides and study path
```

## 4. How to study each topic

Every theory `.md` file always follows the same structure:

- **Interview question**: read it and cover up the rest.
- **Short answer**: the idea in one or two sentences.
- **Simple explanation**: the concept explained calmly.
- **Code example**: copy it, run it, tweak it.
- **Common mistake**: what usually trips up a junior.
- **How to answer it in an interview**: a script ready to adapt.
- **Quick challenge**: practice before moving on to the next topic.

The recommended approach:

1. Read the **question**.
2. Answer it **out loud** yourself.
3. Compare with the **short answer** and the **explanation**.
4. Run the **code example**.
5. Solve the **quick challenge**.

## 5. Run the code

Run any file directly:

```bash
node 06-code-challenges/palindrome.js
node 07-output-questions/output-003.js
```

Or use the scripts in `package.json`:

```bash
npm run start:challenge
npm run output:001
```

## 6. Do the mock interviews

Once you've finished the topics, head to `08-mock-interviews/`. Do them with a timer and out loud, as if they were real.

## 7. Repeat

Almost no one answers everything correctly the first time. Review what you got wrong. The second pass is where you really learn.
