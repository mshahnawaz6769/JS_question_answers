// Question: A student has marks in 5 subjects:
// Math = 78, Science = 85, English = 69, History = 74, Computer = 90
// Calculate total marks
// Calculate percentage
// Decide grade:
// ≥ 90 → A
// ≥ 75 → B
// ≥ 60 → C
// Else → Fail



// let math = 78, science = 85, english = 69, history = 74, computer = 90;

// let totalMarks = 500;
// let obtainMarks = math + science + english + history + computer;
// let percentage = (obtainMarks / totalMarks) * 100;

// let gradeSystem = 
//     percentage >= 90 ? "A" :
//     percentage >= 75 ? "B" :
//     percentage >= 60 ? "C" :
//     "Fail";

// console.log(`You got ${obtainMarks} out of ${totalMarks}
// Your percentage is ${percentage.toFixed(2)}%
// Your grade is ${gradeSystem}`);

// document.write(`You got ${obtainMarks} out of ${totalMarks}
// Your percentage is ${percentage.toFixed(2)}%
// Your grade is ${gradeSystem}`);

// document.write(obtainMarks + "<br>", percentage + "%", gradeSystem);


// Question: Given two numbers a = 10, b = 5 and operator "*", perform calculation.

// let a = 10, b = 5;
// let operator = "*";
// let calcualtion = 
//     operator === "+" ? a + b :
//     operator === "-" ? a - b :
//     operator === '*' ? a * b :
//     operator === '/' ? a / b :
//     "There have nothing operator";

// console.log(calcualtion);


// Question: A student passes if:
// Attendance ≥ 75%
// Marks ≥ 40
// Attendance = 80, Marks = 35
// Is the student pass or fail?

// let attendance = 80 , marks = 35;
// let passStudentFind = 
//     attendance >= 75 && marks >= 35 ? "Pass" : "fail";
// console.log(passStudentFind); 


// Question: If total bill ≥ 5000 → 10% discount
// Add 18% tax after discount
// Bill amount = 6000

// let billAmount = 6000;
// let discount = 
//     billAmount >= 5000 ? billAmount * 0.10 : 0;

// let discountedPrice = billAmount - discount;
// let tax = discountedPrice * 0.18;
// let finalAmount = discountedPrice + tax;
// console.log(finalAmount);


// Question: Correct credentials:
// username = "admin"
// password = "1234"
// Input:
// username = "admin"
// password = "123"

// let username = "admin", password = "1234";
// let credentials = 
//     username === "admin" && password === "1234" ? "You are Login In" : "Oops some thing error";
// console.log(credentials);


// Qeustion: Units consumed = 250
// First 100 units → Rs.5/unit
// Next units → Rs.8/unit

// let units = 250;
// let bill =
//   units <= 100
//     ? units * 5
//     : 100 * 5 + (units - 100) * 8;
// console.log(bill);


// Question: Age = 17
// Check eligibility using logical & unary operators.

// let age = 17;
// let canVote = age >= 18;
// console.log(!!canVote ? "Eligible" : "Not Eligible");


// Question: If experience ≥ 5 years → 20% hike
// Else → 10% hike
// Salary = 40,000, experience = 6

// let salary = 40000;
// let experience = 6;

// let hike = experience >= 5 ? salary * 0.20 : salary * 0.10;
// let newSalary = salary + hike;

// console.log(newSalary);


// Question: Check if number = 13 is even or odd.

// let number = 13;
// let funcionFind = 
//     number % 2 === 0 ? "This is Even function" : "This is Odd function";

// console.log(funcionFind);


// Question: Employee rating based on score:
// ≥ 90 → Excellent
// ≥ 70 → Good
// ≥ 50 → Average
// Else → Poor
// Score = 72

// let score = 72;
// let employeeRating = 
//     score >= 90 ? "Excellent":
//     score >= 70 ? "Good":
//     score >= 50 ? "Average":
//     "Poor";

// console.log(employeeRating);