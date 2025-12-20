// FOR LOOP – BASIC TO LOGIC 

// 16. Print numbers from 1 to 10.

// let array = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 17. Print numbers from 10 to 1. 

// for (let i = 10; i >=1; i--) {
//     console.log(i);
// }

// 18. Print all even numbers from 1 to 50.  

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 19. Print all odd numbers from 1 to 50. 

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

// 20. Find the sum of first N natural numbers. 

// let N = 10;
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   sum += i;
// }
// console.log("Sum:", sum);

// 21. Print the multiplication table of a given number. 

// let table = "10";
// for (let i = 1; i <= 10; i++) {
//     console.log(`${table} * ${i} = ${table * i}`);
// }

// 22. Count how many numbers between 1–100 are divisible by 3. 

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// 23. Find the factorial of a number.

// let n = 5;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log("Factorial:", factorial);

// 24. Reverse a number using a loop. 

// let number = 1234;
// let reverse = 0;

// while (number > 0) {
//   reverse = reverse * 10 + (number % 10);
//   number = Math.floor(number / 10);
// }
// console.log("Reversed Number:", reverse);

// 25. Count the number of digits in a number.

// let digitNum = 98765;
// let digits = 0;

// while (digitNum > 0) {
//   digits++;
//   digitNum = Math.floor(digitNum / 10);
// }
// console.log("Number of digits:", digits);