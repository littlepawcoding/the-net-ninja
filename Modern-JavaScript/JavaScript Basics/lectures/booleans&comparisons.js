// BOOLEANS & COMPARISONS

console.log(true, false);

// methods can return booleans
let email = "dug@thepupdug.co.uk";

let result = email.includes("@"); // true
console.log(result);

// comparison operators
let age = 25; // w/numbers

console.log(age == 25); // true - left equal right
console.log(age == 30); // false
console.log(age != 30); // true - left NOT equal right
console.log(age > 20); // true - left greater than right
console.log(age >= 25); // true - left greater than or equal to right
console.log(age < 20); // false - left less than right
console.log(age <= 25); // true - left less than or equal to right

let name = "dug"; // w/strings

console.log(name == "dug"); // true
console.log(name == "Dug"); // false - bcos has capital D
console.log(name > "kat"); // false - dug greater than kat? No, k comes later in the alphabet than d
console.log(name > "Dug"); // true - lowercase always greater than uppercase
console.log(name > "Kat"); // true - lowercase always greater than uppercase

// NOTES:
/*
- booleans represent two special values, true or false
- they are not strings
- single = sets a value
- double == is left equal to the right?
- != is left NOT equal to the right?
- note with strings and comparisons, lowercase letters are greater than uppercase letters
*/
