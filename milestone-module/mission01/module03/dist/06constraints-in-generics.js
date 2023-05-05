"use strict";
/* 3.6 Constraints in Generics */
;
const addMeInMyCrushMind = (myInfo) => {
    const crush = "Tailor Swift";
    const newData = Object.assign(Object.assign({}, myInfo), { crush }); // Spread Operator applied after using generic
    return newData;
};
const myInfo = {
    name: "Crescent",
    age: 25,
    salary: 10000000,
    other1: false,
    other2: null
};
// const results1 = addMeInMyCrushMind({ MonerKushi: "Hashi Kushi" }); // accept any type/properties of object
const results2 = addMeInMyCrushMind(myInfo);
// results2. // other1 and other2 also included
/* So, We need to use generic constraints to constrain the types in generic functions to specific types. */
