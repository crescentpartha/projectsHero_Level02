"use strict";
/* 4.3 Inheritance */
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep only for ${hours} hours`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student("Mr. X", 25, "Sylhet");
console.log(student1.name, student1.age, student1.address); // Mr. X 25 Sylhet
console.log(student1.makeSleep(8)); // This Mr. X will sleep only for 8 hours
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numOfClass) {
        return `This ${this.name} will take ${numOfClass} class`;
    }
}
const teacher1 = new Teacher("Mr. X", 35, "Sylhet", "Lecturer");
console.log(teacher1.name, teacher1.age, teacher1.address, teacher1.designation); // Mr. X 35 Sylhet Lecturer
console.log(teacher1.makeSleep(8)); // This Mr. X will sleep only for 8 hours
console.log(teacher1.takeClasses(4)); // This Mr. X will take 4 class
