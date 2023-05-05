"use strict";
/* 3.7 Generic Constraints Using Key Of (Part-01) */
// const a: newType = 'age';
// const b: newTypeUsingKeyOf = 'age';
/*
    Problem Statement: I want to create a generic function where I pass an object and a key (as object key)
Ex:
    ({name: 'Mr.X', age: 100}, 'name') // Mr.X (return)
    ({name: 'Mr.X', age: 100}, 'age') // 100 (return)

    const a = {
        name: 'Mr.X',
        age: 100
    }
    a['name']
    a['age']
*/
// normal function
function getProperty(obj, key) {
    // Y = 'name' | 'age'; // Union type key object
    obj[key];
}
const property1 = getProperty({ name: "Mr. X", age: 100 }, "age");
// const property2 = getProperty({name: "Mr. X", age: 100}, "salary"); // Argument of type '"salary"' is not assignable to parameter of type '"age" | "name"'
// So, using keyof, one generic type constraint/force to another generic type
