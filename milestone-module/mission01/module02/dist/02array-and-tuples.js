"use strict";
/* Array in Typescript */
// const names = ["abul", "babul", "kabul"]; // string type (implicitly)
const names = ["abul", "babul", "kabul"]; // string type (explicitly)
// const rollNumber: number[] = [23, 46, 4, 5, 99]; // 01primitive-types.ts(9, 5): 'rollNumber' was also declared here
const rollNumbers = [23, 46, 4, 5, 99]; // number type (explicitly)
rollNumbers[8] = 100;
// rollNumbers[9] = "One"; // Type 'string' is not assignable to type 'number'
/* Variable's Methods */
// If we use dot (.) symbol after variable, it's automatically suggest different types of variable's methods
const roll = rollNumbers.map(roll => roll.toPrecision(3));
console.log(roll); // [ '23.0', '46.0', '4.00', '5.00', '99.0', <3 empty items>, '100' ]
const namesLength = names.map(name => name.length);
console.log(namesLength); // [ 4, 5, 5 ]
/* Union type or Mixed type */
const names2 = ["abul", "babul", "kabul", 46, 23, true]; // Union type (mixed type) | (string, number, boolean) type
names2.push(33);
names2.push("Apollo");
names2.push(false);
// names2.push(null); // Argument of type 'null' is not assignable to parameter of type 'string | number | boolean'
// names2.push(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'string | number | boolean'
console.log(names2); // [ 'abul', 'babul', 'kabul', 46, 23, true, 33, 'Apollo', false ]
/* Tuples in Typescript */
// Tuples similar to couples | (Tuples = Double/Twice = Couples)
// Tuple = (key, value) pair
// Tuple is a special type of array
const user2 = [23, "Partha"]; // Union type (normal array)
user2[0] = "Twenty Three";
console.log(user2); // [ 'Twenty Three', 'Partha' ]
const user = [23, "Crescent"]; // tuples type
user[1] = "Partha";
console.log(user); // [ 23, 'Partha' ]
const user1 = [23, false]; // tuples type
user1[1] = true;
console.log(user1); // [ 23, true ]
const boyfriends = ["Abul", 'Abila']; // tuples type
const boyfriends2 = ["Abul", true]; // tuples type
console.log(boyfriends); // [ 'Abul', 'Abila' ]
console.log(boyfriends2); // [ 'Abul', true ]
