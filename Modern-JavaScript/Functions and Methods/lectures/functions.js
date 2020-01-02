// FUNCTIONS

// function declaration
// here we have declared a function, which we can call upon at any point in our code - but we must call it!
function greet() {
  console.log("Hello there");
}

// here is calling, run or invoking the function by using the function name () and ;
// we can run this function as many times as we like
greet(); // Hello there
greet(); // Hello there

// function expression
const speak = function() {
  console.log("Say what?");
};

speak();

// NOTES:
/* 
// What are functions?
- as a data type, they fall under OBJECTS
- they are reusable blocks of code
- bit like a box with a label on it, we name the function (box) and we can use whatever is inside multiple times
- good example is when a user presses a button on a webpage, we would want it to run the block of code that is to do with the button as many times as is needed, depending how often the button is pressed
- Methods and functions are similar but have slight differences which we will learn about later

// Function Declarations & Expressions
- like with variables, we give functions a name
- a function declaration is a block of code that starts with the keyword function, it also can be hoisted
- a function expression is a block of code that is wrapped in a separate variable, it cannot be hoisted and is pretty much the only time you see a semi colon end a code block
- hoisting is when the funtion is underneath the call. JavaScript looks through the file and hoists up the code to make the call work
- hoisting does not work for expressions, it would give an error saying the call is undefined

*/
