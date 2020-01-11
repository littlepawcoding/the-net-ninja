// ARGUMENTS & PARAMETERS

// function variable called (name) - local to the code block
// PARAMETER - once value is received it is a function parameter
const speak = function(name) {
  // output (name) within a template string
  console.log(`Good day ${name}!`);
};

// speak() calls the function - no value is passing through the function so returns undefined
speak(); // Good day undefined!
// a value within the call - once called, this assigns ("Dug") to the (name) variable created within the speak function
// ARGUMENT - the value within the call is the argument
speak("Dug"); // Good day Dug!

// multiple parameters
const shout = function(name, age) {
  console.log(`HELLO ${name}! You are ${age}!`);
};
shout("Dug", 1); // HELLO Dug! You are 1!

// default values
const whisper = function(name = "Dug", sound = "Woof!") {
  console.log(`${sound} Shhhh ${name}!`);
};
whisper(); // Woof! Shhhh Dug!
whisper("Kat", "Meow!"); // Meow! Shhhh Kat!

// NOTES:
/*
- we pass values into functions to allow us to do something with that value
- these can be called arguments or parameters
- arguments are passed through the call
- parameters are variable passed through the function
- the idea overall is that we can pass a value (different if we want) into a function and use to do something
- order of arguments must match the order of the parameters
- default values can be added incase a value is not inputted, stops showing the undefined
- as soon as another value is passed through it will automatically replace the default values
*/

// what is an argument?
// what is a parameter?
// write an example that shows a function with/without an argument
