/* 3.9 Conditional Types */

/* 
    Conditional Types: A type is dependent on another type
Ex:
    type a1 = string;
    type a2 = a1 extends string ? string : null; 
Output: 
    a1 = string --> a2 = string
    a1 = number --> a2 = null
    a1 = null --> a2 = null

So, a2 is dependent on a1.
*/

// type a1 = string;
// type a2 = a1 extends string ? string : null;

/* --------------------------------------------- */

// Nested Conditional Type
// type a1 = null;
// type a2 = undefined;
// type a3 = number;

// type d1 = a1 extends null ? null : a2 extends number ? number : a3 extends null ? null : never; // null

// type d2 = a1 extends undefined
//     ? null
//     : a2 extends number
//     ? number
//     : a3 extends null
//     ? null
//     : never; // never

/* --------------------------------------------- */

/* Example of Nested Conditional Type */

// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }

// // create a type to check wife1 is exists or not, If exists "wife1 ? true : false"
// type CheckProperty<T> = T extends { wife1: string } ? true : false;

// type CheckWife1 = CheckProperty<Sheikh>; // true

/* --------------------------------------------- */

/* Conditional Type with Generic keyof Constraints */

// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }

// type A = keyof Sheikh; // 'wife1' | 'wife2' (Union Type)

// // create a type to check wife1 is exists or not, If exists "wife1 ? true : false"
// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false; // 'wife1' extends 'wife1' | 'wife2'

// type CheckWife1 = CheckProperty<Sheikh, 'wife1'>; // true
// type CheckWife2 = CheckProperty<Sheikh, 'wife2'>; // true
// type CheckWife3 = CheckProperty<Sheikh, 'wife3'>; // false
// type CheckWife4 = CheckProperty<Sheikh, 'girlfriend'>; // false

/* --------------------------------------------- */

/* Conditional Type with type literal */

// type Bandhubi = 'Monika' | 'Rachel' | 'Pheobe'; // string literal

// type RemoveBandhubi<T> = T extends 'Rachel' ? never : T;

// type CurrentBandhubi = RemoveBandhubi<Bandhubi>; // "Monika" | "Pheobe"

/* --------------------------------------------- */

/* Conditional Type with generic type literal */

type Bandhubi = 'Monika' | 'Rachel' | 'Pheobe'; // string literal

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi1 = RemoveBandhubi<Bandhubi, 'Rachel'>; // "Monika" | "Pheobe"
type CurrentBandhubi2 = RemoveBandhubi<Bandhubi, 'Monika'>; // "Rachel" | "Pheobe"
type CurrentBandhubi3 = RemoveBandhubi<Bandhubi, 'Pheobe'>; // "Monika" | "Rachel"
type CurrentBandhubi4 = RemoveBandhubi<Bandhubi, 'Crescent'>; // "Monika" | "Rachel" | "Pheobe"

