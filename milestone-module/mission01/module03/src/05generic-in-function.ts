/* 3.5 Generic in Function */

// Normal Arrow Function
// const createArray1 = (param: string): string[] => {
//     return [param];
// };
// const result1 = createArray1('Bangladesh');

/* ------------------------------------------ */

// Generic Arrow Function
// const createArray2 = <T>(param: T): T[] => {
//     return [param];
// };
// const result2 = createArray2<string>('Bangladesh');
// const result3 = createArray2<boolean>(true);
// const result4 = createArray2<object>({ name: "Bangladesh" }); // don't declare object in this way
// const result5 = createArray2<{ name: string }>({ name: "Bangladesh" });

// type Name = { name: string };
// const result6 = createArray2<Name>({ name: "Bangladesh" });

/* ------------------------------------------ */

// (More than one) Generic Arrow Function
// const createArray2 = <X,Y>(param1: X, param2: Y): [X,Y] => {
//     return [param1, param2];
// };
// const result1 = createArray2<string, string>('Bangladesh', 'I love my country');
// const result3 = createArray2<boolean, [string]>(true, ["USA"]);
// const result2 = createArray2<boolean, Array<string>>(true, ["USA"]);
// const result4 = createArray2<object, boolean>({ name: "Bangladesh" }, true); // don't declare object in this way
// const result5 = createArray2<{ name: string }, boolean>({ name: "Bangladesh" }, true);

// type Name = { name: string };
// const result6 = createArray2<Name, unknown>({ name: "Bangladesh" }, null);

/* ------------------------------------------ */

// // Spread Operator

// const crush = "Tailor Swift";
// const myInfo = {
//     name: "Crescent",
//     age: 25,
//     salary: 10000000,
// };
// const newData = {...myInfo, crush};

// // Spread Operator in Arrow Function
// const addMeInMyCrushMind = (myInfo: object) => {
//     const crush = "Tailor Swift";
//     const newData = {...myInfo, crush}; // Spread Operator doesn't apply 
//     /* 
//         Only crush data found in newData because typescript defined type before compile the code.
//         In this situation, we can infer/guess type by using generic
//     */
//     return newData;
// }
// const result = addMeInMyCrushMind(myInfo);
// // result. // only crush data found | myInfo data not found

/* ------------------------------------------ */

// // Spread Operator

// const crush = "Tailor Swift";
// const myInfo = {
//     name: "Crescent",
//     age: 25,
//     salary: 10000000,
// };
// const newData = {...myInfo, crush};

// // Generic in Arrow Function
// const addMeInMyCrushMind = <T>(myInfo: T) => {
//     const crush = "Tailor Swift";
//     const newData = {...myInfo, crush}; // Spread Operator applied after using generic
//     return newData;
// }
// const result = addMeInMyCrushMind(myInfo);
// // result. // found all data

/* ------------------------------------------ */

// Generic in Normal Function

function createArray<X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2];
};
const result = createArray("Crescent", "Tailor Swift");
console.log(result); // [ 'Crescent', 'Tailor Swift' ]
