/* 3.4 Generic in Interface */

/* System of using Interface | Example-01 */

// // Generic (Tuple - type alias)
// type GenericTuples<X, Y> = [X, Y];

// // create variable
// const relations: GenericTuples<string, string> = ['Persian', 'Kate Winslet'];

// // Generic (type alias) | We can use interface instead of type alias because interface used in object type data
// // type RelationWithSalaryTypes = { name: string, salary: number };

// // Generic (interface) | System of using Interface
// interface RelationWithSalaryInterface {
//     name: string;
//     salary: number
// }

// // Good Practice
// const relationsWithSalary: GenericTuples<RelationWithSalaryInterface, string> = [
//     {
//         name: "Persian",
//         salary: 1000000000,
//     },
//     "Kate Winslet",
// ];

// // Good Practice
// const relationsWithSalary2: GenericTuples<RelationWithSalaryInterface, string> = [
//     {
//         name: "Persian",
//         salary: 1000000000,
//     },
//     "Kate Winslet",
// ];

/* 
    - For object type data --> use type alias or interface
    - For primitive type data --> use only type alias
*/

/* ------------------------------------------------------ */

/* Use Generic Interface */

// // Generic Interface
// interface CrushInterface<T> {
//     name: string;
//     husband: T
// }

// const crush1: CrushInterface<boolean> = { name: 'Kate Winslet', husband: true };

// const crush2: CrushInterface<string> = {
//     name: "Kate Winslet",
//     husband: "Persian",
// };

// // directly use <object> type never preferable because object could have different properties. (Bad Practice) (Create Bug)
// const cursh3: CrushInterface<object> = {
//     name: "Kate Winslet",
//     husband: {
//         name: "Persian",
//         salary: 100000000,
//     },
// };

// // explicitly mention type when you use object (Good Practice)
// const cursh4: CrushInterface<{name: string; salary: number}> = {
//     name: "Kate Winslet",
//     husband: {
//         name: "Persian",
//         salary: 100000000,
//     },
// };

// // best Practice
// interface HusbandInterface {
//     name: string;
//     salary: number;
// }

// const cursh5: CrushInterface<HusbandInterface> = {
//     name: "Kate Winslet",
//     husband: {
//         name: "Persian",
//         salary: 100000000,
//     },
// };

/* ---------------------------------------------------------- */

/* Use (more than one) Generic Interface */

// Generic Interface
// interface CrushInterface<T, U> {
//     name: string;
//     husband: T;
//     wife?: U; // optional type
// }

// const crush1: CrushInterface<boolean, undefined> = { name: 'Kate Winslet', husband: true };

// const crush2: CrushInterface<string, null> = {
//     name: "Kate Winslet",
//     husband: "Persian",
// };

/* ---------------------------------------------------------- */

/* Use (more than one) Generic Interface using Default Parameter */

// Generic Interface
// interface CrushInterface<T, U = null> {
//     name: string;
//     husband: T;
//     wife?: U; // optional type
// }

// const crush1: CrushInterface<boolean, string> = { 
//     name: 'Kate Winslet', 
//     husband: true,
//     wife: "Chokina",
// };

// const crush2: CrushInterface<string> = {
//     name: "Kate Winslet",
//     husband: "Persian",
// };

/* ---------------------------------------------------------- */

/* Use (more than one) Generic Interface using Default Parameter for (object) */

// Generic Interface
interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U; // optional type
}

// use interface for object
const crush1: CrushInterface<object, object> = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};

// use interface for object | Good Practice
const crush2: CrushInterface<
    { name: string; age: number },
    { name: string; age: number }
> = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};

// use interface for object | Best Practice

interface PersonInterface {
    name: string;
    age: number;
}

const crush3: CrushInterface<PersonInterface, PersonInterface> = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};

/* 
    Summary: Code will be Organized and Clean

    - We can use Generic Type, Generic Interface 
    - Declare multiple generic type inside the Interface like <T, U> = <husband, wife>
    - For type, we can use Default type or parameter
*/
