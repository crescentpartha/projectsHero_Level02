"use strict";
/* Module 4.5: Simple TypeScript Practice */
// 01. Convert the following JavaScript array into a TypeScript tuple
/* JavaScript array to TypeScript tuple */
// tuple
const userInfo = [101, "Ema", "John", true, , "2023"];
console.log(userInfo); // [ 101, 'Ema', 'John', true, <1 empty item>, '2023' ]
/*
    02. Write a TypeScript function that takes in two arrays of numbers as parameters.
    The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

    For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8],
    the function should return a new array with the elements 2 and 4 because they are present in both arrays.

    The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
*/
/* Compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays */
let arr3 = [];
// normal function
function parallelValue(arr1, arr2) {
    arr1.forEach(element1 => {
        // console.log("arr1", element1);
        arr2.forEach(element2 => {
            // console.log(element2);
            // if (element1 === element2) console.log(element1, element2);
            if (element1 === element2)
                arr3 === null || arr3 === void 0 ? void 0 : arr3.push(element1);
        });
    });
    return arr3;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 8];
console.log(parallelValue(arr1, arr2)); // [ 2, 4 ]
;
// arrow function
const ProductFilter = (param1, param2) => {
    const productFilter = param1.filter(element => element.name === param2);
    // console.log(productFilter);
    return productFilter;
};
// generic type parameter in the function signature | arrow function
const ProductFilter2 = (param1, param2) => {
    const productFilter = param1.filter(element => element.name === param2);
    // console.log(productFilter);
    return productFilter;
};
// array of object
let product = [
    { id: 1, name: 'Samsung A20', price: 2000, category: 'Samsung' },
    { id: 2, name: 'Samsung M20', price: 3000, category: 'Samsung' },
    { id: 3, name: 'Iphone', price: 2000, category: 'Apple' },
    { id: 4, name: 'Oppo Pro', price: 5000, category: 'Oppo' },
    { id: 5, name: 'Nokia 1032', price: 1000, category: 'Nokia' },
    { id: 6, name: 'Google Smart', price: 8000, category: 'Google' },
];
const result = ProductFilter(product, 'Iphone');
console.log(result); // [ { id: 3, name: 'Iphone', price: 2000, category: 'Apple' } ]
const result2 = ProductFilter2(product, 'Iphone');
console.log(result2); // [ { id: 3, name: 'Iphone', price: 2000, category: 'Apple' } ]
// generic constraint in normal function
function CalculateTotalCostOfProducts(products) {
    let total = 0;
    products.forEach(product => {
        total += product.price * product.quantity;
        // console.log(product.price, "*", product.quantity,"=", product.price * product.quantity, "-->", total);
    });
    return total;
}
// array of object
let product2 = [
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
const sumOfEvenNumbers = (numbers) => {
    let total = 0;
    numbers.forEach(number => {
        if (number % 2 == 0)
            total += number;
        // console.log(number, total);
    });
    return total;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -5, 2];
const result4 = sumOfEvenNumbers(numbers);
console.log(result4); // 20
;
// arrow function
const emailMatcher = (object, email) => {
    // console.log(object, email);
    const objectFilter = object.filter(user => user.email === email);
    return objectFilter.length === 0 ? null : objectFilter;
};
// array of object
const Person2 = [
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
