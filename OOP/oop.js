// 1. Inheritance = Reusing properties & methods from another class

// Type 01: Single Inheritance
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log("Hello " + this.name);
//   }
// }

// class Student extends Person {
//   constructor(name, grade) {
//     super(name);
//     this.grade = grade;
//   }
// }

// const s = new Student("Ali", "A");
// s.greet(); // Hello Ali

// TYPE 2: Multilevel Inheritance

// class Person {
//   speak() {
//     console.log("I can speak");
//   }
// }

// class Student extends Person {
//   study() {
//     console.log("I study");
//   }
// }

// class Monitor extends Student {
//   lead() {
//     console.log("I lead the class");
//   }
// }

// const m = new Monitor();
// m.speak();
// m.study();
// m.lead();

// TYPE 3: Hierarchical Inheritance

// class Person {
//   role() {
//     console.log("I am a person");
//   }
// }

// class Teacher extends Person {}
// class Student extends Person {}

// new Teacher().role();
// new Student().role();

// TYPE 4: Multiple Inheritance

// const canWalk = {
//   walk() {
//     console.log("Walking");
//   }
// };

// const canTalk = {
//   talk() {
//     console.log("Talking");
//   }
// };

// class Human {}
// Object.assign(Human.prototype, canWalk, canTalk);

// const h = new Human();
// h.walk();
// h.talk();

// POLYMORPHISM: Same method name, different behavior

// TYPE 1: Method Overriding

// class Animal {
//   sound() {
//     console.log("Animal sound");
//   }
// }

// class Dog extends Animal {
//   sound() {
//     console.log("Bark");
//   }
// }

// class Cat extends Animal {
//   sound() {
//     console.log("Meow");
//   }
// }

// const animals = [new Dog(), new Cat()];

// animals.forEach(a => a.sound());

// TYPE 2: Method Overloading

// class Calculator {
//   add(a, b, c) {
//     if (c !== undefined) {
//       return a + b + c;
//     }
//     return a + b;
//   }
// }

// const calc = new Calculator();
// console.log(calc.add(2, 3));      // 5
// console.log(calc.add(2, 3, 4));   // 9

// ENCAPSULATION: Encapsulation = Hiding data + controlling access

// TYPE public

// class User {
//   name = "Ali";
// }

// const u = new User();
// console.log(u.name);

// TYPE private

// class BankAccount {
//   #balance = 0; // private

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const acc = new BankAccount();
// acc.deposit(1000);
// console.log(acc.getBalance());

// TYPE 3: Encapsulation using Getter & Setter

// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value === "") {
//       console.log("Invalid name");
//     } else {
//       this._name = value;
//     }
//   }
// }

// const u = new User("Ali");
// u.name = "Sara";
// console.log(u.name);

// ABSTRACTION: Abstraction = Hiding implementation details

// class Employee {
//   #salary = 50000;

//   getSalary() {
//     return this.#salary;
//   }
// }

// const e = new Employee();
// console.log(e.getSalary());

