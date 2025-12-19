// NON-PRIMITIVE DATA TYPES – LOGIC QUESTIONS 

// 29. What is the key difference between primitive and non-primitive data types? 
// Ans:
// | Primitive                         | Non-Primitive                     |
// | --------------------------------- | --------------------------------- |
// | Stored **by value**               | Stored **by reference**           |
// | Immutable                         | Mutable                           |
// | Holds a single value              | Can hold multiple values          |
// | Examples: number, string, boolean | Examples: object, array, function |

// 30. Predict the output: 
// let obj1 = { a: 1 }; 
// let obj2 = obj1; 
// obj2.a = 5; 
// console.log(obj1.a); // 5

// 31. Predict the output: 
// let arr1 = [1, 2, 3]; 
// let arr2 = arr1; 
// arr2.push(4); 
// console.log(arr1); // [1,2,3,4]

// 32. Why are objects and arrays compared by reference and not by value? 
// Ans: Objects and arrays are stored in heap memory, and variables store only their memory address.
// Comparison checks whether both variables refer to the same memory location, not whether their contents are identical.

// 33. Predict the output: 
// console.log([] == []); // false 
// console.log({} == {}); // false