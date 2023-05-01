
/* 2.7 Type alias and optional types */

// const crush1: {
//     name: string,
//     age: number,
//     profession: string,
//     address: string
// } = {
//     name: "Moyna Pakhi",
//     age: 22,
//     profession: "Web Developer",
//     address: "Uganda"
// };

// const crush2: {
//     name: string,
//     age?: number, // Optional type 
//     profession: string,
//     address: string
// } = {
//     name: "Tia Pakhi",
//     profession: "Next Level Web Developer",
//     address: "Mexico"
// };


// Type-Alias: makes more organize and reuseable code
type CrushType = {
    name: string,
    age?: number, // Optional type
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: "Moyna Pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda"
};

const crush2: CrushType = {
    name: "Tia Pakhi",
    profession: "Next Level Web Developer",
    address: "Mexico"
};

// Type Alias not only works for object. It also works for string, array, boolean etc.

/* boolean type Alias */

// const isCrushMarried: boolean = false;

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

/* string type Alias */

type CourseNameType = string;
const courseName: CourseNameType = "Next Level Web Development";

/* function type Alias */

// const calculate = (number1: number, number2: number) => {
//     return number1 + number2;
// };
// calculate(10, 20);

type OperationType = (x: number, y: number) => number;

const calculate = (
    number1: number, // 10
    number2: number, // 20
    // operation: (x: number, y: number) => number
    operation: OperationType // (x, y) => x + y | (10, 20) => 10 + 20
) => {
    return operation(number1, number2);
};
console.log(calculate(10, 20, (x, y) => x + y)); // 30
console.log(calculate(10, 20, (x, y) => x - y)); // -10
console.log(calculate(10, 20, (x, y) => x * y)); // 200
// calculate(10, 20, (x, y) => x + y);

