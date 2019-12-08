// NUMBERS

let radius = 10;
const pi = 3.14;

// math operators
// + plus
// - minus
// * multiply
// / divide
// ** the power of (indicies)
// % remainder ofg

// let result = radius % 3; // 1

// let result = pi * radius ** 2; // 314
// console.log(result);

// order of operation - how we perform calculations in
// B() I** D/ M* A+ S-

let likes = 20;

likes = likes + 1; // 21
likes++; // 22
likes += 10; //32

// console.log(likes);

// NaN - not a number
// can be printed if a calculation doesn't make sense or doesn't result to a number

// console.log(5 * "hello"); // NaN

let result = "This blog has " + likes + " likes."; // This blog has 32 likes.
console.log(result);

// NOTES:
/*
- example we want to find out the remainder of radius by 3
- we use % to find the remainder
- let result = pi * radius ** 2; work out the area of a circle

- with the likes example we can use the math operators to simplify our code
- using like++ is the same as adding one like the line of code before it
- using likes += 10 means use the current value of likes and plus 10, a shorthand way of adding 10 to a value
- same with other operators -= /= *=
- this is called shorthand notation 
- we can use concatination to combine strings and numbers, like the last example, its how we can input a number into a sring
- there is a cleaner way to concatinate by using template strings
*/
