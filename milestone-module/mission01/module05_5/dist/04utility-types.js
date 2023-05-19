"use strict";
/* 5.5.3 Know about utility Types */
;
// 05. Readonly<Type>
/*
    - Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
*/
const person = {
    name: "Persian",
    email: "abc@gmail.com",
    contactNo: '12341234'
};
const obj = {
    a: "1",
    b: "2",
    c: "3",
    // d: 4     /* Type 'number' is not assignable to type 'string' */
    // d: "4"   /* 'd' does not exist in type 'myObj' */
};
