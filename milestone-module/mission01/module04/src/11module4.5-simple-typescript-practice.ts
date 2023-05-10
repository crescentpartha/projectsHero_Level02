/* Module 4.5: Simple TypeScript Practice */

// 01. Convert the following JavaScript array into a TypeScript tuple

/* JavaScript array to TypeScript tuple */

// tuple
const userInfo: [number, string, string, boolean, undefined | null, string] = [101, "Ema", "John", true, , "2023"];

console.log(userInfo); // [ 101, 'Ema', 'John', true, <1 empty item>, '2023' ]

/* 
    02. Write a TypeScript function that takes in two arrays of numbers as parameters. 
    The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

    For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], 
    the function should return a new array with the elements 2 and 4 because they are present in both arrays.

    The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
*/

/* Compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays */

let arr3: number[] = [];

// normal function
function parallelValue(arr1: number[], arr2: number[]): number[] {
    arr1.forEach(element1 => {
        // console.log("arr1", element1);
        arr2.forEach(element2 => {
            // console.log(element2);
            // if (element1 === element2) console.log(element1, element2);
            if (element1 === element2) arr3?.push(element1);
        })
    })
    return arr3;
}

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [2, 4, 6, 8];

console.log(parallelValue(arr1, arr2)); // [ 2, 4 ]


/* 
    03. You have an interface for Product, containing the product's id, name, price, and category. 
    You want to filter an array of Products based on a specific criterion and value.

    Write a TypeScript generic function that takes this array, a criterion, and returns a new array containing only the products that match the given criterion and value. 
    Use a generic type parameter in the function signature to ensure type safety.
*/

/* Filter an array of Products based on a specific criterion and value */

// interface
interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string;
};

// arrow function
const ProductFilter = (param1: Array<IProduct>, param2: string): Array<IProduct> => {
    const productFilter = param1.filter(element => element.name === param2);
    // console.log(productFilter);
    return productFilter;
}

// generic type parameter in the function signature | arrow function
const ProductFilter2 = <X>(param1: Array<IProduct>, param2: X) => {
    const productFilter = param1.filter(element => element.name === param2);
    // console.log(productFilter);
    return productFilter;
}

// array of object
let product = [
    { id: 1, name: 'Samsung A20', price: 2000, category: 'Samsung' },
    { id: 2, name: 'Samsung M20', price: 3000, category: 'Samsung' },
    { id: 3, name: 'Iphone', price: 2000, category: 'Apple' },
    { id: 4, name: 'Oppo Pro', price: 5000, category: 'Oppo' },
    { id: 5, name: 'Nokia 1032', price: 1000, category: 'Nokia' },
    { id: 6, name: 'Google Smart', price: 8000, category: 'Google' },
];

const result: Array<IProduct> = ProductFilter(product, 'Iphone');
console.log(result); // [ { id: 3, name: 'Iphone', price: 2000, category: 'Apple' } ]

const result2 = ProductFilter2(product, 'Iphone');
console.log(result2); // [ { id: 3, name: 'Iphone', price: 2000, category: 'Apple' } ]

/* 
    04. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. 
    Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
*/

/* Calculates the total cost of all the products in the array */

// type alias
type product2Type = {
    name: string;
    price: number;
    quantity: number;
}

// generic constraint in normal function
function CalculateTotalCostOfProducts<T extends product2Type[]>(products: T): number {
    let total = 0;
    products.forEach(product => {
        total += product.price * product.quantity;
        // console.log(product.price, "*", product.quantity,"=", product.price * product.quantity, "-->", total);
    });
    return total;
}

// array of object
let product2: product2Type[] = [
    { name: 'Samsung A20', price: 2000, quantity: 5 },
    { name: 'Samsung M20', price: 3000, quantity: 10 },
    { name: 'Iphone', price: 2000, quantity: 15 },
    { name: 'Oppo Pro', price: 5000, quantity: 20 },
    { name: 'Nokia 1032', price: 1000, quantity: 25 },
    { name: 'Google Smart', price: 8000, quantity: 30 },
];

const result3 = CalculateTotalCostOfProducts(product2);
console.log(result3); // 435000

/* 
    05. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. 
    How would you approach this problem and write code to solve it?
*/

/* Sum of all the even numbers from the given array */

// arrow function 
const sumOfEvenNumbers = (numbers: number[]): number => {
    let total = 0;
    numbers.forEach(number => {
        if (number % 2 == 0) total += number;
        // console.log(number, total);
    })
    return total;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -5, 2];

const result4: number = sumOfEvenNumbers(numbers);
console.log(result4); // 20

/* 
    06. Create an interface called Person that includes properties for name (string), age (number), and email (string). 
    Then create an array of Person objects and write a function that takes the array and a string email as parameters, 
    and returns the Person object that matches the email or null if no match is found.
*/

/* Returns the Person object that matches the email OR Returns null if no match is found */

// interface type
interface IPerson {
    name: string;
    age: number;
    email: string;
};

// arrow function
const emailMatcher = (object: IPerson[], email: string): IPerson[] | null => {
    // console.log(object, email);
    const objectFilter = object.filter(user => user.email === email);
    return objectFilter.length === 0 ? null : objectFilter;
}

// array of object
const Person2: IPerson[] = [
    { name: 'Crescent', age: 25, email: 'abc.crescent@gmail.com' },
    { name: 'Partha', age: 25, email: 'abc.partha@gmail.com' },
    { name: 'Parsian', age: 33, email: 'abc.parsian@gmail.com' },
    { name: 'Rechel', age: 24, email: 'abc.rechel@gmail.com' }
];

// invoke function
const result5 = emailMatcher(Person2, 'abc.@gmail.com');
const result6 = emailMatcher(Person2, 'abc.partha@gmail.com');

// output
console.log(result5); // null
console.log(result6); // [ { name: 'Partha', age: 25, email: 'abc.partha@gmail.com' } ]


/* 
    07. Create a TypeScript program that declares an array of numbers. 
    Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. 
    Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
*/

/* Finds the minimum and maximum values of the array */

// arrow function
const minMax = (...numbers: number[]): number[] => {
    console.log(numbers);
    let min: number = Math.min(...numbers);
    let max: number = Math.max(...numbers);

    return [min, max];
}

// array of numbers
const numbers2: number[] = [8, 3, 5, 1, 2, -10, 4, 6, 7, 8, 9];

// invoke function
const result7: number[] = minMax(...numbers2);

// array destructuring
const [min, max] = result7;

// output
console.log(min, max); // -10 9


/* 
    08. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. 
    If the boolean parameter is true, log the string parameter in uppercase. 
    If the boolean parameter is false or not provided, log the string parameter in lowercase.
*/

/* Returns conditional uppercase or lowercase */

// type alias
type colorType = "red" | "green" | "blue"; // literal type
type booleanType = boolean | null; 

// arrow function with optional parameter
const upperAndLowerCase = (color: colorType, bool?: booleanType): string => {
    if (bool) return color.toUpperCase();
    else return color.toLowerCase();
}

// invoke function and output
console.log(upperAndLowerCase("red", true)); // RED
console.log(upperAndLowerCase("green" )); // green
console.log(upperAndLowerCase("green", true )); // GREEN
console.log(upperAndLowerCase("blue", false)); // blue



