// ARRAY CREATION & BASICS 

// 1. Create an array of 5 student names. 

// let arr = ["shahnawaz", "arfa", "zoha", "alqama", "mariya"];
// console.log(arr); // [ 'shahnawaz', 'arfa', 'zoha', 'alqama', 'mariya' ]

// console.log(arr.length); // 5

// console.log(arr[1]); // arfa

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 2. Create an array containing mixed data types. 

// var arr = ["shahnawaz", 19, true, NaN];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 3. What is the difference between [] and new Array()? 

// [] → preferred, simple, predictable
// new Array(5) → creates empty array with length 5 (confusing)
// Always use []

// 4. Predict the output: 
// let arr = [1, 2, 3]; 
// console.log(arr.length); // 3

// 5. Can arrays in JavaScript be resized dynamically? Explain. 

// Yes. JS arrays grow/shrink automatically when you add or remove elements.

// 6. How do you check if a variable is an array? 

// var arr = [1,2];
// console.log(
// Array.isArray(arr)
// );

// 7. Predict the output: 
// let a = []; 
// a[3] = 10; 
// console.log(a.length); // 4

// 8. What happens if you access an index that does not exist? 

// arr[10] // undefined

// ITERATING ARRAYS (for, forEach, map) 

// 9. Print all elements of an array using for loop. 

// var arr = [1,2,3,4];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 10. Print only even numbers from an array using for loop. 

// let arr = [1,2,3,4,5,6];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) console.log(arr[i]);
// }

// 11. Print sum of all array elements using loop. 

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// 12. Use forEach to print each element with its index. 

// arr.forEach((value, index) => {
//   console.log(index, value);
// });

// 13. Can forEach be stopped using break? Why? 

// No. forEach does not support break or return because it always loops through all elements.

// 14. Convert all numbers of array into their squares using map. 

// let squares = arr.map(x => x * x);

// 15. What is the difference between map and forEach? 

// map → returns a new array
// forEach → returns undefined

// 16. Predict the output: 
// let arr = [1,2,3]; 
// let res = arr.map(x => x * 2); 
// console.log(res); 

// [2, 4, 6]

// 17. Predict the output:  
// let arr = [1,2,3]; 
// let res = arr.forEach(x => x * 2); 
// console.log(res); 

// undefined

// 18. When should you prefer map over for loop? 

// When you want to transform data and get a new array.

// ADD / REMOVE ELEMENTS 

// let arr = [1,2,3];

// 19. Add an element at the end of array. 

// arr.push(10); // add number in end side
// console.log(arr);

// 20. Remove last element from array. 

// arr.pop(3); // remove one number in end side
// console.log(arr);

// 21. Add an element at the beginning of array. 

// arr.unshift(0); // add element in the begining
// console.log(arr);

// 22. Remove first element from array. 

// arr.shift(1); // remove eelement in the begining
// console.log(arr);

// 23. Predict the output: 
// let arr = [10,20,30]; 
// arr.push(40); 
// arr.pop(); 
// console.log(arr); // [10,20,30]

// 24. Predict the output: 
// let arr = [1,2,3]; 
// arr.unshift(0); 
// arr.shift(); 
// console.log(arr); // [1,2,3]
 
// MAP, FILTER, REDUCE (IMPORTANT) 

// 25. Use filter to get all numbers greater than 50. 

// arr.filter(x => x > 50);

// 26. Use filter to get only even numbers. 

// arr.filter(x => x % 2 === 0);

// 27. Use map to convert prices into discounted prices. 

// prices.map(p => p * 0.9);

// 28. Use reduce to find sum of all numbers. 

// arr.reduce((acc, cur) => acc + cur, 0);

// 29. Use reduce to find maximum number. 

// arr.reduce((max, cur) => cur > max ? cur : max);

// 30. Predict the output: 
// let arr = [1,2,3,4]; 
// let result = arr.reduce((acc, cur) => acc + cur, 0); 
// console.log(result); // 10 

// 31. What happens if initial value is not passed to reduce? 
 
// First array element becomes the initial accumulator.

// 32. Explain a real-world use case of reduce. 
 
// Calculating total bill, cart price, or average marks.

// SEARCHING IN ARRAYS 

// 33. Use find to get first number greater than 10. 

// arr.find(x => x > 10);

// 34. Use findIndex to get index of first negative number. 

// arr.findIndex(x => x < 0);

// 35. What is the difference between find and filter? 

// find → returns first match
// filter → returns all matches (array)

// 36. Predict the output: 
// let arr = [5, 12, 8, 130]; 
// console.log(arr.find(x => x > 10));  //12

// 37. Check if array contains value 100. 

// arr.includes(100);

// 38. Find index of value 25 in array. 

// arr.indexOf(25);

// 39. What is returned if value is not found using indexOf? 
 
// Returns: -1

// SOME, EVERY, INCLUDES 

// 40. Use some to check if any number is even.

// arr.some(x => x % 2 === 0);

// 41. Use every to check if all numbers are positive. 

// arr.every(x => x > 0);

// 42. Predict the output: 
// let arr = [2,4,6]; 
// console.log(arr.every(x => x % 2 === 0)); // true

// 43. Difference between some and every. 

// some → at least one true
// every → all true

// 44. Difference between includes and indexOf. 

// includes → true/false
// indexOf → index or -1

// SLICE vs SPLICE (TRICKY) 

// 45. Extract first 3 elements using slice. 

// arr.slice(0, 3);

// 46. Remove 2 elements starting from index 1 using splice. 

// arr.splice(1, 2);

// 47. Predict the output: 
// let arr = [1,2,3,4]; 
// let newArr = arr.slice(1,3); 
// console.log(arr, newArr); 

// [1,2,3,4] [2,3]

// 48. Predict the output: 
// let arr = [1,2,3,4]; 
// arr.splice(1,2); 
// console.log(arr); 

// [1, 4]

// 49. What is the key difference between slice and splice? 

// slice → does not change original array
// splice → modifies original array

// ARRAY DESTRUCTURING 

// 50. Destructure first two elements from an array.

// let [a, b] = arr;
