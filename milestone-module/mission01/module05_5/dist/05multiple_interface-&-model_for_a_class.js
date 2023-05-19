"use strict";
/* 5.5.4: How to use multiple interface as a type and create a model for a class */
;
;
// class implements this type
class User {
    constructor(firstName, lastName) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`,
        };
    }
}
// create an instance (object)
const user1 = new User('Crescent', 'Partha');
console.log(user1.methods.fullName()); // Crescent Partha
console.log(user1.data.firstName); // Crescent
console.log(user1.data.lastName); // Partha
