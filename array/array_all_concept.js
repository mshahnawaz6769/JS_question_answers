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

// 4. Predict the output: 
// let arr = [1, 2, 3]; 
// console.log(arr.length); 

// 5. Can arrays in JavaScript be resized dynamically? Explain. 

// 6. How do you check if a variable is an array? 

// 7. Predict the output: 
// let a = []; 
// a[3] = 10; 
// console.log(a.length); 

// 8. What happens if you access an index that does not exist? 

// ITERATING ARRAYS (for, forEach, map) 

// 9. Print all elements of an array using for loop. 

// 10. Print only even numbers from an array using for loop. 

// 11. Print sum of all array elements using loop. 

// 12. Use forEach to print each element with its index. 

// 13. Can forEach be stopped using break? Why? 

// 14. Convert all numbers of array into their squares using map. 

// 15. What is the difference between map and forEach? 

// 16. Predict the output: 
// let arr = [1,2,3]; 
// let res = arr.map(x => x * 2); 
// console.log(res); 

// 17. Predict the output:  
// let arr = [1,2,3]; 
// let res = arr.forEach(x => x * 2); 
// console.log(res); 

// 18. When should you prefer map over for loop? 
 
// ADD / REMOVE ELEMENTS 

// 19. Add an element at the end of array. 

// 20. Remove last element from array. 

// 21. Add an element at the beginning of array. 

// 22. Remove first element from array. 

// 23. Predict the output: 
// let arr = [10,20,30]; 
// arr.push(40); 
// arr.pop(); 
// console.log(arr); 

// 24. Predict the output: 
// let arr = [1,2,3]; 
// arr.unshift(0); 
// arr.shift(); 
// console.log(arr); 
 
// MAP, FILTER, REDUCE (IMPORTANT) 

// 25. Use filter to get all numbers greater than 50. 

// 26. Use filter to get only even numbers. 

// 27. Use map to convert prices into discounted prices. 

// 28. Use reduce to find sum of all numbers. 

// 29. Use reduce to find maximum number. 

// 30. Predict the output: 
// let arr = [1,2,3,4]; 
// let result = arr.reduce((acc, cur) => acc + cur, 0); 
// console.log(result); 

// 31. What happens if initial value is not passed to reduce? 
 
// 32. Explain a real-world use case of reduce. 
 
// SEARCHING IN ARRAYS 

// 33. Use find to get first number greater than 10. 

// 34. Use findIndex to get index of first negative number. 

// 35. What is the difference between find and filter? 

// 36. Predict the output: 
// let arr = [5, 12, 8, 130]; 
// console.log(arr.find(x => x > 10)); 

// 37. Check if array contains value 100. 

// 38. Find index of value 25 in array. 

// 39. What is returned if value is not found using indexOf? 
 

// SOME, EVERY, INCLUDES 

// 40. Use some to check if any number is even. 

// 41. Use every to check if all numbers are positive. 

// 42. Predict the output: 
// let arr = [2,4,6]; 
// console.log(arr.every(x => x % 2 === 0)); 

// 43. Difference between some and every. 

// 44. Difference between includes and indexOf. 
 
// SLICE vs SPLICE (TRICKY) 

// 45. Extract first 3 elements using slice. 

// 46. Remove 2 elements starting from index 1 using splice. 

// 47. Predict the output: 
// let arr = [1,2,3,4]; 
// let newArr = arr.slice(1,3); 
// console.log(arr, newArr); 

// 48. Predict the output: 
// let arr = [1,2,3,4]; 
// arr.splice(1,2); 
// console.log(arr); 

// 49. What is the key difference between slice and splice? 
 
// ARRAY DESTRUCTURING 

// 50. Destructure first two elements from an array.