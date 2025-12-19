//  PRIMITIVE DATA TYPES – THINKING QUESTIONS 

// 12. List all primitive data types in JavaScript. 
// Ans: boolean, string, number, integer, undefined, null, symbol, bigint

// 13. Why are primitive data types called immutable?
// Ans:  Primitive data types are called immutable because their values cannot be changed directly in memory.
// When you modify a primitive value, JavaScript creates a new value instead of changing the original one.
 
// 14. Predict the output: 
// let a = 10; 
// let b = a; 
// b = 20; 
// console.log(a); // ans is 10

// 15. What is the difference between undefined and null? 
// Ans:
// | undefined                                        | null                                     |
// | ------------------------------------------------ | ---------------------------------------- |
// | Automatically assigned by JavaScript             | Assigned intentionally by the programmer |
// | Means a variable is declared but not initialized | Means no value / empty value             |
// | Type is `undefined`                              | Type is `object` (historical bug)        |


// 16. Predict the output: 
// typeof undefined; // undefined
// typeof null; // object

// 17. Why does typeof null return object? 
// Ans: This is a known bug in JavaScript from its early versions.
// For backward compatibility, it was never fixed.
// Logically, null is a primitive, but typeof null incorrectly returns "object".

// 18. Predict the output: 
// console.log(null == undefined); // ture
// console.log(null === undefined); // false
// console.log(null === 0); // false
