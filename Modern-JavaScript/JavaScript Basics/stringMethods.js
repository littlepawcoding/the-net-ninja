// COMMON STRING METHODS

let email = "dug@thepupdug.co.uk";

// .lastIndexOf - finds last index of whatever
// let result = email.lastIndexOf("t"); // 4

// .slice - takes a section from a string
// let result = email.slice(0, 3); // dug

// .substr
let result = email.substr(4, 9); // thepupdug

console.log(result);

// NOTES:
/*
- methods are just functions that belong to a specific object
- we want to find the last occuring index of (whatever we put), in this case its the string "t".
    . we use the string method .lastIndexOf
    . we use the method on the string which is stored in a variable called email
    . the result of the method we store in a variable called result, so we just need to call result in the  console.log later
- with slice, we pass in two arguments, the first where to slice from (start) and the second where to slice to (end), the rest is sliced away
- in our example we started from 0 which is d and finished at 3 which is g so it'll print all that is inbetween, which in this case is just u which makes dug
- start from the beginning use position 0
- substr is very similar to slice, we still pass two arguments and the first is still where we want to start, this time the second argument is how many characters we want to use.
- substr will grab the characters from where you set it and then take how many you set it regardless of placement, whereas slice you need to specify exactly where you want to slice

*/
