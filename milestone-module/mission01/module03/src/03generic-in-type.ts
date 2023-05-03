/* 3.3 Introduction of Generic in Type */

/* Array Declaration in 2 ways */

// way-01 | array declaration
const classRollNumbers: number[] = [44, 23, 12, 4];
const classRollNumbers2: string[] = ["44", "23", "12", "4"];

// way-02 | array declaration
const classRollNumbers3: Array<number> = [44, 23, 12, 4];
const classRollNumbers4: Array<string> = ["44", "23", "12", "4"];
const classRollNumbers5: Array<boolean> = [true, false];

// object declaration
const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
    {
        name: "Mr. X",
        roll: 1,
    },
    {
        name: "Mr. Y",
        roll: 2,
    },
];

/* ------------------------------------------------------------- */

/* Type Alias */

// type alias
type GenericArray = Array<number>;
type GenericArray1 = Array<string>;
type GenericArray2 = Array<boolean>;

// way-02 | array declaration
const classRollNumbers6: GenericArray = [44, 23, 12, 4];
const classRollNumbers7: GenericArray1 = ["44", "23", "12", "4"];
const classRollNumbers8: GenericArray2 = [true, false];

/* ------------------------------------------------------------ */

/* Generic in Type */

/* 
    - write in a general way is called Generic
    - We need to create generic in this way that consider any types.

    add(x,y) // (function) parameters x and y
    add(3,4) // (invoke function) pass arguments x and y
*/

// Generic (type alias)
type GenericArray3<T> = Array<T>; // 1st <T> acts like a parameter

// way-02 | array declaration
const classRollNumbers9: GenericArray3<number> = [44, 23, 12, 4];
const classRollNumbers10: GenericArray3<string> = ["44", "23", "12", "4"];
const classRollNumbers11: GenericArray3<boolean> = [true, false];

const userNameAndRollNumbers2: GenericArray3<{ name: string; roll: number }> = [
    {
        name: "Mr. X",
        roll: 1,
    },
    {
        name: "Mr. Y",
        roll: 2,
    },
];


/* ------------------------------------------------------------ */

/* Generic in Type */

// Generic (type alias)
type GenericArray4<T> = Array<T>; 

// way-02 | array declaration
const classRollNumbers12: GenericArray4<number> = [44, 23, 12, 4];
const classRollNumbers13: GenericArray4<string> = ["44", "23", "12", "4"];
const classRollNumbers14: GenericArray4<boolean> = [true, false];

// Generic (Type Alias)
type NameRollType = { name: string; roll: number };

const userNameAndRollNumbers1: GenericArray4<NameRollType> = [
    {
        name: "Mr. X",
        roll: 1,
    },
    {
        name: "Mr. Y",
        roll: 2,
    },
];

/* ------------------------------------------------------------ */

/* Generic in Type */

/* 
    We can add more parameter using Tuples like
    add(x, y, z)
    add(2, 3, 4)
*/

// Generic (Tuple - type alias)
type GenericTuple2<X, Y> = [X, Y];

const relation2: GenericTuple2<string, string> = ['Persian', 'Kate Winslet'];

// // But it isn't best practice because object would have different properties
const relationWithSalary3: GenericTuple2<object, string> = [
    {
        name: "Persian",
        salary: 1000000000, 
    },
    "Kate Winslet",
];

// Bed practice (using Object)
const relationWithSalary4: GenericTuple2<object, string> = [
    {
        age: 25, // we use age property instead of name, so this isn't valid object
        salary: 1000000000, 
    },
    "Kate Winslet",
];

/* ------------------------------------------------------------ */

/* Generic in Type */

/* 
    We can add more parameter using Tuples like
    add(x, y, z)
    add(2, 3, 4)
*/

// Generic (Tuple - type alias)
type GenericTuple<X, Y> = [X, Y];

// create variable
const relation: GenericTuple<string, string> = ['Persian', 'Kate Winslet'];

// Generic (type alias)
type RelationWithSalaryType = { name: string, salary: number };

// Good Practice
const relationWithSalary: GenericTuple<RelationWithSalaryType, string> = [
    {
        name: "Persian",
        salary: 1000000000,
    },
    "Kate Winslet",
];

// Good Practice
const relationWithSalary2: GenericTuple<RelationWithSalaryType, string> = [
    {
        name: "Persian",
        salary: 1000000000,
    },
    "Kate Winslet",
];



