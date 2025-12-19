// BASIC UNDERSTANDING QUESTIONS 

// 1. What is a variable in JavaScript, and how is it different from a constant? 
// Ans: A variable in JavaScript is a named container whose value can change during execution (declared with `var` or `let`).
// A constant is a named container whose value cannot be changed once assigned (declared with `const`)

// 2. Why was let and const introduced when var already existed? 
// Ans: let and const were introduced to fix problems with var, mainly its function scope and hoisting behavior. They provide block scope, which is more predictable and helps avoid bugs. const also enforces immutability for variables that shouldn’t change.

// 3. What will happen if you use a variable without declaring it? 
// Ans: Using a variable without declaring it creates a global variable (in non-strict mode), which can lead to bugs and is considered bad practice. In strict mode, it causes a ReferenceError.

// 4. Can a variable declared with const ever change? Explain with reasoning. 
// Ans: A variable declared with const cannot be reassigned to a new value. However, if it holds an object or array, the contents of that object or array can be changed (because only the binding is constant, not the value's internal data).

// 5. Is JavaScript statically typed or dynamically typed? Why? 
// Ans: JavaScript is dynamically typed because variables can hold any type of data and types are checked at runtime, not fixed at compile time.