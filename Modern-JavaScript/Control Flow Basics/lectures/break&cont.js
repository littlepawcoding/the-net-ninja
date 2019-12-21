// BREAK & CONTINUE

// example using scoring system

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }
  console.log("Current score: ", scores[i]);

  if (scores[i] === 100) {
    console.log("You got the top score! Nice!");
    break;
  }
}

// NOTES:
/*
- break is used to 'break' out of a loop
- best example is for a scoring system, if user gets max points then we want the loop to stop
- continue is used to 'continue' the loop on
- using scoring example again, if user gets min points, we want the loop to continue so the user can try and get more points

- using a variable called scores, the score values are stored in an array []
- a for loop looks through the array by using the .length property on the variable scores
- first we just print the scores to the console
- using if statement to check if the current score is equal to the top score (100) or the lowest score (0)
- check by using triple equal, if the left is equal to the right run the code
- break; will stop the loop and it will not print the rest of the array, instead it will print "You got the top score! Nice!"
- even if i < scores.length it will break out of the loop because the top score has been matched (or the if statement becomes true so code is run)

- adding continue will ensure the loop continues to iterate through the array
- so if the user gets a score of 0, it will recognise that but instead of printing anything to the console it will continue with the cycle
- eventually the top score will be met and the cycle is broken
*/
