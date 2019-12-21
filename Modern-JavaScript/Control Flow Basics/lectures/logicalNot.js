// LOGICAL NOT (!)

let user = false;

if (!user) {
  console.log("You are not logged in!");
}

console.log(true); // true
console.log(!true); // false
console.log(false); // false
console.log(!false); // true

// NOTES:
/*
- logical not is represented by the exclamation sign !
- automatically converts value to a boolean and then returns the inverted
- has a high precidence than OR / AND
- only run code if false, best example is if user is logged in, if false we want to send an message saying not logged in


*/
