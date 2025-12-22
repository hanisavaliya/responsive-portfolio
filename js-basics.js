// ===============================
// JavaScript Basics
// Variables & Data Types
// ===============================

// ---------- Variable Declarations ----------

// var → function scoped, can be redeclared
var fullName = "Hani";
console.log("Full Name (var):", fullName);

// let → block scoped, can be updated
let age = 20;
age = 21;
console.log("Age (let):", age);

// const → block scoped, cannot be reassigned
const profession = "Web Developer Intern";
console.log("Profession (const):", profession);

// ---------- Primitive Data Types ----------

// String
let language = "JavaScript";
console.log("String:", language);

// Number
let experience = 1;
console.log("Number:", experience);

// Boolean
let isStudent = true;
console.log("Boolean:", isStudent);

// Null
let project = null;
console.log("Null:", project);

// Undefined
let mentor;
console.log("Undefined:", mentor);

// ---------- Template Literals ----------

let introduction = `Hello, my name is ${fullName}.
I am ${age} years old.
I am learning ${language} as a ${profession}.`;

console.log("Template Literal Output:");
console.log(introduction);

// ---------- Type Conversion ----------

// String to Number
let scoreString = "95";
let scoreNumber = Number(scoreString);
console.log("Converted Number:", scoreNumber, typeof scoreNumber);

// Number to String
let year = 2025;
let yearString = String(year);
console.log("Converted String:", yearString, typeof yearString);

// ---------- Type Coercion ----------

console.log("Type Coercion Examples:");
console.log(5 + "5");      // "55"
console.log("10" - 2);     // 8
console.log(true + 1);     // 2
