/* 4.8 Polymorphism */

/* 
    - Poly --> many & morphism --> form
    - Polymorphism is the ability to create a class that has more than one form. 
    - In other words, classes have the same methods but different implementations.
*/

class Person {
    takeNap(): void {
        console.log(`I am sleeping 8 hours per day`);
    }
}

class Student1 extends Person {
    // test() {
    //     this.
    // }
    takeNap(): void {
        console.log(`I am sleeping 10 hours per day`);
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log(`I am sleeping 5 hours per day`);
    }
}

function getNap(param: Person) {
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
    getArea(): number {
        return 0;
    }
}

// area --> pi * r * r
class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}

function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10)); // 314.1592653589793
getAreaOfShape(new Rectangle(10, 12)); // 120


