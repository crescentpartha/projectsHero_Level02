/* Object in Typescript */

// Implicitly, It infers/guess the variable or properties types
const user3 = {
    name: "Montu Mia",
    age: 52,
    isMarried: true,
    wife: "Monira Khatun",
};
console.log(user3);
console.log(user3.name);

// Explicit type
const user4: {
    company: "Programming Hero", // Literal type: (used for specific value)
    readonly location: string, // readonly | can't assign value
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string // Optional type or Intersection (?): used because it could be defined or undefined
} = {
    company: "Programming Hero",
    location: "Dhaka",
    name: "Montu Mia",
    age: 52,
    isMarried: true,
    wife: "Monira Khatun",
};
console.log(user4);
console.log(user4.company);

// user4.company = "Programming Hero Bangladesh"; // Type '"Programming Hero Bangladesh"' is not assignable to type '"Programming Hero"'
// user4.location = "Sylhet"; // Cannot assign to 'location' because it is a read-only property
