// SWITCH STATEMENTS

const grade = "B";

switch (grade) {
  case "A":
    console.log("You got an A!");
    break;
  case "B":
    console.log("You got an B!");
    break;
  case "C":
    console.log("You got an C!");
    break;
  default:
    console.log("Not a valid grade.");
}

// NOTES:
/*
- switch statements are similar to else if, except you can have all the cases within one code block
- grading system is the best example
- we want to create a system that matches the given grade with the list of grades and print the correct output
- when comparing cases, it always uses strict equality, equilivant of === so it checks that both value and type matches
- ^ this includes uppercase and lowercase!
- switch slightly better as using else if would look a bit messy, see below:

// above example using if statements
if (grade === "A"){
    console.log("You got an A!");
} else if (grade === "B") {
    console.log("You got a B!");
} else if (grate === "C") {
    console.log("You got a C!")
} else {
    console.log("Not a valid grade.")
}
*/
