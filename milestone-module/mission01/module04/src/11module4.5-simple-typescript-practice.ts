/* Module 4.5: Simple TypeScript Practice */

// 01. Convert the following JavaScript array into a TypeScript tuple

const userInfo: [number, string, string, boolean, undefined | null, string] = [101, "Ema", "John", true, , "2023"];
console.log(userInfo); // [ 101, 'Ema', 'John', true, <1 empty item>, '2023' ]

/* 
    02. Write a TypeScript function that takes in two arrays of numbers as parameters. 
    The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

    For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], 
    the function should return a new array with the elements 2 and 4 because they are present in both arrays.

    The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
*/

let arr3: number[] = [];
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

interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string;
};

const ProductFilter = (param1: Array<IProduct>, param2: string): Array<IProduct> => {
    const productFilter = param1.filter(element => element.name === param2);
    // console.log(productFilter);
    return productFilter;
}

// generic type parameter in the function signature
const ProductFilter2 = <X>(param1: Array<IProduct>, param2: X) => {
    const productFilter = param1.filter(element => element.name === param2);
    // console.log(productFilter);
    return productFilter;
}

let product = [
    { id: 1, name: 'Samsung A20', price: 2000, category: 'Samsung' },
    { id: 2, name: 'Samsung M20', price: 3000, category: 'Samsung' },
    { id: 3, name: 'Iphone', price: 2000, category: 'Apple' },
    { id: 4, name: 'Oppo Pro', price: 5000, category: 'Oppo' },
    { id: 5, name: 'Nokia 1032', price: 1000, category: 'Nokia' },
    { id: 6, name: 'Google Smart', price: 8000, category: 'Google' },
]
const result: Array<IProduct> = ProductFilter(product, 'Iphone');
console.log(result); // [ { id: 3, name: 'Iphone', price: 2000, category: 'Apple' } ]
const result2 = ProductFilter2(product, 'Iphone');
console.log(result2); // [ { id: 3, name: 'Iphone', price: 2000, category: 'Apple' } ]

/* 
    04. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. 
    Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
*/



