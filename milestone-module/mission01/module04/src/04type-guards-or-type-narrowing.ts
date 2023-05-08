/* 4.4 Type Guards / Type Narrowing */

/* 
    # In TypeScript, the type guards are used to determine a variable's type, often inside a conditional or functional block.
    # Create constraints on type in typescript called Type Guards.
    # Type Guards used in Class and Function
    # Type Guards used in different ways like "keyof guard"
*/

// keyof guard - works on run-time

// type AlphaNumeric = string | number;
// function addNum(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
//     // keyof guard used
//     if (typeof param1 === 'number' && typeof param2 === 'number') {
//         return param1 + param2;
//     }
//     else {
//         return param1.toString() + param2.toString();
//     }
// }

// console.log(addNum('1', '2')); // 12
// console.log(addNum(1, 2)); // 3

/* --------------------------------------------- */

// In guard (In used for object)

// type NormalUserType = {
//     name: string;
// };

// type AdminUserType = {
//     name: string;
//     role: "admin";
// };

// function getUser(user: NormalUserType | AdminUserType): string {
//     // In guard used
//     if ('role' in user) {
//         return `I am an admin and my role is ${user.role}`;
//     }
//     else {
//         return `I am a normal user`;
//     }
// }

// const normalUser1: NormalUserType = { name: "Mr. Kallu" };
// const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" };

// console.log(getUser(normalUser1)); // I am a normal user
// console.log(getUser(adminUser1)); // I am an admin and my role is admin

/* -------------------------------------------------- */

// instanceof guard

// class Animal1 {
//     name: string;
//     species: string;

//     constructor(name: string, species: string) {
//         this.name = name;
//         this.species = species;
//     }

//     makeSound() {
//         console.log('I am making sound');
//     }
// }

// class Dog extends Animal1 {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeBark() {
//         console.log("I am barking");
//     }
// }
// class Cat extends Animal1 {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeMeaw(){
//         console.log("I am Meawing");
//     }
// }

// function getAnimal(animal: Animal1) {
//     // instanceof guard used
//     if (animal instanceof Dog) {
//         animal.makeBark();
//     }
//     else if (animal instanceof Cat) {
//         animal.makeMeaw();
//     }
//     else {
//         animal.makeSound();
//     }
// }

// const animal1 = new Dog('German Bhai', 'dog'); // instance of dog
// const animal2 = new Cat('Persian Bhai', 'cat'); // instance of dog

// getAnimal(animal1); // I am barking
// getAnimal(animal2); // I am Meawing

/* -------------------------------------------------- */

// Check Type using Function with Type Guard

/* 
    We can check the type using Type Guard instead of Type Alias. 
    Type Alias is a bed practice.
*/

class Animal1 {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound');
    }
}

class Dog extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log("I am barking");
    }
}
class Cat extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeaw() {
        console.log("I am Meawing");
    }
}

// check type using function
function isDog(animal: Animal1): animal is Dog { // is syntax to check type
    return animal instanceof Dog;
}

// check type using function
function isCat(animal: Animal1): animal is Cat { // is syntax to check type
    return animal instanceof Cat;
}

function getAnimal(animal: Animal1) {
    // instanceof guard used
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}

const animal1 = new Dog('German Bhai', 'dog'); // instance of dog
const animal2 = new Cat('Persian Bhai', 'cat'); // instance of dog

getAnimal(animal1); // I am barking
getAnimal(animal2); // I am Meawing


