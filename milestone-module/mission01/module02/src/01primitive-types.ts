// Explicit Type - as we declare type immediately

let course: string = "Next Level Web Development 2.0";

// course = 666; // Type 'number' is not assignable to type 'string'
course = "Apollo Next Level Web Development 2.0";
console.log(course);

let rollNumber: number = 123;
// rollNumber = "One Hundred twenty three"; // Type 'string' is not assignable to type 'number'
rollNumber = 46.123;
rollNumber.toFixed(); // 46
rollNumber.toFixed(2); // 46.12

const isAdmin: boolean = true;

/* -------------------------- */

// Implicit Type - as we don't assign any type | Typescript automatically (implicitly) define the type

let course2 = "Next Level Web Development"; // string type
let rollNumber2 = 123; // number type
const isAdmin2 = true; // boolean type

let course3; // any type | assign any value 

/* Should not declare in this way because we can assign any value of it */
course3 = 333;
course3 = "Next";
course3 = undefined;

// If we don't know the value of any variable. Then we should define the type without value;
let course4: string; // string type
course4 = "Next Level Web Development";
// course4 = 666; // Type 'number' is not assignable to type 'string'

// We also have null & undefined type variable which have some difference

/* Declaration */

let course5: null; // null type
let course6: undefined; // undefined type
// const course6: undefined; // 'const' declarations must be initialized

/* Assignment */

let course7; // any type | assign or reassign any value
const course8 = undefined; // undefined type
let course9 = undefined; // any type | assign or reassign any value
course9 = "Blah Blah";
course9 = true;
