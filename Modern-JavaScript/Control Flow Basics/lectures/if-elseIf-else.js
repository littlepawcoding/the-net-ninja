// IF STATEMENTS

const age = 25;

if (age > 20) {
  console.log("Older than 20 years old");
}

const dogs = ["Dug", "Binki", "Kanga"];

if (dogs.length > 2) {
  console.log("Doggies!!");
}

// ELSE

const password = "p@ss";

if (password.length >= 8) {
  console.log("password is long enough");
} else if (password.includes("@")) {
  console.log("great password");
} else {
  console.log("please increase password length");
}

// NOTES:
/*
- control flow conditional statements 
- only execute the code block if the the statement is true
- if statements only execute the code block once
- else statements can be helpful to send feedback to the user
- it will only run one block of code at a time, either the if, else if or else statement
*/
