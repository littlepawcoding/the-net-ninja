// NULL & UNDEFINED

let age;
console.log(age, age + 3, `the age is ${age}`); // undefined NaN "the age is undefined"

let year = null;
console.log(year, year + 3, `the year is ${year}`); // null 3 "the year is null"

// NOTES:
/*
- both similar in the sense that they both mean lack of value
- null is an intentional lack of value
- undefined is not intentional but is added (usually by the browser) if a value cannot be found
- set up a variable called age but not assign it any value
- age is undefined because we have not given it a value yet - which is what happens when we use a variable that has not been defined with a value, the browser automatically assigns the variable with the value of undefined
- using a undefined variable in a formula like age + 3 we are returned with a NaN - not a number

- set up a variable called year but this time assign it to null - a empty value
- year is null because that is the value we have assigned to it
- it prints 3 because nothing + 3 is 3 - takes on the value of 0
- the year is null, again the value it has been assigned
*/
