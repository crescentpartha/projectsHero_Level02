/* 3.7 Generic Constraints Using Key Of (Part-01) */

/* 
    - keyof is a keyword in TypeScript which is used to extract the key type from an object type.
    - When used on an object type with explicit keys, keyof creates a union type with those keys.
    - If you want to get the key in the object type, you need to use the keyof type operator.
    - using key of one type (object), we can create another type (object) where it will be union type of those keys
*/

type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType = 'name' | 'age' | 'address'; // Union type | did manually

type newTypeUsingKeyOf = keyof PersonType; // using keyof (did same thing)

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
function getProperty<X, Y extends keyof X> (obj: X, key: Y) {
    // Y = 'name' | 'age'; // Union type key object
    obj[key];
}
const property1 = getProperty({name: "Mr. X", age: 100}, "age");
// const property2 = getProperty({name: "Mr. X", age: 100}, "salary"); // Argument of type '"salary"' is not assignable to parameter of type '"age" | "name"'

// So, using keyof, one generic type constraint/force to another generic type

