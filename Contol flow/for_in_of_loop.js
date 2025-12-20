// FOR…IN & FOR…OF QUESTIONS 

// 31. Iterate over an object and print keys and values using for...in.

// let obj = {
//     name : "shahnawaz",
//     age : "18",
//     city : "karachi"
// };

// for (const key in obj) {  
//     console.log(obj[key]);
// }

// 32. Iterate over an array and print all elements using for...of. 

// let arr = [10, 20, 30, 40];
// for (let value of arr) {
//     console.log(value);
// }

// 33. Find the sum of array elements using for...of. 

// let numbers = [5, 10, 15];
// let sum = 0;

// for (let num of numbers) {
//     sum += num;
// }
// console.log(sum); // 30


// 34. Count how many properties exist in an object. 

// let obj = {
//     name: "Alex",
//     age: 18,
//     city: "London"
// };
// let count = 0;
// for (let key in obj) {
//     count++;
// }
// console.log(count); // 3

// 35. Explain why for...in should not be used for arrays.

// Array.prototype.extra = "test";

// let arr = [1, 2, 3];
// for (let i in arr) {
//     console.log(i); // 0, 1, 2, extra
// }

