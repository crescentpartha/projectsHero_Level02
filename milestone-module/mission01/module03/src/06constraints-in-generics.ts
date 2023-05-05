/* 3.6 Constraints in Generics */

/* 
    generic constraints in TypeScript to constrain the types in generic functions to specific types.
*/

/* So, if we use generic constraints using <T extends {name: string, age: number, salary: number}>, we must need to pass name, age and salary properties inside the object. We can pass other properties too but need to mention in type generic like myInfoType */

// type MandatoryTypes = {name: string, age: number, salary: number};
interface MandatoryInterface {name: string, age: number, salary: number};

const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = "Tailor Swift";
    const newData = { ...myInfo, crush }; // Spread Operator applied after using generic
    return newData;
}

type myInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean,
    other2: null
}

const myInfo: myInfoType = {
    name: "Crescent",
    age: 25,
    salary: 10000000,
    other1: false,
    other2: null
};
// const results1 = addMeInMyCrushMind({ MonerKushi: "Hashi Kushi" }); // accept any type/properties of object

const results2 = addMeInMyCrushMind<myInfoType>(myInfo);
// results2. // other1 and other2 also included

/* So, We need to use generic constraints to constrain the types in generic functions to specific types. */

