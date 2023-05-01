/* Spread, Rest, Default Parameters and Destructuring in Typescript */

// Default Parameters | 1st parameter (Not use ever)
/* 
function add2(num1: number = 10, num2: number): number { // parameters and return type: number | Default Parameter = 10
    return num1 + num2;
} 
*/

// console.log(add2(5, 5)); // 10
// console.log(add2(5)); // We don't use 1st parameter as a default parameter | (use & not use -> means the same) | Show Error

/* ---------------------------------------------------------- */

// Default Parameters | Always use last parameter

function add2(num1: number, num2: number = 10,): number { // parameters and return type: number | Default Parameter = 10
    return num1 + num2;
}

console.log(add2(5, 5)); // 10
console.log(add2(5)); // 15

/* ---------------------------------------------------------- */

// Spread Operator - Separate the array items

const myFriends: string[] = ['chandler', 'joey', 'ross'];
const newFriends: string[] = ['monica', 'rachel', 'pheobe'];

myFriends.push(...newFriends);
console.log(myFriends); // [ 'chandler', 'joey', 'ross', 'monica', 'rachel', 'pheobe' ]

/* ---------------------------------------------------------- */

// Rest Parameter/Operator - Create array by taking all items

// Normal Invoke Function

// const greatFriends = (friend1: string, friend2: string, friend3: string): void => console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`);
const greatFriends = (
    friend1: string,
    friend2: string,
    friend3: string
): void => console.log(`Hi ${friend1} \nHi ${friend2} \nHi ${friend3}`);

greatFriends("Nayeem", "Mohon", "Apu");

/* Output:
    Hi Nayeem
    Hi Mohon
    Hi Apu
*/

/* ---------------------------------------------------------- */

// Using Rest Operator

const greatFriends2 = (...friends: string[]): void => console.log(friends); // [ 'Nayeem', 'Mohon', 'Apu', 'Dipu', 'Topu', 'Tomal' ]
greatFriends2("Nayeem", "Mohon", "Apu", "Dipu", "Topu", "Tomal");

const greatFriends3 = (...friends: string[]): void => console.log(friends.forEach(friend => console.log(`Hi ${friend}`)));
greatFriends3("Nayeem", "Mohon", "Apu", "Dipu", "Topu", "Tomal");

/* Output:
    Hi Nayeem
    Hi Mohon
    Hi Apu
    Hi Dipu
    Hi Topu
    Hi Tomal
*/

/* ---------------------------------------------------------- */

/* Array and Object Destructuring */

// Array Destructuring

const myFriends2: string[] = ['chandler', 'joey', 'ross'];

// const [bestFriend] = myFriends2;
// console.log(bestFriend); // chandler

const [bestFriend, goodFriend, roommate] = myFriends2;
console.log(bestFriend, goodFriend, roommate); // chandler joey ross

/* ---------------------------------------------------------- */

// Object Destructuring

const myBestFriends = {
    friendName: "Pro Hero",
    age: 25,
};

// const {friendName} = myBestFriends;
// console.log(friendName); // Pro Hero

// const {friendName: string} = myBestFriends; // Take as name Alias (Take as name not type)
// console.log(string); // Pro Hero

const { friendName: string } = myBestFriends; // Take as name Alias (Take as name not type)
console.log({ string }); // { string: 'Pro Hero' }

// const {friendName: fullname} = myBestFriends; // Take as name Alias
// console.log(fullname); // Pro Hero


