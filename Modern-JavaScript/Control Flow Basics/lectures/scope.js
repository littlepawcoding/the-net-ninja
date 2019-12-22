// VARIABLES & BLOCK SCOPE

let age = 30; // global scope

// let age = 50; // error - cannot define age again in the same scope

if (true) {
  // inside would be 40 and outside 30 - different scopes
  let age = 40; // local scope
  let name = "Dug"; // local scope
  console.log("inside code block:", age, name); // 40 Dug

  if (true) {
    let age = 50; // new local scope
    console.log("inside nested code block:", age, name); // 50 Dug
  }
}

console.log("outside code block:", age, name); // 30
// name cannot be reached from out here!

// NOTES:
/*
- code blocks {} sections of code, important for scope
- global scope = variable set OUTSIDE a code block (in the root of the document), it can be accessed anywhere within the file, both inside and outside code block
- if you were to try and define age again `let age = 50;` you'd get an error because `age` has already been defined within the same scope
- if you redefined age INSIDE the code block `let age = 40;` it would work because it is inside the code block {} which means it is now local scope
- local scope = variable set INSIDE a code block, it can only be accessed inside the code block not outside at all
- with nested code blocks, it will take the NEAREST defined variable, which in this case is the code block `age = 40;`, which is in local scope. If that was not there, it would find the other defined variable `age = 30;` which is outside the code block which is global scope
- if we were to add another `let age = 50;` inside the nested code block, it would create another local scope only available within that code block
- using just var as the variable keyword, it IGNORES block scope, better practice to use const or let
*/
