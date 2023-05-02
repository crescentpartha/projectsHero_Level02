## Table of Contents

- [Module02: Explore Advance Types of Typescript](#module02-explore-advance-types-of-typescript)
  - [3.1 Type Assertion](#31-type-assertion)
    - [`Resources`](#resources)
    - [`Description`](#description)
    - [`Syntax of Type Assertion`](#syntax-of-type-assertion)
    - [`Examples`](#examples)

# Module02: Explore Advance Types of Typescript

## 3.1 Type Assertion

### `Resources`

- [TypeScript Type Assertion](https://www.javatpoint.com/typescript-type-assertion#:~:text=In%20TypeScript%2C%20type%20assertion%20is,type%20using%20a%20type%20assertion.)

**[🔼Back to Top](#table-of-contents)**

### `Description`

> In TypeScript, `Type Assertion` is a mechanism which `tells the compiler` about the `type of a variable`. <br /> When TypeScript determines that the `assignment is invalid`, then we have an option to `override the type` using a type assertion. <br /> <br /> Type assertion is `explicitly telling the compiler` that we want to treat the entity as a different type. <br /> It allows us to treat `any as a number`, or `number as a string`. <br /> <br /> Type assertion is `commonly used` when we are `migrating` over code from `JavaScript to TypeScript`. <br /> <br /> Type assertion works like `typecasting`, but it `does not perform type checking`. <br /> <br /> The `typecasting` comes with `runtime support`, whereas type assertion has no impact on runtime. <br /> However, `type assertions` are purely a `compile-time construct` and provide hints to the compiler on how we want our code to be analyzed. <br /> <br /> `Moral of the Story:` ___We assert or understand types better than TypeScript___.

**[🔼Back to Top](#table-of-contents)**

### `Syntax of Type Assertion`

``` Typescript
/* Syntax of Type Assertion: */

let something: any;

(something as string).length; // Syntax-01
<string>something.length; // Syntax-02
```

> `Notes:` Syntax-02 ___doesn't work___ on `tpsx` (file type - may be). So, ___Always use Syntax-01___ (better approach)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

``` Typescript
/* Variable Example-01 */

let something: any; // type any

something = "Next level web development"; // type any
// something. // It doesn't give any auto-suggestion about property or methods.
// (something as string). // Now auto-suggestion intelligence apply

(something as string).length; // (way-01) apply type assertion | (gives string related auto-suggestion)
<string>something.length; // (way-02) apply type assertion
```

**[🔼Back to Top](#table-of-contents)**

``` Typescript
/* Variable Example-02 */

let something2: any; // type any
something2 = 666;

(something2 as number).toFixed(); // (way-01) apply type assertion | (gives number related auto-suggestion)
<number>something2.toFixed(); // (way-02) apply type assertion
```

**[🔼Back to Top](#table-of-contents)**

``` Typescript
/* Function Example */

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram`;
    }
    else if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number; // (way-01) apply type assertion
const resultToBeNumber2 = <number>kgToGram(1000); // (way-02) apply type assertion
console.log(resultToBeNumber, resultToBeNumber2); // 1000000 1000000

const resultToBeString = kgToGram("1000") as string; // (way-01) apply type assertion
const resultToBeString2 = <string>kgToGram("1000"); // (way-02) apply type assertion
console.log(resultToBeString); // The converted result is: 1000000 gram
console.log(resultToBeString2); // The converted result is: 1000000 gram

/* 
    Be careful when you use type assertion
    const resultToBeString = kgToGram("1000") as number; // we tell this is number, but actually we pass string.
    although, we assert type as number but it return string;
*/
```

**[🔼Back to Top](#table-of-contents)**

``` Typescript
/* try-catch Example */

type CustomErrorType = {
    message: string
}

try {

} catch (err) {
    console.log((err as CustomErrorType).message); // (way-01) type assertion
    console.log((<CustomErrorType>err).message); // (way-02) type assertion
}
```

**[🔼Back to Top](#table-of-contents)**

