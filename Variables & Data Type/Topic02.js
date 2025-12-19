// var / let / const – OUTPUT & LOGIC QUESTIONS 

// 6. Predict the output: 
// console.log(a); 
// var a = 10; // undefined

// 7. Predict the output: 
// console.log(b); 
// let b = 20; // undefined error

// 8. Predict the output: 
// var x = 1; 
// var x = 2; 
// console.log(x); // ans is 2

// 9. Predict the output: 
// let y = 5; 
// let y = 10; // nothing have output

// 10. Predict the output: 
// const z = 100; 
// z = 200; // error because we have not contain multiple data container in const

// 11. What is Temporal Dead Zone (TDZ) and why does it exist? 
// Ans: Temporal Dead Zone (TDZ) is the time between the start of a block and the point where a variable declared with `let` or `const` is initialized. During this period, accessing the variable causes a ReferenceError.
// It exists to prevent accessing variables before they are declared and initialized, helping catch bugs and making variable behavior more predictable compared to `var`, which gets hoisted and initialized as `undefined`.
