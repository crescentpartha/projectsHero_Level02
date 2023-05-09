"use strict";
/* 4.8 Polymorphism */
/*
    - Poly --> many & morphism --> form
    - Polymorphism is the ability to create a class that has more than one form.
    - In other words, classes have the same methods but different implementations.
*/
class Person {
    takeNap() {
        console.log(`I am sleeping 8 hours per day`);
    }
}
class Student1 extends Person {
    // test() {
    //     this.
    // }
    takeNap() {
        console.log(`I am sleeping 10 hours per day`);
    }
}
class Developer extends Person {
    takeNap() {
        console.log(`I am sleeping 5 hours per day`);
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person();
const person2 = new Student1();
const person3 = new Developer();
getNap(person1); // I am sleeping 8 hours per day
getNap(person2); // I am sleeping 10 hours per day
getNap(person3); // I am sleeping 5 hours per day
// method same but give different output (many form --> polymorphism)
/* ------------------------------------------- */
/* Polymorphism */
class Shape {
    getArea() {
        return 0;
    }
}
// area --> pi * r * r
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10)); // 314.1592653589793
getAreaOfShape(new Rectangle(10, 12)); // 120
