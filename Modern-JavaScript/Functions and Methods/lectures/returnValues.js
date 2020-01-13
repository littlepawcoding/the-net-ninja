// RETURNING VALUES

// function parameter (radius) is a variable local to this code block
const calcArea = function(radius) {
  // calculate the area of a cirle - radius
  // variable area = pi 3.14 multiplied by the radius squared (to the power of 2)
  // return this area value so it can be used later in the file
  let area = 3.14 * radius ** 2;
  // return keyword and area variable
  // we need to do something with the return value otherwise it won't be displayed
  return area;
};

// the return value needs to be stored in a variable (areaTotal) which has global scope
// normal call to pass through a number but has to be stored in a variable
const areaTotal = calcArea(5);
// then log the return variable (areaTotal) to see the result
console.log(areaTotal); // 78.5

// cleaner way to write the above
const calculateArea = function(radius) {
  return 3.14 * radius ** 2;
};
const area = calculateArea(5);
console.log(area); // 78.5

// NOTES:
/*
- returning a value allows us to use the function variable globally

*/
