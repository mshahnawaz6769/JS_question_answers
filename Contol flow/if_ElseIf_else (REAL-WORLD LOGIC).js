// IF / ELSE / ELSE IF (REAL-WORLD LOGIC) 

// 1. Write a program to check whether a number is positive, negative, or zero.

// let number = Number(prompt("Enter Your Number"));
// if(number > 0) {
//     console.log(`The number ${number} is Positive.`);
// } else if(number < 0) {
//     console.log(`The number ${number} is Negative.`);
// } else {
//     console.log(`This number ${number} is exact zero.`);
// }

// 2. Given marks of a student, decide Pass or Fail (pass if marks ≥ 40). 

// let student = prompt("Enter Your marks");
// if(student >= 40) {
//     console.log(`Congratulations, you get ${student} out of 100 and you have passed the Exam.`);
// } else {
//     console.log(`Sorry, you get ${student} out of 100 and you have fail the Exam.`); 
// }

// 3. Write logic to check whether a number is even or odd.

// let numberCheck = prompt("Enter the Number");
// if (numberCheck % 2 === 0) {
//     console.log(`This number ${numberCheck} is Enen function`);
// } else {
//     console.log(`This number ${numberCheck} is Odd function`);
// }

// 4. Given age, classify as Child, Teen, Adult, Senior. 

// let age = prompt("Enter Your age");
// if(age > 0 && age < 13) {
//     console.log("Child");
// } else if (age >= 13 && age < 20) {
//     console.log("Teen");
// } else if (age >= 20 && age < 59) {
//     console.log("Adult")
// } else if (age >= 59 && age < 120) {
//     console.log("Senior");
// } else {
//     console.log("Enter Your correct age");
// }

// 5. Write a program to find the largest of two numbers. 

// let number01 = prompt("Enter First Number");
// let number02 = prompt("Enter Second Number");

// if(number01 > number02) {
//     console.log(`${number01} > ${number02}`);
// } else if (number01 < number02) {
//     console.log(`${number01} < ${number02}`);
// } else {
//     console.log(`${number01} = ${number02}, Both are Equal`);
// }

// 6. Write a program to find the largest of three numbers using else if. 
// Solve This by Your Concept

// 7. Check whether a year is a leap year.

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }
// let year = 2024;
// console.log(isLeapYear(year));

// 8. Given temperature, decide Cold, Warm, or Hot. 

// let temperature = 24;
// if (temperature < 18) {
//     console.log("cold");
// } else if (temperature >= 18 && temperature < 25) {
//     console.log("warm");
// } else {
//     console.log("Hot");
// }

// 9. Check whether a character is a vowel or consonant.

// let character = "s";
// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//     console.log(`This ${character} is vowel character`);
// } else {
//     console.log(`This ${character} is consonant character`);   
// }

// 10. Given salary, calculate bonus: 
// • Salary ≥ 50,000 → 20% 
// • Salary ≥ 30,000 → 10% 
// • Else → 5%

// let salary = 60000;
// if (salary >= 50000) {
//     salaryBonus = salary * 0.2;
//     totalSalary = salary + salaryBonus;
//     console.log(totalSalary);
// } else if (salary >= 30000) {
//     salaryBonus = salary * 0.1;
//     totalSalary = salary + salaryBonus;
//     console.log(totalSalary);
// } else {
//     salaryBonus = salary * 0.05;
//     totalSalary = salary + salaryBonus;
//     console.log(totalSalary);
// }