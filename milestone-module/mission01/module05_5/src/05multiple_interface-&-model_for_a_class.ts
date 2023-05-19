/* 5.5.4: How to use multiple interface as a type and create a model for a class */

/* 
    class (has)
        1. props   --> (create) interface
        2. methods --> (create) interface
        interface + interface = model // combine both interface and create a type called model
    class will use this model using "class X implements typeName"
*/

// create generic model
interface Model<TData, TMethods> {
    data: TData;
    methods: TMethods;
};

// Properties interface
interface IUser {
    firstName: string;
    lastName: string;
};
// Methods interface
interface IMethods {
    fullName(): string;
}

// create type from model
type model = Model<IUser, IMethods>;

// class implements this type
class User implements model {
    data: IUser;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`,
        }
    }
}

// create an instance (object)
const user1 = new User('Crescent', 'Partha');

console.log(user1.methods.fullName()); // Crescent Partha
console.log(user1.data.firstName); // Crescent
console.log(user1.data.lastName); // Partha

