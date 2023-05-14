"use strict";
/*
    Problem 4: Person vs Student Class

    Create a TypeScript class called Person that has private properties name and age, and a public method getDetails
    that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

    Create a TypeScript class called Student that extends the Person class and has an additional private property grade.
    Define a public method getGrade that returns the student's grade.
    Use the super keyword to call the constructor of the Person class and initialize the name and age properties.
*/
class Person {
    // parameter properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // method
    getDetails() {
        return `${this.name} is ${this.age} years old.`;
    }
}
class Student extends Person {
    // parameter properties
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    // method
    getGrade() {
        return this.grade;
    }
}
// create an instance (object)
const student = new Student('Taylor Swift', 35, 3.81);
const person = new Person('Taylor Lautner', 40);
// output
console.log(student.getDetails()); // Taylor Swift is 35 years old.
console.log(student.getGrade()); // 3.81
console.log(person.getDetails()); // Taylor Lautner is 40 years old.
