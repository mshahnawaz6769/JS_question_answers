// SYMBOL & BIGINT – ADVANCED THINKING 

// 24. What problem does Symbol solve in JavaScript? 
// Ans: Symbol solves the problem of property name collisions in objects.
// Each Symbol is unique, even if created with the same description, which makes it ideal for:
// Creating unique object keys
// Avoiding accidental overwriting of properties
// Implementing private-like properties

// 25. Predict the output: 
// Symbol('id') === Symbol('id'); // false
// Every Symbol() call creates a new, unique value, regardless of the description.

// 26. Why can’t Symbol be implicitly converted to string? 
// Ans: Symbol cannot be implicitly converted to a string to prevent accidental misuse, such as:
// Losing its uniqueness
// Unintended concatenation
// Silent bugs in object keys
// String(Symbol('id')) 

// 27. What problem does BigInt solve? 
// Ans: BigInt solves the problem of precision loss with very large integers.

// 28. Predict the output: 
// console.log(10n + 20n); // 30n
// console.log(10n + 20); // They gives false
// console.log(10n + BigInt(20)); //30n