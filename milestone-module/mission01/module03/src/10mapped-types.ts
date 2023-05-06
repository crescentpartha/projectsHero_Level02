/* 3.10 Mapped Types */

// Follow the documentations doc to understand organized way or properly

const arrayOfNumbers = [1, 2, 3];

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());

console.log(arrayOfStrings); // [ '1', '2', '3' ]

// Notes: Mapped types work in a same way.

/* ------------------------------------------------ */

type AreaNumber = {
    height: number;
    width: number;
};

type Volume = {
    height: number;
    width: string;
    depth: number;
};

type Area<T> = {
    // [key in "Persian" | "Porhan"]: string;
    // [key in "Persian" | "Porhan"]: number;
    // [key in 'height' | 'width']: number;

    // [key in keyof Volume]: string;
    // [key in keyof Volume]: number;
    // [key in keyof Volume]: boolean; // we can fixed this type using "look up type"

    // [key in keyof Volume]: Volume[key]; // Look up types | type could be automatically change based on Volume type
    // Volume['height'] --> number (Look up types)
    // Volume['width'] --> string (Look up types)

    // [index in keyof T]: T[index]; // using index or key (means the same)
    // [key in keyof T]: T[key];
    readonly [key in keyof T]: T[key];
    
    // So, using Mapped Type, we can create/convert one type to another type. Also, we explicitly tell the type.
}

const area1: Area<{height: number, width: string}> = {height: 10, width: "Twelve"};

// area1.height = 17; // Cannot assign to 'height' because it is a read-only property.

/* So, using Mapped Type, we can create/convert one type to another type through mapping. We also can dynamic the object type */

type AreaString = {
    height: string;
    width: string;
};

type AreaReadonly = {
    readonly height: number;
    readonly width: number;
}

const rectangularArea: AreaReadonly = {
    height: 10,
    width: 12,
};

// rectangularArea.width = 10; // Cannot assign to 'width' because it is a read-only property.



// access the property of type
type A = AreaNumber['height']; // look up types
type B = keyof AreaNumber; // 'height' | 'width' (Union return type)

// access the property of object
// const obj = {
//     name: 'Persian'
// }
// console.log(obj['name']); // Persian

