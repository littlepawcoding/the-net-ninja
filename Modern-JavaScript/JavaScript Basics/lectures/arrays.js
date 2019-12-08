// ARRAYS
let dogs = ["Dug", "Binki", "Kanga"];
// console.log(dogs); // (3) ["Dug", "Binki", "Kanga"]
// console.log(dogs[0]); // Dug

// dogs[2] = "Bolt";
// console.log(dogs); // (3) ["Dug", "Binki", "Bolt"]

// let ages = [20, 30, 40];
// console.log(ages[1]); // 30

// let random = ["Kat", "Dug", 7];
// console.log(random);

// console.log(dogs.length); // 3

// array methods
// let result = dogs.join(","); // Dug,Binki,Kanga
// let result = dogs.indexOf("Kanga"); // 2
// let result = dogs.concat(["Bolt", "Toby"]); // (5) ["Dug", "Binki", "Kanga", "Bolt", "Toby"]
// let result = dogs.push("Toby"); // 4
let result = dogs.pop(); // Kanga

console.log(result);

// NOTES:
/*
- arrays fall under the object data type
- they are used to hold a collection of data, like strings or numbers, that are realted to each other
- use [] square brackets to hold arrays
- arrays hold elements or values
- we have put in 3 values into an array and stored them in a variable called dogs
- if we want to display a certain value, we can use square notation console.log(dogs[0]) // Dug
- REMEMBER ARRAYS COUNT FROM 0!
- we can override a value using square notation
- or add to the array by using the next number in the index
- you can even add a value to a random number and it will print x? empty arrays in the console
- we can store different data types in arrays, ideally they should belong together as in all strings or all numbers
- it is possible to add different data types within a single array, but is ins't advised as it doesn't make sense
- arrays also use properties and methods
- .length counts how many values are INSIDE the array, it does not start from 0
- remember methods use () at the end
- join() takes an array and joins all the elements into a single string, in this case, using a ,
- indexOf() takes an array and looks for the position of the chosen value, in this case Kanga. Remember it'll count from 0 (Dug) 1 (Binki) 2 (Kanga)
- concat() takes an array and concatinates it with another array. The new array is added as an arguement for this method
- push() adds a new value to the array BUT it returns the length of the new array (remember counts from 1 not 0)in this case from 3 values to 4 values. It also alters the original value - its called a destructive method - bit of a harsh name as it doesn't destroy it, but it does change it
- pop() another destructive method - it removes the end value of an array, pops it off. It then RETURNS the value it has popped off
*/
