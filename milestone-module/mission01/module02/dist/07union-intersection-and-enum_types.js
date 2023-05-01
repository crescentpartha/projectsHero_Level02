"use strict";
/* 2.8 Union, Intersection and Enum Types */
// Union Types
const newDeveloper = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 1,
};
// Enum Type - Used enum isn't best practice | ignore it but know it exists
var Level2;
(function (Level2) {
    Level2[Level2["junior"] = 0] = "junior";
    Level2[Level2["mid"] = 1] = "mid";
    Level2[Level2["senior"] = 2] = "senior";
})(Level2 || (Level2 = {}));
;
// Enum Type - We can overwrite properties
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
;
// Union Types
const newDeveloper2 = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 1,
};
const developer = {
    name: "Next Level Bhai",
    expertise: "Typescript",
    experience: 2,
    leadershipExperience: 1,
    // level: "Mid Level",
    // level: "mid",
    level: Level.junior,
};
console.log(developer.expertise); // Typescript
console.log(developer.name); // Next Level Bhai
// Notes: If we inherit any type, then must use every properties of this type. Otherwise, it shows error.
