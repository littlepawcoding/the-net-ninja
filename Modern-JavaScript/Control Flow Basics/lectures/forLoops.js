// FOR LOOPS

for (let i = 0; i < 5; i++) {
  console.log("loop..", i);
}
console.log("loop finished");

// unknown itirations

const names = ["Dug", "Binki", "Kanga"];

for (let i = 0; i < names.length; i++) console.log(names[i]);

// NOTES:
/*
- loop through a chunk of code over and over
- between {} called code block
- many loops in js
- don't need ; to close a loop
- let i = 0; known as a counter
- i < 5; known as condition
- if true execute the code
- i++ always after the code block has been run
- don't usually know how many times to loop through, usually check through a chunk of data
- using names.length means it'll loop through however many items that are in the array - in this case it's 3 because we can see it, but say we were trying to pull names out of a database, we wouldn't be able to see how many or what was in there.
*/
