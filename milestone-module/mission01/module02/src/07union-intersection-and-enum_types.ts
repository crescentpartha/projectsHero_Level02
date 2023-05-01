/* 2.8 Union, Intersection and Enum Types */

/* Union Type */

type NoobDeveloper = {
    name: string,
};

type JuniorDeveloper = {
    name: string,
    expertise: string,
    experience: number,
};

// Union Types
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 1,
};

/* --------------------------------------------------- */

/* Intersection Type */

type NoobDeveloper2 = {
    name: string,
};

// Intersection Type
type JuniorDeveloper2 = NoobDeveloper2 & {
    expertise: string,
    experience: number,
};

// Enum Type - Used enum isn't best practice | ignore it but know it exists
enum Level2 {
    junior, // 0
    mid, // 1
    senior, // 2
};

// Enum Type - We can overwrite properties
enum Level {
    junior = 'junior', // Level.junior = "junior"
    mid = 'mid', 
    senior = 'senior', 
};

// Intersection Type
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    // level: string,
    // level: "junior" | "mid" | "senior",
    level: Level,
};

// Union Types
const newDeveloper2: NoobDeveloper2 | JuniorDeveloper2 = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 1,
};

const developer: NextLevelDeveloper = {
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
