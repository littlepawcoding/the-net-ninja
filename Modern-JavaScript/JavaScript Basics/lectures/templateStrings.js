// TEMPLATE STRINGS
const title = "Best of Dug 2019";
const author = "Dug";
const likes = 1000;

// concatenation way
let result =
  title + " written by " + author + " (" + likes + " people like this)";
// Best of Dug 2019 written by Dug (1000 people like this)
console.log(result);

// template string way
let answer = `${title} written by ${author} (${likes} people like this)`;
// Best of Dug 2019 written by Dug (1000 people like this)
console.log(answer);

// html templates
let html = `
<h2>${title}</h2>
<p>written by ${author}</p>
<p>${likes} people like this</p>
`;
console.log(html);

// NOTES:
/*
- not quite a new data type but more like a different version of a string
- template strings are also known as template literals
- allows us to inject variables directly into the string without having to come out of it
- can use template strings to output some content to the browser, explains more later on in the course
*/
