// LEVEL 4: ASYNCHRONOUS JAVASCRIPT

// (Questions & Answers – Deep + Understandable)

// ASYNCHRONOUS CONCEPTS

// What is **Synchronous JavaScript**?

// Synchronous code runs line by line, and **each task waits** for the previous one to finish.

// **Daily life example:**
// Standing in a single-line bank queue — next person waits until the first finishes.
// console.log("A");
// console.log("B");
// console.log("C");

// What is **Asynchronous JavaScript**?

// Asynchronous code allows **long-running tasks** to run in the background without blocking main execution.

// **Daily life example:**
// Ordering food → you do other work → food arrives later.

// console.log("A");
// setTimeout(() => console.log("B"), 1000);
// console.log("C");

// Output: // A C B

// Difference: **Blocking vs Non-Blocking**

// | Blocking          | Non-Blocking        |
// | ----------------- | ------------------- |
// | Stops execution   | Continues execution |
// | Poor performance  | Better UX           |
// | Used in sync code | Used in async code  |

// JS is **non-blocking by nature**.

// CALLBACKS

// What is a Callback Function?

// A callback is a **function passed as an argument** to another function and executed later.

// function greet(name, callback) {
//   callback(name);
// }

// greet("Ali", function(name){
//   console.log("Hello " + name);
// });

// Why are callbacks used?

// To handle:

// * Async operations
// * Events
// * API calls
// * Timers

// What is **Callback Hell**?

// Nested callbacks that make code:

// * Hard to read
// * Hard to debug
// * Hard to maintain

// login(user, () => {
//   getData(() => {
//     processData(() => {
//       saveData(() => {
//         console.log("Done");
//       });
//     });
//   });
// });
// ```


// Problems with Callback Hell?

// * Poor readability
// * Error handling issues
// * Difficult debugging
// * No proper flow control


// PROMISES (MOST IMPORTANT)

// What is a Promise?

// A Promise represents a **value that will be available in the future**.

// **Daily life:**
// Food order receipt → food comes later.

// ### 9️⃣ Promise States

// | State     | Meaning       |
// | --------- | ------------- |
// | Pending   | Initial state |
// | Fulfilled | Success       |
// | Rejected  | Failure       |

// Creating a Promise

// const promise = new Promise((resolve, reject) => {
//   let success = true;
//   if(success) resolve("Done");
//   else reject("Error");
// });

// What does `then()` do?

// Handles **successful result** of promise.

// promise.then(result => console.log(result));

// What does `catch()` do?

// Handles **errors / rejection**.

// promise.catch(err => console.log(err));

// What does `finally()` do?

// Runs **always**, whether resolved or rejected.

// Used for cleanup (loader, close connection).

// What is Promise Chaining?

// Using multiple `.then()` to execute async tasks **sequentially**.

// fetchData()
//   .then(processData)
//   .then(saveData)
//   .catch(err => console.log(err));

// PROMISE APIs (VERY IMPORTANT)

// `Promise.all()`

// Runs promises **in parallel**.
// Fails if **any promise fails**.

// Promise.all([p1, p2, p3])

// Use case: Load multiple APIs together.
// `Promise.allSettled()`
// Returns result of **all promises**, even if some fail.

// Use case: Show partial results.

//  `Promise.race()`

// Returns the **first settled promise** (resolve or reject).

// Use case: Timeout handling.

// `Promise.any()`

// Returns the **first successful promise**.
// Ignores rejections unless all fail.

// ASYNC / AWAIT

// What is `async`?
// `async` makes a function **always return a promise**.
// async function fetchData() {
//   return "Data";
// }

// What is `await`?

//  `await` pauses execution **until promise resolves**.

// const data = await fetchData();

//  Makes async code look **synchronous**.
// Sequential vs Parallel Execution
// await task1();
// await task2();

// ➡ Sequential (slow)

// await Promise.all([task1(), task2()]);

// ➡ Parallel (fast)

// Error Handling with async/await
// try {
//   const data = await fetchData();
// } catch(err) {
//   console.log(err);
// }

// ✔ Clean & readable
// EVENT LOOP (CORE CONCEPT)

// What is the Event Loop?
// Event Loop manages execution of:

// * Call Stack
// * Callback Queue
// * Microtask Queue

// What is Call Stack?

// Executes synchronous code **one at a time**.

// What are Web APIs?

// Browser features:

// * setTimeout
// * fetch
// * DOM events

// They handle async tasks.

// Callback Queue (Task Queue)
// Holds:

// * setTimeout callbacks
// * DOM events

// Microtask Queue
// Holds:

// * Promise `.then()`
// * `queueMicrotask`

// Has **higher priority** than callback queue.

// ---

//  Execution Priority Order

// 1. Call Stack
// 2. Microtask Queue
// 3. Callback Queue

// ---

//  Predict Output (IMPORTANT)

// ```js
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");
// ```

// **Answer:**

// ```
// A
// D
// C
// B
// ```
