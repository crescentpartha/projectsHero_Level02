/* 4.3 Inheritance */

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep only for ${hours} hours`;
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}
const student1 = new Student("Mr. X", 25, "Sylhet");
console.log(student1.name, student1.age, student1.address); // Mr. X 25 Sylhet
console.log(student1.makeSleep(8)); // This Mr. X will sleep only for 8 hours


class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClasses(numOfClass: number): string {
        return `This ${this.name} will take ${numOfClass} class`;
    }
}
const teacher1 = new Teacher("Mr. X", 35, "Sylhet", "Lecturer");
console.log(teacher1.name, teacher1.age, teacher1.address, teacher1.designation); // Mr. X 35 Sylhet Lecturer
console.log(teacher1.makeSleep(8)); // This Mr. X will sleep only for 8 hours
console.log(teacher1.takeClasses(4)); // This Mr. X will take 4 class



