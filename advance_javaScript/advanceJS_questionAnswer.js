// ADVANCED JAVASCRIPT — COMPLETE ANSWERS

// EXECUTION CONTEXT & CALL STACK

// 1️⃣ What is Global Execution Context? What are its phases?

// Answer:
// The Global Execution Context (GEC) is the default environment where JavaScript code starts execution.
// It has two phases:
// 1. Memory Creation Phase
// Variables → `undefined`
// Functions → stored fully in memory
// 2. Execution Phase
// Values assigned
// Code executed line by line

// Daily life example:
// Opening a notebook (memory) → then writing inside it (execution)

// 2️⃣ What is Function Execution Context?

// Answer:
// Created each time a function is called.
// It has:
// * Local variables
// * Arguments
// * `this` keyword

// 📌 Each function call gets its **own private workspace**.

// ---

// ### 3️⃣ How many execution contexts can exist at one time?

// **Answer:**
// Only **one runs at a time**, but **multiple can exist** in the Call Stack.

// ---

// ### 4️⃣ What is the Call Stack?

// **Answer:**
// A **stack data structure** that manages execution contexts.

// 📌 **LIFO** → Last In, First Out

// **Daily life:** Stack of plates 🍽️

// ---

// ### 5️⃣ Predict execution order

// ```js
// function a(){ b(); }
// function b(){ c(); }
// function c(){ console.log("Hello"); }
// a();
// ```

// **Answer:**
// Output:

// ```
// Hello
// ```

// **Order in Call Stack:**

// ```
// Global → a() → b() → c()
// ```

// ---

// ### 6️⃣ What happens after a function finishes?

// **Answer:**
// Its execution context is **removed (popped)** from the call stack.

// ---

// ### 7️⃣ Predict output

// ```js
// console.log(x);
// var x = 10;
// ```

// **Answer:**

// ```
// undefined
// ```

// ✔ Due to **hoisting of `var`**

// ---

// ### 8️⃣ Why single call stack?

// **Answer:**
// JavaScript is **single-threaded** → prevents race conditions and complexity.

// ---

// ## 🟡 HOISTING

// ### 9️⃣ Variable hoisting with `var`

// **Answer:**
// `var` declarations are hoisted and initialized as `undefined`.

// ---

// ### 🔟 Hoisting of `let` and `const`

// **Answer:**
// They are hoisted but stay in **Temporal Dead Zone (TDZ)** until initialized.

// ---

// ### 1️⃣1️⃣ Predict output

// ```js
// console.log(a);
// let a = 5;
// ```

// **Answer:**
// ❌ ReferenceError (TDZ)

// ---

// ### 1️⃣2️⃣ Predict output

// ```js
// foo();
// function foo(){ console.log("Hi"); }
// ```

// **Answer:**

// ```
// Hi
// ```

// ✔ Function declarations are fully hoisted

// ---

// ### 1️⃣3️⃣ Predict output

// ```js
// bar();
// var bar = function(){ console.log("Hello"); }
// ```

// **Answer:**
// ❌ TypeError (`bar` is undefined at call time)

// ---

// ### 1️⃣4️⃣ Why function expressions not hoisted?

// **Answer:**
// Because only the **variable name** is hoisted, not the function value.

// ---

// ### 1️⃣5️⃣ What is TDZ?

// **Answer:**
// Time between declaration and initialization where `let/const` cannot be accessed.

// ---

// ## 🟠 CLOSURES

// ### 1️⃣6️⃣ What is a closure?

// **Answer:**
// A function that **remembers variables from its outer scope** even after execution.

// ---

// ### 1️⃣7️⃣ Predict output

// ```js
// fn(); fn();
// ```

// **Answer:**

// ```
// 1
// 2
// ```

// ✔ `count` is preserved via closure

// ---

// ### 1️⃣8️⃣ Why closures cause memory leaks?

// **Answer:**
// They keep references alive even when not needed.

// ---

// ### 1️⃣9️⃣ Real-world use

// **Answer:**

// * Login systems
// * Counters
// * Private variables
// * Event handlers

// ---

// ### 2️⃣0️⃣ Data hiding with closures

// **Answer:**
// Variables inside closure cannot be accessed directly from outside.

// ---

// ### 2️⃣1️⃣ Predict output

// ```js
// for(var i=0;i<3;i++){
//   setTimeout(()=>console.log(i),1000);
// }
// ```

// **Answer:**

// ```
// 3
// 3
// 3
// ```

// ✔ `var` is function-scoped

// ---

// ### 2️⃣2️⃣ Fix using closure

// **Answer:**
// Use `let` or IIFE to create separate scope.

// ---

// ## 🔵 `this` KEYWORD

// ### 2️⃣3️⃣ Global context

// **Answer:**
// Browser → `window`

// ---

// ### 2️⃣4️⃣ Predict

// ```js
// console.log(this);
// ```

// **Answer:**
// `window`

// ---

// ### 2️⃣5️⃣ Predict

// ```js
// function show(){ console.log(this); }
// show();
// ```

// **Answer:**
// `window` (non-strict mode)

// ---

// ### 2️⃣6️⃣ Predict

// ```js
// obj.getName();
// ```

// **Answer:**

// ```
// JS
// ```

// ✔ `this` refers to `obj`

// ---

// ### 2️⃣7️⃣ Arrow function output

// **Answer:**

// ```
// undefined
// ```

// Arrow functions don’t have their own `this`.

// ---

// ### 2️⃣8️⃣ Why arrow functions behave differently?

// **Answer:**
// They **lexically bind `this`** from outer scope.

// ---

// ### 2️⃣9️⃣ call vs apply vs bind

// | Method | Description                    |
// | ------ | ------------------------------ |
// | call   | Immediate, arguments separated |
// | apply  | Immediate, arguments array     |
// | bind   | Returns new function           |

// ---

// ### 3️⃣0️⃣ Predict

// ```js
// greet.call(user, "Hello ");
// ```

// **Answer:**

// ```
// Hello Alex
// ```

// ---

// ## 🟣 PROTOTYPES & INHERITANCE

// ### 3️⃣1️⃣ What is prototype?

// **Answer:**
// An object from which other objects inherit properties.

// ---

// ### 3️⃣2️⃣ Prototype chain?

// **Answer:**
// JavaScript searches properties upward through linked prototypes.

// ---

// ### 3️⃣3️⃣ Predict output

// **Answer:**

// ```
// John
// ```

// ---

// ### 3️⃣4️⃣ Inheritance without classes

// **Answer:**
// Using **constructor functions + prototypes**

// ---

// ### 3️⃣5️⃣ `__proto__` vs `prototype`

// * `prototype` → property of constructor
// * `__proto__` → internal reference of object

// ---

// ### 3️⃣6️⃣ Property not found?

// **Answer:**
// JS looks up the prototype chain → returns `undefined` if not found.

// ---

// ## 🔴 ES6+ FEATURES

// ### 3️⃣7️⃣ Spread example

// ```js
// let b = [...a];
// ```

// ---

// ### 3️⃣8️⃣ Predict

// ```js
// [1,2,3]
// ```

// ---

// ### 3️⃣9️⃣ Enhanced Object Literals

// **Answer:**
// Shorthand property & method syntax.

// ---

// ### 4️⃣0️⃣ Optional chaining output

// **Answer:**

// ```
// undefined
// ```

// (No error)

// ---

// ### 4️⃣1️⃣ Optional chaining use

// **Answer:**
// Safely access nested properties.

// ---

// ### 4️⃣2️⃣ Predict

// ```js
// 0
// ```

// ---

// ### 4️⃣3️⃣ `||` vs `??`

// * `||` → falsy values
// * `??` → only null or undefined

// ---

// ### 4️⃣4️⃣ ES6 modules solve?

// **Answer:**
// Avoid global pollution, improve maintainability.

// ---

// ## ⚫ ERROR HANDLING

// ### 4️⃣5️⃣ try...catch scenario

// **Answer:**
// API calls, JSON parsing, user input validation.

// ---

// ### 4️⃣6️⃣ Predict output

// ```
// Something went wrong
// ```

// ---

// ### 4️⃣7️⃣ Purpose of finally

// **Answer:**
// Cleanup code — runs always.

// ---

// ### 4️⃣8️⃣ finally without catch?

// **Answer:**
// ✔ Yes

// ---

// ### 4️⃣9️⃣ Custom error

// ```js
// throw new Error("Invalid input");
// ```

// ---

// ### 5️⃣0️⃣ Why error handling important?

// **Answer:**

// * Prevent crashes
// * Better UX
// * Easier debugging
// * Production stability
