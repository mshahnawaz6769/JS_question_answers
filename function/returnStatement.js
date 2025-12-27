// RETURN STATEMENT (VERY IMPORTANT)

// 21. Write a function that returns sum of two numbers.

// function name(a,b) {
//     return a + b;
// }
// console.log(name(2, 3));

// 22. What happens if a function has no return statement?

// function demo() {
//   let x = 10;
// }
// console.log(demo()); // undefined

// 23. Predict the output:

// function test() {
//  return;
// }
// console.log(test()); // undefined

// 24. Can a function return multiple values? How?

// function getValues() {
//   return [10, 20];
// }

// function getValues() {
//   return { a: 10, b: 20 };
// }

// 25. Write a function that returns Pass or Fail based on marks.

// function name(marks) {
//     if(marks > 40) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// }
// console.log(name(89));

// 26. What happens to code written after return?

// function demo() {
//   return 5;
//   console.log("Hello"); // never runs
// }

// 27. Write a function that returns true if number is prime, else false.

// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// 28. Write a function that returns the factorial of a number.

// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// factorial();

// 29. Write a function that returns maximum of three numbers.

// function maxOfThree(a, b, c) {
//   return Math.max(a, b, c);
// }
// console.log(maxOfThree(3,6,3));

// 30. Write a function that returns grade based on percentage.

// function name(grade) {
//     if(grade >= 80) {return "A"}
//     else if(grade >= 70) {return "B"}
//     else if(grade >= 60) {return "C"}
//     else if(grade >= 50) {return "D"}
//     else if(grade < 50) {return "Fail"}
//     else {return "Enter valid grade"}
// }
// console.log(name(50));