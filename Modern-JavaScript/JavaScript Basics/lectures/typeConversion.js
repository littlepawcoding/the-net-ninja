// TYPE CONVERSION

// convert number
let score = "100";
console.log(typeof score); // string

score = Number(score);
console.log(score + 1); // 101
console.log(typeof score); // number

// convert string
let result = String("50");
console.log(result, typeof result); // 50, string

// convert to boolean
let truthyNum = Boolean(100);
console.log(truthyNum, typeof truthyNum); // true
let falsyNum = Boolean(0);
console.log(falsyNum, typeof falsyNum); // false

let truthyStr = Boolean("100");
console.log(truthyStr, typeof truthyStr); // true
let falsyStr = Boolean("");
console.log(falsyStr, typeof falsyStr); // false

// NOTES:
/*
- type conversion is turning one data type into another data type
- typeof is a good way to check the current type of the variable
- Number method is the way to convert the string to a number
- you can't convert things that won't make sense - e.g convert the string "hello" to a Number("hello") would result in NaN
- when comes to converting to booleans, some values are true and some are false
  e.g. 100 is true - known as truthy
  e.g. 0 is false - known as falsy
- both positive & negative numbers are considered truthy
- but 0 is false!
- for strings, all strings are truthy
- but and empty string is falsy
*/
