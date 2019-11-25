// STRINGS

// examples
console.log("Hello, Dug"); // Hello, Dug

let email = "dug@thepupdug.co.uk";
console.log(email); // dug@thepupdug.co.uk

// string concatenation
let firstName = "Dug";
let lastName = "the Pup";

let fullName = firstName + " " + lastName;
console.log(fullName); // Dug the Pup

// getting characters
console.log(fullName[0]); // D
// D = 0
// u = 1
// g = 2

// string length
console.log(firstName.length); // 3

// string methods
console.log(fullName.toUpperCase()); // DUG THE PUP

let lowerCase = fullName.toLowerCase();
console.log(lowerCase, fullName); // dug the pup Dug the Pup

let index = email.indexOf("@");
console.log(index);

// NOTES:
// - can use either " " or ' ' but make sure you are consistent
// - JS is a zero based language meaning it counts from 0 up
// - .length is just a property of a string - it's not performing a snippit of code to do something (like a function would) it's finding out the property of a string
// - function is a snippit of code that performs a specific task
// - method is a function associated with a particular object or data type
// - funtion and method pretty much mean the same thing
// - toUpperCase is an example of a string method (which is basically a function - hence the () it actually does something, it takes the variable fullName, which is Dug the Pup and turns it to uppercase)
// - toLowerCase does the opposite to toUpperCase, but this time instead of printing straight to the console, we stored the toLowerCase in a variable called lowerCase, then we just need to console.log the variable.
// - good to note that some methods don't alter the orginal variable and some do. In the example above toLowerCase does not alter the variable.
// - another example of a string method is indexOf - this finds the index of whatever character is between (), in this case its the @ symbol. Finding the index means finding the position of.
// - important to note that the ("@") after the indexOf method is called an arguement and also known as parameters.
// - passing in a value into a method is called an argument. Passing in an arguement.

// SUMMARY:
// strings are a series of characters; letters, numbers and/or symbols between quotes " " ' '
// they can have properties such as .length which uses the dot notation to get those properties
// they also have methods, similar to functions, such as .toUpperCase() which makes the characters uppercase and these are triggered by the ()
// strings have properties as well as methods
