// PARAMETERS & ARGUMENTS (LOGIC BASED)

// 11. Write a function that takes name and age and prints a message.

// function name(name, age) {
//     console.log(name, age);
// }
// name("shahnawaz", 19);

// 12. Write a function that accepts marks of 3 subjects and returns total.

// function name(sub1, sub2, sub3) {
//     return sub1 + sub2 + sub3;
// }  
// console.log(name(10, 20, 30));

// 13. What is the difference between parameters and arguments? Explain with example.

// function name(name)  // parameters
// {

// }
// name("shahnawaz") // arguments

// 14. Write a function that takes a number and checks positive, negative, or zero.

// function checkNumber(num) {
//     if (num > 0) {
//         console.log(`This ${num} is positive`);
//     } else if (num < 0) {
//         console.log(`This ${num} is negative`);
//     } else {
//         console.log(`This ${num} is neither positive nor negative`);
//     }
// }

// checkNumber(23);


// 15. Write a function that takes length and breadth and returns rectangle area.

// function name(length, breadth) {
//     rectangleArea = length * breadth;
//     return rectangleArea;
// }
// console.log(name(10, 10));

// 16. What happens if fewer arguments are passed than parameters?

// function add(a, b) {
//     console.log(a);
//     console.log(b);
//     return a + b;
// }
// add(5); //5,undefined and nan


// 17. What happens if more arguments are passed than parameters?
// Try on your own self

// 18. Write a function that takes salary and bonus and returns final salary.

// function name(salary, bonus) {
//     if (salary >= 20000) {
//         bonus = salary *= 0.1;
//         finalSalary = salary + bonus;
//         return finalSalary;
//     }
//     else if (salary >= 50000) {
//         bonus = salary *= 0.25;
//         finalSalary = salary + bonus;
//         return finalSalary;
//     }
//     else {
//         bonus = salary *= 0.5;
//         finalSalary = salary + bonus;
//         return finalSalary;
//     }
// }
// name(25000, 20);

// 19. Write a function that takes radius and returns circle area.

// function name(radius) {
//     let area = (3.142) * radius * radius;
//     return area;
// }
// console.log(name(2));

// 20. Write a function that checks whether a year is a leap year.

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }