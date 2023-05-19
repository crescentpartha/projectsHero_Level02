/* 5.5.3 Know about utility Types */

/* 
    TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.
*/

// 01. Pick<Type, Keys>

interface Person {
    name: string;
    email?: string;
    contactNo: string;
};

/* 
    - Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type. 
    - To select property
*/
type Email = Pick<Person, "email">;
type ContactNo = Pick<Person, "contactNo">;
type Contact = Pick<Person, "contactNo" | "email">;

// 02. Omit<Type, Keys>

/* 
    - Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). 
    - The opposite of Pick.
    - To remove property
*/

type Name = Omit<Person, "email" | "contactNo">;
type ContactNo2 = Omit<Person, "name">;


// 03. Partial<Type>

/* 
    - Constructs a type with all properties of Type set to optional. 
    - This utility will return a type that represents all subsets of a given type.
    - To make all the properties be optional type
*/

type Optional = Partial<Person>;

// 04. Required<Type>

/* 
    - Constructs a type consisting of all properties of Type set to required. 
    - The opposite of Partial.
*/

type RequiredProps = Required<Person>;


// 05. Readonly<Type>

/* 
    - Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
*/

const person: Readonly<Person> = {
    name: "Persian",
    email: "abc@gmail.com",
    contactNo: '12341234'
};

// person.name = 'Partha'; // Cannot assign to 'name' because it is a read-only property

// 06. Record<Keys, Type>

/* 
    - Constructs an object type whose property keys are Keys and whose property values are Type. 
    - This utility can be used to map the properties of a type to another type.
*/

// type myObj = {
//     a: string;
//     b: string;
//     c: string;
// };

// using index signature
// type myObj = {
//     // [key: string]: string;
//     [key: 'a' | 'b' | 'c']: string;
// };

// using Record Utility - 'a' | 'b' | 'c'
// type myObj = Record<string, string>;
type myObj = Record<'a' | 'b' | 'c', string>;

const obj: myObj = {
    a: "1",
    b: "2",
    c: "3",
    // d: 4     /* Type 'number' is not assignable to type 'string' */
    // d: "4"   /* 'd' does not exist in type 'myObj' */
};

