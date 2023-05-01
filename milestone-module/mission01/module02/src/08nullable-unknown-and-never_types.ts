/* 2.9 Null, Unknown and Never Types */

/* Null Types */

// Search a name from database
const searchName = (value: string | null) => {
    if (value === null) {
        console.log("There is nothing to search!");
    }
    else {
        console.log("Searching");
    }
}

searchName(null); // There is nothing to search!

searchName("partha"); // Searching
// searchName(null); // Argument of type 'null' is not assignable to parameter of type 'string'

// In tsconfig.json - Fix the null Error - But it isn't the best practice - Keep it by-default
// Before
// "strictNullChecks": true,   /* When type checking, take into account 'null' and 'undefined'. */

// After
// "strictNullChecks": false,    /* When type checking, take into account 'null' and 'undefined'. */

/* ----------------------------------------------- */

/* Unknown Types */

// (Convert) kmh^-1 ==> ms^-1

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else if (typeof speed === 'string') {
        const [value, unit] = speed.split(" "); // ['10', 'kmh^-1']

        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else {
        console.log("There is wrong type");
    }
}

getMyCarSpeed(10); // My speed is 2.7777777777777777
getMyCarSpeed('10 kmh^-1'); // My speed is 2.7777777777777777
getMyCarSpeed(false); // There is wrong type

/* ----------------------------------------------- */

/* Never Types */

// If any function never return anything, then we can define this function as never type.

function throwError ( message: string): never {
    throw new Error(message);
}

// throwError('Error Happened');
// throwError('Bhai Error hoyeche, please fix it!');

