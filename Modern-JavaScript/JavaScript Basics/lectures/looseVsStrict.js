// LOOSE VS STRICT COMPARISON

let age = 25;

// loose comparison (compares only values - different types can still be equal)

console.log(age == 25); // true
console.log(age == "25"); // true
console.log(age != 25); // false
console.log(age != "25"); // false

// strict comparison (compares both value and type - different types CANNOT be equal)

console.log(age === 25); // true
console.log(age === "25"); // false
console.log(age !== 25); // false
console.log(age !== "25"); // true

// NOTES:
/*
- loose comparison: before js checks if left equal right, it converts age to a string, so when it compares they are both strings so it thinks it's true (type conversion)
- loose comparison is not the most accurate way to check things
- strict comparison: is age strictly equal to 25 in type and value?
- strict comparison: js does not covert to a string in the background
- strict comparison is more accurate and best practice
*/
